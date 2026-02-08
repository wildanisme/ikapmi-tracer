# Architecture Overview

Dokumen ini merangkum arsitektur aplikasi agar mudah dilanjutkan tanpa bantuan AI.

## Stack & Runtime
- **Backend:** Laravel (Controller → Service → Repository).
- **Frontend:** Vue 3 + Inertia.
- **SSR:** Inertia SSR via `resources/js/ssr.js`.
- **Build:** Vite (`resources/js/app.js` sebagai entry client).

## Alur Request (High Level)
1. **Route** (`routes/web.php`) hanya mengarahkan request ke controller.
2. **Controller** mengambil query param → susun `filters` → panggil service.
3. **Service** berisi logika bisnis ringan → panggil repository.
4. **Repository** berisi query database (Eloquent).
5. **Controller** mengembalikan **Inertia::render** ke page Vue.

## Struktur Folder Kunci
```
app/
  Http/Controllers/
  Services/
  Repositories/
  Models/
  Helpers/MenuHelper.php
database/
  migrations/
  seeders/
resources/
  js/
    Pages/
    components/
    Layouts/
    app.js
    ssr.js
```

## Konvensi Naming (Service + Repository)
- Interface: `NameInterface`
- Repository: `NameRepository` (+ `NameRepositoryCached` jika perlu cache)
- Service: `NameService`

Detail pola ada di `docs/architecture/service-repository.md`.

## Modul Utama (Saat Ini)

### 1) Dashboard (`/dashboard`)
- **Controller:** `DashboardController`
- **Page:** `resources/js/Pages/Dashboard/Ecommerce.vue`
- **Komponen utama:**
  - `components/dashboard/AlumniDemographic.vue` (peta)
  - `components/dashboard/AlumniChart.vue` (chart)
  - `components/alumni/AlumniJobs.vue`, `AlumniCompanies.vue`

### 2) Buku Induk (`/buku-induk`)
- **Controller:** `AlumniController@index`
- **Page:** `resources/js/Pages/Alumni/BukuInduk.vue`
- **Komponen:** `components/alumni/BukuIndukTable.vue`
- **Fitur:** filter + sorting + pagination + export CSV/Excel/PDF.
- **Export:** PDF dibatasi max 2000 baris (`resources/views/exports/pdf-too-large.blade.php`).

### 3) Map (`/map`)
- **Controller:** `MapController`
- **Page:** `resources/js/Pages/Map/Index.vue`
- **Komponen:** `components/dashboard/AlumniDemographic.vue` + `components/maps/TopCitiesList.vue`
- **Filter:** year, job, city, mode city/domisili.

### 4) Education (`/education`)
- **Controller:** `EducationController`
- **Page:** `resources/js/Pages/Education/Index.vue`
- **Komponen:** `components/common/BarChartCard.vue` + `components/education/TopUniversitiesList.vue`
- **Filter:** year.

### 5) Talent Market (`/talent`)
- **Controller:** `TalentController`
- **Page:** `resources/js/Pages/Talent/Index.vue`
- **Komponen:** `components/talent/TalentTable.vue`
- **Filter:** search, job, year, provinsi, kota.
- **Aksi:** “Hubungi” via WhatsApp (butuh `phone_number`).

## Data Model Utama
### Table: `alumnis`
Field kunci:
- Identitas: `name`, `nisn`, `nipm`, `gender`, `phone_number`
- Lokasi: `province`, `city`, `district`, `domisili`
- Kode wilayah: `province_code`, `city_code`, `district_code`
- Pendidikan: `education_last`, `university`, `graduation_year`
- Karier: `job`, `company`
- Geo: `lat`, `lng`

### Master Wilayah
`master_provinces`, `master_cities`, `master_districts`  
CSV data berada di `database/data/indonesia/`.

## Pola Filter & Pagination (Datatable)
1. Controller menyusun `filters` dari query param.
2. Repository menggunakan `applyBukuIndukFilters` + `applyBukuIndukSorting`.
3. Vue table memakai `SearchableSelect` (teleport + floating-ui, aman dari clipping).
4. Inertia `router.get()` dengan `preserveState` + `preserveScroll`.
5. `filterOptions` lazily loaded (`Inertia::lazy`) agar page cepat.

## SSR Flow
- Client entry: `resources/js/app.js`
- SSR entry: `resources/js/ssr.js`
- Pages di-resolve dari `resources/js/Pages/**/*.vue`

## Menu & Sidebar
Sidebar diambil dari `app/Helpers/MenuHelper.php`.  
Tambahkan menu baru di `getMainNavItems()` jika menambah modul.

## Menambah Modul Baru (Checklist)
1. **Route** baru di `routes/web.php`.
2. **Controller** baru di `app/Http/Controllers`.
3. **Service** method di `app/Services`.
4. **Repository** method di `app/Repositories`.
5. **Page** di `resources/js/Pages/Module/Index.vue`.
6. **Komponen** di `resources/js/components/module/...`.
7. **Menu** di `MenuHelper.php`.
8. (Opsional) **Seed** untuk dummy data.

## Catatan Penting
- Query DB **tidak** ditaruh di route/controller.
- Dropdown besar harus **searchable** (`SearchableSelect`).
- Export PDF dibatasi agar tidak overload.
- Banyak filter → gunakan pola “inline minimal + panel tambahan” (seperti Buku Induk).
