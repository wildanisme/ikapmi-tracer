<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterCitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = base_path('database/data/indonesia/cities.csv');
        if (! is_file($path)) {
            return;
        }

        DB::table('master_cities')->truncate();

        $handle = fopen($path, 'r');
        if (! $handle) {
            return;
        }

        $rows = [];
        $now = now();
        while (($data = fgetcsv($handle)) !== false) {
            if (count($data) < 3) {
                continue;
            }

            $rows[] = [
                'code' => trim((string) $data[0]),
                'province_code' => trim((string) $data[1]),
                'name' => trim((string) $data[2]),
                'lat' => isset($data[3]) ? (float) $data[3] : null,
                'lng' => isset($data[4]) ? (float) $data[4] : null,
                'created_at' => $now,
                'updated_at' => $now,
            ];

            if (count($rows) >= 1000) {
                DB::table('master_cities')->insert($rows);
                $rows = [];
            }
        }

        if ($rows) {
            DB::table('master_cities')->insert($rows);
        }

        fclose($handle);
    }
}
