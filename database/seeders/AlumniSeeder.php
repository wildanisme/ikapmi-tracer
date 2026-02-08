<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlumniSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');

        $provinces = $this->loadProvinces();
        $cities = $this->loadCities();
        $districts = $this->loadDistricts();

        $provinceMap = [];
        foreach ($provinces as $row) {
            $provinceMap[$row['code']] = $row;
        }

        $cityMap = [];
        foreach ($cities as $row) {
            $cityMap[$row['code']] = $row;
        }

        $jobs = [
            'Software Engineer',
            'Backend Engineer',
            'Frontend Engineer',
            'Full Stack Engineer',
            'Mobile Developer',
            'Data Analyst',
            'Data Scientist',
            'Machine Learning Engineer',
            'DevOps Engineer',
            'Site Reliability Engineer',
            'QA Engineer',
            'Product Manager',
            'Project Manager',
            'Scrum Master',
            'UI Designer',
            'UX Designer',
            'UI/UX Designer',
            'Graphic Designer',
            'Digital Marketer',
            'Marketing Specialist',
            'Brand Manager',
            'Sales Executive',
            'Account Executive',
            'Business Development',
            'Customer Success',
            'Customer Support',
            'Technical Support',
            'HR Specialist',
            'HR Manager',
            'Recruiter',
            'Finance Analyst',
            'Accountant',
            'Auditor',
            'Tax Consultant',
            'Legal Officer',
            'Procurement Officer',
            'Supply Chain Analyst',
            'Operations Manager',
            'Operations Officer',
            'Logistics Coordinator',
            'Warehouse Supervisor',
            'Production Supervisor',
            'Manufacturing Engineer',
            'Quality Control',
            'Quality Assurance',
            'Research Analyst',
            'Research Assistant',
            'Lecturer',
            'Teacher',
            'Trainer',
            'Content Writer',
            'Copywriter',
            'Social Media Specialist',
            'Community Manager',
            'Public Relations',
            'Event Organizer',
            'Creative Director',
            'Art Director',
            'Video Editor',
            'Photographer',
            'Data Engineer',
            'Database Administrator',
            'Network Engineer',
            'System Administrator',
            'Security Analyst',
            'IT Support',
            'Solution Architect',
            'Business Analyst',
            'CRM Specialist',
            'SEO Specialist',
            'SEM Specialist',
            'Growth Hacker',
            'Product Designer',
            'Industrial Engineer',
            'Civil Engineer',
            'Mechanical Engineer',
            'Electrical Engineer',
            'Chemical Engineer',
            'Environmental Engineer',
            'Architect',
            'Interior Designer',
            'Urban Planner',
            'Pharmacist',
            'Nurse',
            'Doctor',
            'Lab Technician',
            'Statistician',
            'Economist',
            'Policy Analyst',
            'Government Officer',
            'Entrepreneur',
            'Store Manager',
            'Retail Associate',
            'Cashier',
            'Hospitality Manager',
            'Chef',
            'Barista',
            'Travel Consultant',
            'Field Technician',
            'Sales Manager',
        ];

        $companies = [
            'PT Telkom Indonesia',
            'PT Bank Mandiri',
            'PT Bank BRI',
            'PT Bank BCA',
            'PT Bank BNI',
            'PT Pertamina',
            'PT PLN',
            'PT Astra International',
            'PT Astra Honda Motor',
            'PT Toyota Astra Motor',
            'PT Unilever Indonesia',
            'PT Indofood',
            'PT Mayora Indah',
            'PT Garuda Indonesia',
            'PT Pelindo',
            'PT Angkasa Pura',
            'PT Jasa Marga',
            'PT Waskita Karya',
            'PT Wijaya Karya',
            'PT Adhi Karya',
            'PT Pupuk Indonesia',
            'PT Krakatau Steel',
            'PT Bukit Asam',
            'PT Timah',
            'PT Semen Indonesia',
            'PT XL Axiata',
            'PT Indosat Ooredoo',
            'PT Smartfren',
            'PT Tokopedia',
            'PT Bukalapak',
            'PT Gojek Indonesia',
            'PT Traveloka',
            'PT Shopee Indonesia',
            'PT Grab Indonesia',
            'PT Dana Indonesia',
            'PT OVO Indonesia',
            'PT GoTo Gojek Tokopedia',
            'PT Blibli',
            'PT Sinar Mas',
            'PT Djarum',
            'PT Gudang Garam',
            'PT HM Sampoerna',
            'PT Sasa Inti',
            'PT Wings Surya',
            'PT Kalbe Farma',
            'PT Kimia Farma',
            'PT Bio Farma',
            'PT Phapros',
            'PT Indofarma',
            'PT Ciputra Development',
            'PT Summarecon Agung',
            'PT Lippo Karawaci',
            'PT Agung Podomoro Land',
            'PT Alam Sutera Realty',
            'PT Blue Bird',
            'PT TransJakarta',
            'PT Kereta Api Indonesia',
            'PT Damri',
            'PT Lion Air',
            'PT AirAsia Indonesia',
            'PT Sriwijaya Air',
            'PT JNE',
            'PT J&T Express',
            'PT Pos Indonesia',
            'PT Tiki',
            'PT DHL Express Indonesia',
            'PT FedEx Indonesia',
            'PT SiCepat Ekspres',
            'PT Ninja Xpress',
            'PT JNA Express',
            'PT Pegadaian',
            'PT Asuransi Astra',
            'PT Prudential Indonesia',
            'PT Allianz Indonesia',
            'PT AXA Mandiri',
            'PT OCBC NISP',
            'PT CIMB Niaga',
            'PT Danamon',
            'PT PermataBank',
            'PT BTPN',
            'PT BTPN Syariah',
            'PT BTN',
            'PT Bank Muamalat',
            'PT Bank Syariah Indonesia',
            'PT Bank Jago',
            'PT Kredivo',
            'PT Akulaku',
            'PT Modalku',
            'PT Investree',
            'PT Ruangguru',
            'PT Zenius Education',
            'PT HarukaEdu',
            'PT Bhinneka',
            'PT Eraspace',
            'PT Global Digital Niaga',
            'PT Gramedia Asri Media',
            'PT MNC Group',
            'PT Transmedia',
            'PT Kompas Gramedia',
            'PT Tempo Inti Media',
        ];

        $educations = [
            'SMA/SMK',
            'D1',
            'D2',
            'D3',
            'D4',
            'S1',
            'S2',
            'S3',
        ];

        $departments = [
            'Teknik Informatika',
            'Sistem Informasi',
            'Teknik Komputer',
            'Teknik Elektro',
            'Teknik Mesin',
            'Teknik Sipil',
            'Teknik Industri',
            'Teknik Kimia',
            'Arsitektur',
            'Desain Komunikasi Visual',
            'Manajemen',
            'Akuntansi',
            'Ekonomi Pembangunan',
            'Administrasi Bisnis',
            'Ilmu Komunikasi',
            'Psikologi',
            'Hukum',
            'Pendidikan Matematika',
            'Pendidikan Bahasa Inggris',
            'Pendidikan Bahasa Indonesia',
            'Pendidikan Biologi',
            'Pendidikan Fisika',
            'Pendidikan Kimia',
            'Kesehatan Masyarakat',
            'Keperawatan',
            'Kebidanan',
            'Farmasi',
            'Ilmu Gizi',
            'Pariwisata',
            'Perhotelan',
            'Statistika',
            'Ilmu Pemerintahan',
            'Hubungan Internasional',
            'Sosiologi',
            'Antropologi',
        ];

        $universities = [
            'Universitas Indonesia',
            'Institut Teknologi Bandung',
            'Universitas Gadjah Mada',
            'Institut Teknologi Sepuluh Nopember',
            'Universitas Airlangga',
            'Universitas Brawijaya',
            'Universitas Diponegoro',
            'Universitas Padjadjaran',
            'Universitas Hasanuddin',
            'Universitas Sebelas Maret',
            'Universitas Andalas',
            'Universitas Sriwijaya',
            'Universitas Negeri Malang',
            'Universitas Negeri Yogyakarta',
            'Universitas Negeri Surabaya',
            'Universitas Pendidikan Indonesia',
            'Universitas Jenderal Soedirman',
            'Universitas Jember',
            'Universitas Lampung',
            'Universitas Riau',
            'Universitas Sumatera Utara',
            'Universitas Muhammadiyah Yogyakarta',
            'Universitas Muhammadiyah Malang',
            'Universitas Bina Nusantara',
            'Universitas Telkom',
            'Universitas Atma Jaya Yogyakarta',
            'Universitas Kristen Petra',
            'Universitas Trisakti',
            'Universitas Gunadarma',
            'Universitas Islam Indonesia',
        ];

        DB::statement('TRUNCATE TABLE alumnis RESTART IDENTITY CASCADE');

        $batch = [];
        $batchSize = 500;
        $total = 10000;

        if (! count($districts) || ! count($cityMap) || ! count($provinceMap)) {
            return;
        }

        for ($i = 0; $i < $total; $i += 1) {
            $district = $districts[array_rand($districts)];
            $districtCode = $district['code'];
            $cityCode = $district['city_code'];
            $districtName = $district['name'];

            $city = $cityMap[$cityCode] ?? null;
            if (! $city) {
                continue;
            }

            $provinceCode = $city['province_code'];
            $province = $provinceMap[$provinceCode] ?? null;
            if (! $province) {
                continue;
            }

            $provinceName = $province['name'];
            $cityName = $city['name'];
            $lat = $district['lat'] ?? $city['lat'] ?? $province['lat'] ?? null;
            $lng = $district['lng'] ?? $city['lng'] ?? $province['lng'] ?? null;

            $batch[] = [
                'name' => $faker->name(),
                'nisn' => (string) $faker->numberBetween(1000000000, 9999999999),
                'nipm' => (string) $faker->numberBetween(1000000000, 9999999999),
                'gender' => $faker->randomElement(['L', 'P']),
                'address' => $faker->address(),
                'phone_number' => '62' . $faker->numerify('8##########'),
                'province' => $provinceName,
                'city' => $cityName,
                'district' => $districtName,
                'domisili' => $cityName,
                'graduation_year' => $faker->numberBetween(2000, 2024),
                'job' => $faker->randomElement($jobs),
                'company' => $faker->randomElement($companies),
                'education_last' => $faker->randomElement($educations),
                'department' => $faker->randomElement($departments),
                'university' => $faker->randomElement($universities),
                'province_code' => $provinceCode,
                'city_code' => $cityCode,
                'district_code' => $districtCode,
                'lat' => $lat,
                'lng' => $lng,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            if (count($batch) >= $batchSize) {
                DB::table('alumnis')->insert($batch);
                $batch = [];
            }
        }

        if (count($batch)) {
            DB::table('alumnis')->insert($batch);
        }
    }

    private function readCsv(string $path, int $minColumns): array
    {
        if (! is_file($path)) {
            return [];
        }

        $rows = [];
        $handle = fopen($path, 'r');
        if (! $handle) {
            return [];
        }

        while (($data = fgetcsv($handle)) !== false) {
            if (count($data) < $minColumns) {
                continue;
            }
            $rows[] = $data;
        }

        fclose($handle);

        return $rows;
    }

    private function loadProvinces(): array
    {
        $rows = DB::table('master_provinces')
            ->select(['code', 'name', 'lat', 'lng'])
            ->get();

        if ($rows->isNotEmpty()) {
            return $rows->map(fn ($row) => [
                'code' => (string) $row->code,
                'name' => (string) $row->name,
                'lat' => $row->lat !== null ? (float) $row->lat : null,
                'lng' => $row->lng !== null ? (float) $row->lng : null,
            ])->all();
        }

        $rows = $this->readCsv(database_path('data/indonesia/provinces.csv'), 2);
        return array_map(function ($row) {
            return [
                'code' => trim((string) $row[0]),
                'name' => trim((string) $row[1]),
                'lat' => isset($row[2]) ? (float) $row[2] : null,
                'lng' => isset($row[3]) ? (float) $row[3] : null,
            ];
        }, $rows);
    }

    private function loadCities(): array
    {
        $rows = DB::table('master_cities')
            ->select(['code', 'province_code', 'name', 'lat', 'lng'])
            ->get();

        if ($rows->isNotEmpty()) {
            return $rows->map(fn ($row) => [
                'code' => (string) $row->code,
                'province_code' => (string) $row->province_code,
                'name' => (string) $row->name,
                'lat' => $row->lat !== null ? (float) $row->lat : null,
                'lng' => $row->lng !== null ? (float) $row->lng : null,
            ])->all();
        }

        $rows = $this->readCsv(database_path('data/indonesia/cities.csv'), 3);
        return array_map(function ($row) {
            return [
                'code' => trim((string) $row[0]),
                'province_code' => trim((string) $row[1]),
                'name' => trim((string) $row[2]),
                'lat' => isset($row[3]) ? (float) $row[3] : null,
                'lng' => isset($row[4]) ? (float) $row[4] : null,
            ];
        }, $rows);
    }

    private function loadDistricts(): array
    {
        $rows = DB::table('master_districts')
            ->select(['code', 'city_code', 'name', 'lat', 'lng'])
            ->get();

        if ($rows->isNotEmpty()) {
            return $rows->map(fn ($row) => [
                'code' => (string) $row->code,
                'city_code' => (string) $row->city_code,
                'name' => (string) $row->name,
                'lat' => $row->lat !== null ? (float) $row->lat : null,
                'lng' => $row->lng !== null ? (float) $row->lng : null,
            ])->all();
        }

        $rows = $this->readCsv(database_path('data/indonesia/districts.csv'), 3);
        return array_map(function ($row) {
            return [
                'code' => trim((string) $row[0]),
                'city_code' => trim((string) $row[1]),
                'name' => trim((string) $row[2]),
                'lat' => isset($row[3]) ? (float) $row[3] : null,
                'lng' => isset($row[4]) ? (float) $row[4] : null,
            ];
        }, $rows);
    }
}
