<?php

namespace App\Http\Controllers;

use App\Services\AlumniService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapController extends Controller
{
    private AlumniService $alumniService;

    /**
     * Inject services needed by map pages.
     */
    public function __construct(AlumniService $alumniService)
    {
        $this->alumniService = $alumniService;
    }

    /**
     * Map module overview.
     */
    public function index(Request $request)
    {
        $selectedYear = $request->integer('year') ?: null;
        $selectedJob = $request->string('job')->trim()->toString() ?: null;
        $selectedCity = $request->string('city')->trim()->toString() ?: null;
        $mode = $request->string('mode')->lower()->toString();
        $mode = in_array($mode, ['city', 'domisili'], true) ? $mode : 'city';

        $filters = [
            'graduation_year' => $selectedYear,
            'job' => $selectedJob,
            'city' => $selectedCity,
        ];

        $mapStats = $this->alumniService->getCityDemographicsFiltered($filters, $mode);

        return Inertia::render('Map/Index', [
            'mapStats' => $mapStats,
            'filterOptions' => Inertia::lazy(fn () => $this->alumniService->getMapFilterOptions()),
            'filters' => [
                'year' => $selectedYear,
                'job' => $selectedJob,
                'city' => $selectedCity,
                'mode' => $mode,
            ],
            'topCities' => array_slice($mapStats, 0, 5),
        ]);
    }
}
