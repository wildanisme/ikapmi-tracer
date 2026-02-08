<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = base_path('database/data/indonesia/provinces.csv');
        if (! is_file($path)) {
            return;
        }

        DB::table('master_provinces')->truncate();

        $handle = fopen($path, 'r');
        if (! $handle) {
            return;
        }

        $rows = [];
        $now = now();
        while (($data = fgetcsv($handle)) !== false) {
            if (count($data) < 2) {
                continue;
            }

            $rows[] = [
                'code' => trim((string) $data[0]),
                'name' => trim((string) $data[1]),
                'lat' => isset($data[2]) ? (float) $data[2] : null,
                'lng' => isset($data[3]) ? (float) $data[3] : null,
                'created_at' => $now,
                'updated_at' => $now,
            ];

            if (count($rows) >= 1000) {
                DB::table('master_provinces')->insert($rows);
                $rows = [];
            }
        }

        if ($rows) {
            DB::table('master_provinces')->insert($rows);
        }

        fclose($handle);
    }
}
