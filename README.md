# Tracer Study – Alumni Dashboard

Aplikasi tracer study berbasis **Laravel 12 + Inertia + Vue 3 + Tailwind** dengan SSR. Proyek ini dipakai sebagai **boilerplate** untuk menampilkan data alumni (peta, grafik, tabel, dan ringkasan) sebelum dikembangkan menjadi aplikasi produksi.

## Modul
- **Dashboard** (`/dashboard`) – ringkasan metrik, grafik, dan peta.
- **Map** (`/map`) – persebaran alumni berbasis peta + filter.
- **Buku Induk** (`/buku-induk`) – datatable alumni (filter, sorting, export).
- **Education** (`/education`) – grafik pendidikan, top jurusan, top universitas.
- **Talent Market** (`/talent`) – daftar alumni berdasarkan pekerjaan + kontak WhatsApp.

## Instalasi
### 1) Requirement
- PHP 8.2+
- Composer
- Node.js 18+
- PostgreSQL/MySQL/SQLite

### 2) Setup
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

### 3) Konfigurasi Database
Edit `.env`:
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=tracer
DB_USERNAME=...
DB_PASSWORD=...
```

### 4) Migrasi + Seed
```bash
php artisan migrate:fresh --seed
```
Seeder akan mengisi:
- `master_provinces`, `master_cities`, `master_districts`
- `alumnis` (dummy 10.000 data)

CSV wilayah ada di: `database/data/indonesia/`

### 5) Jalankan Dev Server
```bash
composer run dev
```
Atau manual:
```bash
php artisan serve
npm run dev
```

### 6) SSR (Opsional)
SSR aktif via `.env` (`INERTIA_SSR_ENABLED=true`).
Untuk menjalankan server SSR:
```bash
npm run build
php artisan inertia:start-ssr
```

## Arsitektur
- **Route → Controller → Service → Repository**
- Query database hanya di Repository.
- Konvensi: `NameInterface`, `NameRepository`, `NameRepositoryCached`.

Dokumentasi arsitektur:
- `docs/architecture/overview.md`
- `docs/architecture/service-repository.md`

## Catatan Penting
- Export PDF dibatasi **maks 2000 baris**.
- Dropdown data banyak memakai **SearchableSelect**.
- Filter aktif ditampilkan sebagai chip dan bisa dihapus per-item.

## Saran Pengembangan
- Import data alumni (CSV/Excel) + validasi.
- Relasi one-to-many untuk pendidikan & riwayat pekerjaan.
- Modul **Job Market** + **Talent Matching**.
- Dashboard per-angkatan/per-prodi untuk kebutuhan laporan.
