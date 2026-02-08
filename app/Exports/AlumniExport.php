<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

/**
 * Export alumni rows for Excel.
 */
class AlumniExport implements FromCollection, WithHeadings, WithMapping
{
    private Collection $rows;

    /**
     * @param Collection $rows
     */
    public function __construct(Collection $rows)
    {
        $this->rows = $rows;
    }

    /**
     * Return the data collection.
     */
    public function collection(): Collection
    {
        return $this->rows;
    }

    /**
     * Define column headings.
     */
    public function headings(): array
    {
        return [
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
        ];
    }

    /**
     * Map each row to export columns.
     *
     * @param object $row
     */
    public function map($row): array
    {
        return [
            $row->name,
            $row->nisn,
            $row->nipm,
            $row->gender,
            $row->graduation_year,
            $row->province,
            $row->city,
            $row->district,
            $row->job,
            $row->company,
            $row->university,
            $row->domisili,
        ];
    }
}
