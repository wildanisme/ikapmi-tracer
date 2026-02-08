<?php

namespace App\Http\Controllers;

use App\Services\AlumniService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentController extends Controller
{
    private AlumniService $alumniService;

    /**
     * Inject services needed by talent module.
     */
    public function __construct(AlumniService $alumniService)
    {
        $this->alumniService = $alumniService;
    }

    /**
     * Talent Market: list alumni talent with job info.
     */
    public function index(Request $request)
    {
        $filters = [
            'search' => $request->string('search')->trim()->toString(),
            'graduation_year' => $request->string('graduation_year')->trim()->toString(),
            'job' => $request->string('job')->trim()->toString(),
            'province' => $request->string('province')->trim()->toString(),
            'city' => $request->string('city')->trim()->toString(),
            'sort' => $request->string('sort')->trim()->toString(),
            'direction' => $request->string('direction')->trim()->toString(),
        ];

        $perPage = (int) $request->integer('per_page', 10);
        $filters['per_page'] = $perPage;

        return Inertia::render('Talent/Index', [
            'talents' => $this->alumniService->getTalentPaginated($filters, $perPage),
            'filters' => $filters,
            'filterOptions' => $this->alumniService->getTalentFilterOptions(),
        ]);
    }
}
