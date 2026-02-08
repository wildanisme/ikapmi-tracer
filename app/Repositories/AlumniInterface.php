<?php

namespace App\Repositories;

/**
 * Contract for alumni data access.
 */
interface AlumniInterface
{
    /**
     * Get total alumni count.
     */
    public function countAll(): int;

    /**
     * Get alumni count by gender code.
     */
    public function countByGender(string $gender): int;

    /**
     * Get alumni demographics grouped by city.
     */
    public function getCityGenderStats(): array;

    /**
     * Get alumni demographics grouped by city or domisili with filters.
     */
    public function getCityGenderStatsFiltered(array $filters, string $groupBy = 'city'): array;

    /**
     * Get alumni counts grouped by graduation year.
     */
    public function getGraduationYearStats(): array;

    /**
     * Get top jobs by alumni count.
     */
    public function getTopJobs(int $limit = 5): array;

    /**
     * Get top companies by alumni count.
     */
    public function getTopCompanies(int $limit = 5): array;

    /**
     * Get paginated alumni list for buku induk.
     */
    public function getBukuIndukPaginated(array $filters, int $perPage = 10);

    /**
     * Get filter options for buku induk.
     */
    public function getBukuIndukFilterOptions(): array;

    /**
     * Get map filter options.
     */
    public function getMapFilterOptions(): array;

    /**
     * Get education stats grouped by education_last.
     */
    public function getEducationStats(array $filters): array;

    /**
     * Get top universities by alumni count.
     */
    public function getTopUniversities(array $filters, int $limit = 10): array;

    /**
     * Get top departments by alumni count.
     */
    public function getTopDepartments(array $filters, int $limit = 10): array;

    /**
     * Get filter options for education module.
     */
    public function getEducationFilterOptions(): array;

    /**
     * Get paginated alumni list for talent market.
     */
    public function getTalentPaginated(array $filters, int $perPage = 10);

    /**
     * Get filter options for talent market.
     */
    public function getTalentFilterOptions(): array;

    /**
     * Get alumni data for export (no pagination).
     */
    public function getBukuIndukExport(array $filters);

    /**
     * Get total count for buku induk filters.
     */
    public function countBukuInduk(array $filters): int;
}
