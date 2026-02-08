<?php

namespace App\Http\Controllers;

use App\Services\AlumniService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
    private AlumniService $alumniService;

    /**
     * Inject services needed by education module.
     */
    public function __construct(AlumniService $alumniService)
    {
        $this->alumniService = $alumniService;
    }

    /**
     * Education module overview.
     */
    public function index(Request $request)
    {
        $selectedYear = $request->integer('graduation_year') ?: null;
        $university = $request->string('university')->trim()->toString();
        $yearFilters = [
            'graduation_year' => $selectedYear,
        ];
        $departmentFilters = [
            'graduation_year' => $selectedYear,
            'university' => $university,
        ];

        $educationStats = $this->alumniService->getEducationStats($yearFilters);
        $departmentStats = $this->alumniService->getTopDepartments($departmentFilters, 10);
        $universityStats = $this->alumniService->getTopUniversities($yearFilters, 10);
        $filterOptions = $this->alumniService->getEducationFilterOptions();

        return Inertia::render('Education/Index', [
            'educationStats' => $educationStats,
            'departmentStats' => $departmentStats,
            'universityStats' => $universityStats,
            'filterOptions' => $filterOptions,
            'filters' => [
                'graduation_year' => $selectedYear,
                'university' => $university,
            ],
        ]);
    }
}
