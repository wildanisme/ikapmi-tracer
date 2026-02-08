<?php

namespace App\Http\Controllers;

use App\Exports\AlumniExport;
use App\Services\AlumniService;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class AlumniController extends Controller
{
    private AlumniService $alumniService;

    /**
     * Inject services needed by alumni pages.
     */
    public function __construct(AlumniService $alumniService)
    {
        $this->alumniService = $alumniService;
    }

    /**
     * Buku Induk: list all alumni with filters and pagination.
     */
    public function index(Request $request)
    {
        $filters = [
            'search' => $request->string('search')->trim()->toString(),
            'gender' => $request->string('gender')->trim()->toString(),
            'graduation_year' => $request->string('graduation_year')->trim()->toString(),
            'province' => $request->string('province')->trim()->toString(),
            'city' => $request->string('city')->trim()->toString(),
            'district' => $request->string('district')->trim()->toString(),
            'job' => $request->string('job')->trim()->toString(),
            'company' => $request->string('company')->trim()->toString(),
            'domisili' => $request->string('domisili')->trim()->toString(),
            'sort' => $request->string('sort')->trim()->toString(),
            'direction' => $request->string('direction')->trim()->toString(),
        ];

        $perPage = (int) $request->integer('per_page', 10);
        $filters['per_page'] = $perPage;

        if ($request->boolean('download')) {
            $format = $request->string('download_format')->lower()->toString();

            if ($format === 'xlsx' || $format === 'excel') {
                $rows = $this->alumniService->getBukuIndukExport($filters);

                return Excel::download(new AlumniExport($rows), 'buku-induk-alumni.xlsx');
            }

            if ($format === 'pdf') {
                $maxRows = 2000;
                $totalRows = $this->alumniService->countBukuInduk($filters);

                if ($totalRows > $maxRows) {
                    return response()
                        ->view('exports.pdf-too-large', [
                            'total' => $totalRows,
                            'max' => $maxRows,
                        ], 413);
                }

                set_time_limit(0);
                ini_set('memory_limit', '1024M');

                $scope = $request->string('download_scope')->lower()->toString();
                if ($scope === 'page') {
                    $paginated = $this->alumniService->getBukuIndukPaginated($filters, $perPage);
                    $rows = collect($paginated->items());
                } else {
                    $rows = $this->alumniService->getBukuIndukExport($filters);
                }

                $pdf = Pdf::loadView('exports.alumni', ['rows' => $rows])
                    ->setPaper('a4', 'landscape');

                return $pdf->download('buku-induk-alumni.pdf');
            }

            $rows = $this->alumniService->getBukuIndukExport($filters);

            return response()->streamDownload(function () use ($rows) {
                $handle = fopen('php://output', 'w');
                fputcsv($handle, [
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
                ]);

                foreach ($rows as $row) {
                    fputcsv($handle, [
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
                    ]);
                }

                fclose($handle);
            }, 'buku-induk-alumni.csv');
        }

        return Inertia::render('Alumni/BukuInduk', [
            'alumni' => $this->alumniService->getBukuIndukPaginated($filters, $perPage),
            'filters' => $filters,
            'filterOptions' => Inertia::lazy(fn () => $this->alumniService->getBukuIndukFilterOptions()),
        ]);
    }
}
