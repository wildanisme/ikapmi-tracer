<?php

namespace App\Providers;

use App\Repositories\AlumniInterface;
use App\Repositories\AlumniRepository;
use App\Repositories\AlumniRepositoryCached;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AlumniInterface::class, function ($app) {
            $repository = $app->make(AlumniRepository::class);
            $useCache = (bool) config('app.alumni_cache', false);

            if (! $useCache) {
                return $repository;
            }

            $ttlSeconds = (int) config('app.alumni_cache_ttl', 300);

            return new AlumniRepositoryCached($repository, $ttlSeconds);
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
