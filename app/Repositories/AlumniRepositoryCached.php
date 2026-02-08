<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Cache;

/**
 * Cached alumni repository decorator.
 */
class AlumniRepositoryCached implements AlumniInterface
{
    private AlumniInterface $inner;
    private int $ttlSeconds;

    /**
     * Wrap an alumni repository with cache.
     */
    public function __construct(AlumniInterface $inner, int $ttlSeconds)
    {
        $this->inner = $inner;
        $this->ttlSeconds = $ttlSeconds;
    }

    /**
     * Get total alumni count (cached).
     */
    public function countAll(): int
    {
        return Cache::remember(
            'alumni.count_all',
            $this->ttlSeconds,
            fn () => $this->inner->countAll()
        );
    }

    /**
     * Get alumni count by gender code (cached).
     */
    public function countByGender(string $gender): int
    {
        $cacheKey = 'alumni.count_gender.' . $gender;

        return Cache::remember(
            $cacheKey,
            $this->ttlSeconds,
            fn () => $this->inner->countByGender($gender)
        );
    }

    /**
     * Get alumni demographics grouped by city (cached).
     */
    public function getCityGenderStats(): array
    {
        return Cache::remember(
            'alumni.city_gender_stats',
            $this->ttlSeconds,
            fn () => $this->inner->getCityGenderStats()
        );
    }

    /**
     * Get alumni demographics grouped by city or domisili with filters.
     */
    public function getCityGenderStatsFiltered(array $filters, string $groupBy = 'city'): array
    {
        $key = 'alumni.city_gender_stats_filtered.' . $groupBy . '.' . md5(json_encode($filters));

        return Cache::remember(
            $key,
            $this->ttlSeconds,
            fn () => $this->inner->getCityGenderStatsFiltered($filters, $groupBy)
        );
    }

    /**
     * Get alumni counts grouped by graduation year (cached).
     */
    public function getGraduationYearStats(): array
    {
        return Cache::remember(
            'alumni.graduation_year_stats',
            $this->ttlSeconds,
            fn () => $this->inner->getGraduationYearStats()
        );
    }

    /**
     * Get top jobs by alumni count (cached).
     */
    public function getTopJobs(int $limit = 5): array
    {
        return Cache::remember(
            'alumni.top_jobs.' . $limit,
            $this->ttlSeconds,
            fn () => $this->inner->getTopJobs($limit)
        );
    }

    /**
     * Get top companies by alumni count (cached).
     */
    public function getTopCompanies(int $limit = 5): array
    {
        return Cache::remember(
            'alumni.top_companies.' . $limit,
            $this->ttlSeconds,
            fn () => $this->inner->getTopCompanies($limit)
        );
    }

    /**
     * Get paginated alumni list for buku induk.
     */
    public function getBukuIndukPaginated(array $filters, int $perPage = 10)
    {
        return $this->inner->getBukuIndukPaginated($filters, $perPage);
    }

    /**
     * Get filter options for buku induk (cached).
     */
    public function getBukuIndukFilterOptions(): array
    {
        return Cache::remember(
            'alumni.buku_induk_filters',
            $this->ttlSeconds,
            fn () => $this->inner->getBukuIndukFilterOptions()
        );
    }

    /**
     * Get filter options for map module (cached).
     */
    public function getMapFilterOptions(): array
    {
        return Cache::remember(
            'alumni.map_filters',
            $this->ttlSeconds,
            fn () => $this->inner->getMapFilterOptions()
        );
    }

    /**
     * Get education stats grouped by education_last (cached).
     */
    public function getEducationStats(array $filters): array
    {
        $key = 'alumni.education_stats.' . md5(json_encode($filters));

        return Cache::remember(
            $key,
            $this->ttlSeconds,
            fn () => $this->inner->getEducationStats($filters)
        );
    }

    /**
     * Get top universities by alumni count (cached).
     */
    public function getTopUniversities(array $filters, int $limit = 10): array
    {
        $key = 'alumni.top_universities.' . $limit . '.' . md5(json_encode($filters));

        return Cache::remember(
            $key,
            $this->ttlSeconds,
            fn () => $this->inner->getTopUniversities($filters, $limit)
        );
    }

    /**
     * Get top departments by alumni count (cached).
     */
    public function getTopDepartments(array $filters, int $limit = 10): array
    {
        $key = 'alumni.top_departments.' . $limit . '.' . md5(json_encode($filters));

        return Cache::remember(
            $key,
            $this->ttlSeconds,
            fn () => $this->inner->getTopDepartments($filters, $limit)
        );
    }

    /**
     * Get filter options for education module (cached).
     */
    public function getEducationFilterOptions(): array
    {
        return Cache::remember(
            'alumni.education_filters',
            $this->ttlSeconds,
            fn () => $this->inner->getEducationFilterOptions()
        );
    }

    /**
     * Get paginated alumni list for talent market.
     */
    public function getTalentPaginated(array $filters, int $perPage = 10)
    {
        return $this->inner->getTalentPaginated($filters, $perPage);
    }

    /**
     * Get filter options for talent market (cached).
     */
    public function getTalentFilterOptions(): array
    {
        return Cache::remember(
            'alumni.talent_filters',
            $this->ttlSeconds,
            fn () => $this->inner->getTalentFilterOptions()
        );
    }

    /**
     * Get alumni data for export (no pagination).
     */
    public function getBukuIndukExport(array $filters)
    {
        return $this->inner->getBukuIndukExport($filters);
    }

    /**
     * Count alumni rows for buku induk filters.
     */
    public function countBukuInduk(array $filters): int
    {
        return $this->inner->countBukuInduk($filters);
    }
}
