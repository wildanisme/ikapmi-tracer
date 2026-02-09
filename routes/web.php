<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AlumniController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\TalentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::redirect('/', '/dashboard');
Route::get('/map', [MapController::class, 'index'])->name('map');
Route::get('/education', [EducationController::class, 'index'])->name('education');
Route::get('/talent', [TalentController::class, 'index'])->name('talent');
Route::get('/buku-induk', [AlumniController::class, 'index'])->name('alumni.buku-induk');

Route::get('/calendar', function () {
    return Inertia::render('Calendar');
})->name('calendar');

Route::get('/profile', function () {
    return Inertia::render('Profile/Profile');
})->name('profile');

Route::get('/form-elements', function () {
    return Inertia::render('Form/FormElements');
})->name('form-elements');

Route::get('/basic-tables', function () {
    return Inertia::render('Tables/BasicTables');
})->name('basic-tables');

Route::get('/blank', function () {
    return Inertia::render('Blank');
})->name('blank');

Route::get('/error-404', function () {
    return Inertia::render('Errors/Error404');
})->name('error-404');

Route::get('/line-chart', function () {
    return Inertia::render('Chart/LineChart');
})->name('line-chart');

Route::get('/bar-chart', function () {
    return Inertia::render('Chart/BarChart');
})->name('bar-chart');

Route::get('/signin', function () {
    return Inertia::render('Auth/SignIn');
})->name('signin');

Route::get('/signup', function () {
    return Inertia::render('Auth/SignUp');
})->name('signup');

Route::get('/alerts', function () {
    return Inertia::render('UIElements/Alerts');
})->name('alerts');

Route::get('/avatars', function () {
    return Inertia::render('UIElements/Avatars');
})->name('avatars');

Route::get('/badge', function () {
    return Inertia::render('UIElements/Badges');
})->name('badges');

Route::get('/buttons', function () {
    return Inertia::render('UIElements/Buttons');
})->name('buttons');

Route::get('/image', function () {
    return Inertia::render('UIElements/Images');
})->name('images');

Route::get('/videos', function () {
    return Inertia::render('UIElements/Videos');
})->name('videos');

Route::fallback(function () {
    return Inertia::render('Errors/Error404');
});
