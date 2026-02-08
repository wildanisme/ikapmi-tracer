# Service & Repository Pattern

Dokumentasi ini menjelaskan pola Service + Repository yang dipakai untuk modul data di project ini.

## Tujuan
- Memisahkan logika bisnis dari akses data (query database).
- Membuat controller lebih bersih dan fokus pada orkestrasi request/response.
- Memudahkan pengujian (mock repository tanpa DB).
- Fleksibel jika nanti sumber data berubah (API eksternal, cache, dsb).

## Konvensi Naming
- Interface: `NameInterface`
- Repository: `NameRepository`
- Service: `NameService`

## Struktur Folder
```
app/
  Repositories/
    AlumniInterface.php
    AlumniRepository.php
  Services/
    AlumniService.php
  Http/Controllers/
    DashboardController.php
```

## Alur Data
1. **Route** hanya mengarahkan ke controller (tanpa query).
2. **Controller** memanggil service.
3. **Service** memanggil repository.
4. **Repository** berisi query database.

## OCP (Contoh Cache Decorator)
Repository cache adalah contoh Open/Closed: kita menambah perilaku tanpa
mengubah service/controller.

`app/Repositories/AlumniRepositoryCached.php`
```
class AlumniRepositoryCached implements AlumniInterface
{
    public function countAll(): int
    {
        return Cache::remember('alumni.count_all', 300, fn () => $this->inner->countAll());
    }
}
```

## Contoh Implementasi (Alumni)

### Interface
`app/Repositories/AlumniInterface.php`
```
interface AlumniInterface
{
    public function countAll(): int;
    public function countByGender(string $gender): int;
}
```

### Repository
`app/Repositories/AlumniRepository.php`
```
class AlumniRepository implements AlumniInterface
{
    public function countAll(): int
    {
        return Alumni::count();
    }

    public function countByGender(string $gender): int
    {
        return Alumni::where('gender', $gender)->count();
    }
}
```

### Service
`app/Services/AlumniService.php`
```
class AlumniService
{
    public function getGenderMetrics(): array
    {
        return [
            'total' => $this->alumniRepository->countAll(),
            'male' => $this->alumniRepository->countByGender('L'),
            'female' => $this->alumniRepository->countByGender('P'),
        ];
    }
}
```

### Controller
`app/Http/Controllers/DashboardController.php`
```
public function index()
{
    return Inertia::render('Dashboard/Ecommerce', [
        'alumniMetrics' => $this->alumniService->getGenderMetrics(),
    ]);
}
```

### Binding DI
`app/Providers/AppServiceProvider.php`
```
$this->app->bind(AlumniInterface::class, AlumniRepository::class);
```

## Menambah Module Baru
Langkah ringkas:
1. Buat interface di `app/Repositories` (mis. `StudentInterface`).
2. Buat repository di `app/Repositories` (mis. `StudentRepository`) dan letakkan query DB di sini.
3. Buat service di `app/Services` (mis. `StudentService`) untuk logika bisnis.
4. Bind interface ke repository di `AppServiceProvider`.
5. Controller hanya panggil service, lalu kirim data ke Inertia.

## Catatan Penting
- Query database **jangan** ditaruh di `routes/web.php`.
- Query database **jangan** ditaruh di controller (kecuali sangat sederhana dan sudah disepakati).
- Jika butuh cache atau sumber data lain, implementasikan repository baru tanpa ubah service/controller.
