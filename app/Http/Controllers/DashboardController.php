<?php

namespace App\Http\Controllers;

use App\Services\AlumniService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private AlumniService $alumniService;

    /**
     * Inject services needed by the dashboard.
     */
    public function __construct(AlumniService $alumniService)
    {
        $this->alumniService = $alumniService;
    }

    /**
     * Render the dashboard with alumni metrics.
     */
    public function index()
    {
        return Inertia::render('Dashboard/index', [
            'alumniMetrics' => $this->alumniService->getGenderMetrics(),
            'alumniCityDemographics' => $this->alumniService->getCityDemographics(),
            'alumniGraduationChart' => $this->alumniService->getGraduationYearChart(),
            'alumniTopJobs' => $this->alumniService->getTopJobs(5),
            'alumniTopCompanies' => $this->alumniService->getTopCompanies(5),
        ]);
    }
}
