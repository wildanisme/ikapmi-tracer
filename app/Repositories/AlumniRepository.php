<?php

namespace App\Repositories;

use App\Models\Alumni;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Eloquent-based alumni repository.
 */
class AlumniRepository implements AlumniInterface
{
    /**
     * Get total alumni count.
     */
    public function countAll(): int
    {
        return Alumni::count();
    }

    /**
     * Get alumni count by gender code.
     */
    public function countByGender(string $gender): int
    {
        return Alumni::where('gender', $gender)->count();
    }

    /**
     * Get alumni demographics grouped by city.
     */
    public function getCityGenderStats(): array
    {
        $table = (new Alumni())->getTable();
        $cityLat = Schema::hasColumn($table, 'city_lat');
        $cityLng = Schema::hasColumn($table, 'city_lng');
        $lat = Schema::hasColumn($table, 'latitude');
        $lng = Schema::hasColumn($table, 'longitude');
        $simpleLat = Schema::hasColumn($table, 'lat');
        $simpleLng = Schema::hasColumn($table, 'lng');

        $selects = [
            'city',
            DB::raw('COUNT(*) as total'),
            DB::raw("SUM(CASE WHEN gender = 'L' THEN 1 ELSE 0 END) as male"),
            DB::raw("SUM(CASE WHEN gender = 'P' THEN 1 ELSE 0 END) as female"),
        ];

        if ($cityLat && $cityLng) {
            $selects[] = DB::raw('AVG(city_lat) as lat');
            $selects[] = DB::raw('AVG(city_lng) as lng');
        } elseif ($lat && $lng) {
            $selects[] = DB::raw('AVG(latitude) as lat');
            $selects[] = DB::raw('AVG(longitude) as lng');
        } elseif ($simpleLat && $simpleLng) {
            $selects[] = DB::raw('AVG(lat) as lat');
            $selects[] = DB::raw('AVG(lng) as lng');
        }

        return Alumni::query()
            ->select($selects)
            ->whereNotNull('city')
            ->where('city', '!=', '')
            ->groupBy('city')
            ->orderByDesc('total')
            ->get()
            ->map(function ($row) {
                return [
                    'city' => $row->city,
                    'total' => (int) $row->total,
                    'male' => (int) $row->male,
                    'female' => (int) $row->female,
                    'lat' => isset($row->lat) ? (float) $row->lat : null,
                    'lng' => isset($row->lng) ? (float) $row->lng : null,
                ];
            })
            ->all();
    }

    /**
     * Get alumni demographics grouped by city or domisili with filters.
     */
    public function getCityGenderStatsFiltered(array $filters, string $groupBy = 'city'): array
    {
        $groupBy = $groupBy === 'domisili' ? 'domisili' : 'city';

        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);

        return $query
            ->select([
                $groupBy . ' as city',
                DB::raw('COUNT(*) as total'),
                DB::raw("SUM(CASE WHEN gender = 'L' THEN 1 ELSE 0 END) as male"),
                DB::raw("SUM(CASE WHEN gender = 'P' THEN 1 ELSE 0 END) as female"),
            ])
            ->whereNotNull($groupBy)
            ->where($groupBy, '!=', '')
            ->groupBy($groupBy)
            ->orderByDesc('total')
            ->get()
            ->map(function ($row) {
                return [
                    'city' => (string) $row->city,
                    'total' => (int) $row->total,
                    'male' => (int) $row->male,
                    'female' => (int) $row->female,
                ];
            })
            ->all();
    }

    /**
     * Get alumni counts grouped by graduation year.
     */
    public function getGraduationYearStats(): array
    {
        $rows = Alumni::query()
            ->select([
                'graduation_year',
                DB::raw('COUNT(*) as total'),
                DB::raw("SUM(CASE WHEN gender = 'L' THEN 1 ELSE 0 END) as male"),
                DB::raw("SUM(CASE WHEN gender = 'P' THEN 1 ELSE 0 END) as female"),
            ])
            ->whereNotNull('graduation_year')
            ->where('graduation_year', '>', 0)
            ->groupBy('graduation_year')
            ->get()
            ->sortBy(fn ($row) => (int) $row->graduation_year)
            ->values();

        return $rows
            ->map(function ($row) {
                return [
                    'year' => (string) $row->graduation_year,
                    'total' => (int) $row->total,
                    'male' => (int) $row->male,
                    'female' => (int) $row->female,
                ];
            })
            ->all();
    }

    /**
     * Get top jobs by alumni count.
     */
    public function getTopJobs(int $limit = 5): array
    {
        $table = (new Alumni())->getTable();
        $jobField = 'job';

        if (! Schema::hasColumn($table, $jobField)) {
            return [];
        }

        return Alumni::query()
            ->select([$jobField, DB::raw('COUNT(*) as total')])
            ->whereNotNull($jobField)
            ->where($jobField, '!=', '')
            ->groupBy($jobField)
            ->orderByDesc('total')
            ->limit($limit)
            ->get()
            ->map(function ($row) use ($jobField) {
                return [
                    'name' => (string) $row->{$jobField},
                    'total' => (int) $row->total,
                ];
            })
            ->all();
    }

    /**
     * Get top companies by alumni count.
     */
    public function getTopCompanies(int $limit = 5): array
    {
        $table = (new Alumni())->getTable();
        $companyField = 'company';

        if (! Schema::hasColumn($table, $companyField)) {
            return [];
        }

        return Alumni::query()
            ->select([$companyField, DB::raw('COUNT(*) as total')])
            ->whereNotNull($companyField)
            ->where($companyField, '!=', '')
            ->groupBy($companyField)
            ->orderByDesc('total')
            ->limit($limit)
            ->get()
            ->map(function ($row) use ($companyField) {
                return [
                    'name' => (string) $row->{$companyField},
                    'total' => (int) $row->total,
                ];
            })
            ->all();
    }

    /**
     * Get paginated alumni list for buku induk.
     */
    public function getBukuIndukPaginated(array $filters, int $perPage = 10)
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);
        $this->applyBukuIndukSorting($query, $filters);

        return $query
            ->paginate($perPage)
            ->withQueryString();
    }

    /**
     * Get filter options for buku induk.
     */
    public function getBukuIndukFilterOptions(): array
    {
        $years = Alumni::query()
            ->select('graduation_year')
            ->whereNotNull('graduation_year')
            ->where('graduation_year', '>', 0)
            ->distinct()
            ->orderBy('graduation_year')
            ->pluck('graduation_year')
            ->map(fn ($year) => (int) $year)
            ->values()
            ->all();

        $provinces = Alumni::query()
            ->select('province')
            ->whereNotNull('province')
            ->where('province', '!=', '')
            ->distinct()
            ->orderBy('province')
            ->pluck('province')
            ->values()
            ->all();

        $jobs = Alumni::query()
            ->select('job')
            ->whereNotNull('job')
            ->where('job', '!=', '')
            ->distinct()
            ->orderBy('job')
            ->pluck('job')
            ->values()
            ->all();

        $companies = Alumni::query()
            ->select('company')
            ->whereNotNull('company')
            ->where('company', '!=', '')
            ->distinct()
            ->orderBy('company')
            ->pluck('company')
            ->values()
            ->all();

        $domisilis = Alumni::query()
            ->select('domisili')
            ->whereNotNull('domisili')
            ->where('domisili', '!=', '')
            ->distinct()
            ->orderBy('domisili')
            ->pluck('domisili')
            ->values()
            ->all();

        $provinceCities = Alumni::query()
            ->select(['province', 'city'])
            ->whereNotNull('province')
            ->whereNotNull('city')
            ->where('province', '!=', '')
            ->where('city', '!=', '')
            ->distinct()
            ->orderBy('province')
            ->orderBy('city')
            ->get();

        $citiesByProvince = [];
        foreach ($provinceCities as $row) {
            $citiesByProvince[$row->province][] = $row->city;
        }

        $cityDistricts = Alumni::query()
            ->select(['province', 'city', 'district'])
            ->whereNotNull('province')
            ->whereNotNull('city')
            ->whereNotNull('district')
            ->where('province', '!=', '')
            ->where('city', '!=', '')
            ->where('district', '!=', '')
            ->distinct()
            ->orderBy('province')
            ->orderBy('city')
            ->orderBy('district')
            ->get();

        $districtsByCity = [];
        foreach ($cityDistricts as $row) {
            $key = $row->province . '::' . $row->city;
            $districtsByCity[$key][] = $row->district;
        }

        return [
            'years' => $years,
            'provinces' => $provinces,
            'jobs' => $jobs,
            'companies' => $companies,
            'domisilis' => $domisilis,
            'cities' => [],
            'citiesByProvince' => $citiesByProvince,
            'districtsByCity' => $districtsByCity,
        ];
    }

    /**
     * Get filter options for map module.
     */
    public function getMapFilterOptions(): array
    {
        $years = Alumni::query()
            ->select('graduation_year')
            ->whereNotNull('graduation_year')
            ->where('graduation_year', '>', 0)
            ->distinct()
            ->orderBy('graduation_year')
            ->pluck('graduation_year')
            ->map(fn ($year) => (int) $year)
            ->values()
            ->all();

        $jobs = Alumni::query()
            ->select('job')
            ->whereNotNull('job')
            ->where('job', '!=', '')
            ->distinct()
            ->orderBy('job')
            ->pluck('job')
            ->values()
            ->all();

        $cities = Alumni::query()
            ->select('city')
            ->whereNotNull('city')
            ->where('city', '!=', '')
            ->distinct()
            ->orderBy('city')
            ->pluck('city')
            ->values()
            ->all();

        return [
            'years' => $years,
            'jobs' => $jobs,
            'cities' => $cities,
        ];
    }

    /**
     * Get education stats grouped by education_last.
     */
    public function getEducationStats(array $filters): array
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);
        $order = [
            'SMA/SMK',
            'D1',
            'D2',
            'D3',
            'D4',
            'S1',
            'S2',
            'S3',
        ];

        $cases = [];
        foreach ($order as $index => $label) {
            $cases[] = "WHEN '{$label}' THEN " . ($index + 1);
        }
        $orderBy = 'CASE education_last ' . implode(' ', $cases) . ' ELSE 999 END';

        return $query
            ->select([
                'education_last',
                DB::raw('COUNT(*) as total'),
            ])
            ->whereNotNull('education_last')
            ->where('education_last', '!=', '')
            ->groupBy('education_last')
            ->orderByRaw($orderBy)
            ->orderBy('education_last')
            ->get()
            ->map(function ($row) {
                return [
                    'label' => (string) $row->education_last,
                    'total' => (int) $row->total,
                ];
            })
            ->all();
    }

    /**
     * Get top universities by alumni count.
     */
    public function getTopUniversities(array $filters, int $limit = 10): array
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);

        return $query
            ->select([
                'university',
                DB::raw('COUNT(*) as total'),
            ])
            ->whereNotNull('university')
            ->where('university', '!=', '')
            ->groupBy('university')
            ->orderByDesc('total')
            ->limit($limit)
            ->get()
            ->map(function ($row) {
                return [
                    'label' => (string) $row->university,
                    'total' => (int) $row->total,
                ];
            })
            ->all();
    }

    /**
     * Get top departments by alumni count.
     */
    public function getTopDepartments(array $filters, int $limit = 10): array
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);

        return $query
            ->select([
                'department',
                DB::raw('COUNT(*) as total'),
            ])
            ->whereNotNull('department')
            ->where('department', '!=', '')
            ->groupBy('department')
            ->orderByDesc('total')
            ->limit($limit)
            ->get()
            ->map(function ($row) {
                return [
                    'label' => (string) $row->department,
                    'total' => (int) $row->total,
                ];
            })
            ->all();
    }

    /**
     * Get filter options for education module.
     */
    public function getEducationFilterOptions(): array
    {
        $years = Alumni::query()
            ->select('graduation_year')
            ->whereNotNull('graduation_year')
            ->where('graduation_year', '>', 0)
            ->distinct()
            ->orderBy('graduation_year')
            ->pluck('graduation_year')
            ->map(fn ($year) => (int) $year)
            ->values()
            ->all();

        $universities = Alumni::query()
            ->select('university')
            ->whereNotNull('university')
            ->where('university', '!=', '')
            ->distinct()
            ->orderBy('university')
            ->pluck('university')
            ->values()
            ->all();

        return [
            'years' => $years,
            'universities' => $universities,
        ];
    }

    /**
     * Get paginated alumni list for talent market.
     */
    public function getTalentPaginated(array $filters, int $perPage = 10)
    {
        $filtersForBase = $filters;
        $filtersForBase['search'] = '';

        $query = $this->applyBukuIndukFilters(Alumni::query(), $filtersForBase)
            ->whereNotNull('job')
            ->where('job', '!=', '');

        if (! empty($filters['search'])) {
            $driver = DB::connection()->getDriverName();
            $likeOperator = $driver === 'pgsql' ? 'ilike' : 'like';
            $search = trim((string) $filters['search']);
            $pattern = '%' . $search . '%';

            $query->where(function ($sub) use ($likeOperator, $pattern) {
                $sub->where('name', $likeOperator, $pattern)
                    ->orWhere('nisn', $likeOperator, $pattern)
                    ->orWhere('nipm', $likeOperator, $pattern)
                    ->orWhere('job', $likeOperator, $pattern)
                    ->orWhere('company', $likeOperator, $pattern);
            });
        }

        $this->applyBukuIndukSorting($query, $filters);

        return $query
            ->paginate($perPage)
            ->withQueryString();
    }

    /**
     * Get filter options for talent market.
     */
    public function getTalentFilterOptions(): array
    {
        $provinces = Alumni::query()
            ->select('province')
            ->whereNotNull('province')
            ->where('province', '!=', '')
            ->distinct()
            ->orderBy('province')
            ->pluck('province')
            ->values()
            ->all();

        $provinceCities = Alumni::query()
            ->select(['province', 'city'])
            ->whereNotNull('province')
            ->whereNotNull('city')
            ->where('province', '!=', '')
            ->where('city', '!=', '')
            ->distinct()
            ->orderBy('province')
            ->orderBy('city')
            ->get();

        $citiesByProvince = [];
        foreach ($provinceCities as $row) {
            $citiesByProvince[$row->province][] = $row->city;
        }

        $jobs = Alumni::query()
            ->select('job')
            ->whereNotNull('job')
            ->where('job', '!=', '')
            ->distinct()
            ->orderBy('job')
            ->pluck('job')
            ->values()
            ->all();

        $years = Alumni::query()
            ->select('graduation_year')
            ->whereNotNull('graduation_year')
            ->where('graduation_year', '>', 0)
            ->distinct()
            ->orderBy('graduation_year')
            ->pluck('graduation_year')
            ->map(fn ($year) => (int) $year)
            ->values()
            ->all();

        return [
            'provinces' => $provinces,
            'jobs' => $jobs,
            'years' => $years,
            'citiesByProvince' => $citiesByProvince,
        ];
    }

    /**
     * Get alumni data for export (no pagination).
     */
    public function getBukuIndukExport(array $filters)
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);
        $this->applyBukuIndukSorting($query, $filters);

        return $query
            ->select([
                'name',
                'nisn',
                'nipm',
                'gender',
                'graduation_year',
                'province',
                'city',
                'district',
                'job',
                'company',
                'university',
                'domisili',
            ])
            ->get();
    }

    /**
     * Count alumni rows for buku induk filters.
     */
    public function countBukuInduk(array $filters): int
    {
        $query = $this->applyBukuIndukFilters(Alumni::query(), $filters);

        return $query->count();
    }

    private function applyBukuIndukFilters($query, array $filters)
    {
        $driver = DB::connection()->getDriverName();
        $likeOperator = $driver === 'pgsql' ? 'ilike' : 'like';

        if (! empty($filters['search'])) {
            $search = trim((string) $filters['search']);
            $query->where(function ($sub) use ($likeOperator, $search) {
                $pattern = '%' . $search . '%';
                $sub->where('name', $likeOperator, $pattern)
                    ->orWhere('nisn', $likeOperator, $pattern)
                    ->orWhere('nipm', $likeOperator, $pattern);
            });
        }

        if (! empty($filters['gender'])) {
            $query->where('gender', $filters['gender']);
        }

        if (! empty($filters['graduation_year'])) {
            $query->where('graduation_year', (int) $filters['graduation_year']);
        }

        if (! empty($filters['province'])) {
            $query->where('province', $filters['province']);
        }

        if (! empty($filters['city'])) {
            $query->where('city', $filters['city']);
        }

        if (! empty($filters['district'])) {
            $query->where('district', $filters['district']);
        }

        if (! empty($filters['job'])) {
            $query->where('job', $filters['job']);
        }

        if (! empty($filters['company'])) {
            $query->where('company', $filters['company']);
        }

        if (! empty($filters['university'])) {
            $query->where('university', $filters['university']);
        }

        if (! empty($filters['domisili'])) {
            $query->where('domisili', $filters['domisili']);
        }

        if (! empty($filters['department'])) {
            $query->where('department', $filters['department']);
        }

        return $query;
    }

    private function applyBukuIndukSorting($query, array $filters): void
    {
        $allowed = [
            'name',
            'nisn',
            'nipm',
            'gender',
            'graduation_year',
            'province',
            'city',
            'district',
            'job',
            'company',
        ];

        $sort = $filters['sort'] ?? '';
        $direction = strtolower($filters['direction'] ?? 'asc');

        if ($sort && in_array($sort, $allowed, true)) {
            $query->orderBy($sort, $direction === 'desc' ? 'desc' : 'asc');
            return;
        }

        $query->orderByDesc('id');
    }
}
