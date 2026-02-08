<?php

namespace App\Services;

use App\Repositories\AlumniInterface;
use Illuminate\Support\Str;

/**
 * Business logic for alumni-related metrics.
 */
class AlumniService
{
    private AlumniInterface $alumniRepository;

    /**
     * Create the service with a repository dependency.
     */
    public function __construct(AlumniInterface $alumniRepository)
    {
        $this->alumniRepository = $alumniRepository;
    }

    /**
     * Return gender-based alumni metrics using L/P codes.
     */
    public function getGenderMetrics(): array
    {
        return [
            'total' => $this->alumniRepository->countAll(),
            'male' => $this->alumniRepository->countByGender('L'),
            'female' => $this->alumniRepository->countByGender('P'),
        ];
    }

    /**
     * Return alumni demographics grouped by city with optional coordinates.
     */
    public function getCityDemographics(): array
    {
        $stats = $this->alumniRepository->getCityGenderStats();
        $totalAll = array_sum(array_column($stats, 'total')) ?: 1;
        $coordinates = config('alumni.city_coordinates', []);
        $normalizedCoordinates = [];

        foreach ($coordinates as $city => $coords) {
            $normalizedCoordinates[Str::lower(trim((string) $city))] = $coords;
        }

        return array_map(function (array $item) use ($normalizedCoordinates, $totalAll) {
            $cityKey = Str::lower(trim((string) $item['city']));
            $coords = $normalizedCoordinates[$cityKey] ?? null;

            if ((! $item['lat'] || ! $item['lng']) && $coords) {
                $item['lat'] = $coords['lat'] ?? null;
                $item['lng'] = $coords['lng'] ?? null;
            }

            $item['percentage'] = (int) round(($item['total'] / $totalAll) * 100);

            return $item;
        }, $stats);
    }

    /**
     * Return city/domisili stats with filters for map module.
     */
    public function getCityDemographicsFiltered(array $filters, string $groupBy = 'city'): array
    {
        $stats = $this->alumniRepository->getCityGenderStatsFiltered($filters, $groupBy);
        $totalAll = array_sum(array_column($stats, 'total')) ?: 1;

        return array_map(function (array $item) use ($totalAll) {
            $item['percentage'] = (int) round(($item['total'] / $totalAll) * 100);

            return $item;
        }, $stats);
    }

    /**
     * Return chart-ready data grouped by graduation year.
     */
    public function getGraduationYearChart(): array
    {
        $stats = $this->alumniRepository->getGraduationYearStats();

        return [
            'categories' => array_column($stats, 'year'),
            'series' => [
                [
                    'name' => 'Laki-laki',
                    'data' => array_map(fn ($row) => $row['male'], $stats),
                ],
                [
                    'name' => 'Perempuan',
                    'data' => array_map(fn ($row) => $row['female'], $stats),
                ],
            ],
        ];
    }

    /**
     * Return top jobs by alumni count.
     */
    public function getTopJobs(int $limit = 5): array
    {
        return $this->alumniRepository->getTopJobs($limit);
    }

    /**
     * Return top companies by alumni count.
     */
    public function getTopCompanies(int $limit = 5): array
    {
        return $this->alumniRepository->getTopCompanies($limit);
    }

    /**
     * Return paginated alumni list for buku induk.
     */
    public function getBukuIndukPaginated(array $filters, int $perPage = 10)
    {
        return $this->alumniRepository->getBukuIndukPaginated($filters, $perPage);
    }

    /**
     * Return filter options for buku induk.
     */
    public function getBukuIndukFilterOptions(): array
    {
        return $this->alumniRepository->getBukuIndukFilterOptions();
    }

    /**
     * Return filter options for map module.
     */
    public function getMapFilterOptions(): array
    {
        return $this->alumniRepository->getMapFilterOptions();
    }

    /**
     * Return education stats grouped by education_last.
     */
    public function getEducationStats(array $filters): array
    {
        return $this->alumniRepository->getEducationStats($filters);
    }

    /**
     * Return top universities by alumni count.
     */
    public function getTopUniversities(array $filters, int $limit = 10): array
    {
        return $this->alumniRepository->getTopUniversities($filters, $limit);
    }

    /**
     * Return top departments by alumni count.
     */
    public function getTopDepartments(array $filters, int $limit = 10): array
    {
        return $this->alumniRepository->getTopDepartments($filters, $limit);
    }

    /**
     * Return filter options for education module.
     */
    public function getEducationFilterOptions(): array
    {
        return $this->alumniRepository->getEducationFilterOptions();
    }

    /**
     * Return paginated alumni list for talent market.
     */
    public function getTalentPaginated(array $filters, int $perPage = 10)
    {
        return $this->alumniRepository->getTalentPaginated($filters, $perPage);
    }

    /**
     * Return filter options for talent market.
     */
    public function getTalentFilterOptions(): array
    {
        return $this->alumniRepository->getTalentFilterOptions();
    }

    /**
     * Return alumni data for export (no pagination).
     */
    public function getBukuIndukExport(array $filters)
    {
        return $this->alumniRepository->getBukuIndukExport($filters);
    }

    /**
     * Return total count for buku induk filters.
     */
    public function countBukuInduk(array $filters): int
    {
        return $this->alumniRepository->countBukuInduk($filters);
    }
}
