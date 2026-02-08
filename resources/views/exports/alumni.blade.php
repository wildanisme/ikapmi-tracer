<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Buku Induk Alumni</title>
    <style>
        body { font-family: DejaVu Sans, Arial, sans-serif; font-size: 10px; color: #111827; }
        h1 { font-size: 14px; margin: 0 0 12px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #e5e7eb; padding: 6px 8px; text-align: left; }
        th { background: #f3f4f6; font-weight: 600; }
        .meta { margin-bottom: 10px; font-size: 10px; color: #6b7280; }
    </style>
</head>
<body>
    <h1>Buku Induk Alumni</h1>
    <div class="meta">Total data: {{ count($rows) }}</div>
    <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>NISN</th>
                <th>NIPM</th>
                <th>Gender</th>
                <th>Tahun Lulus</th>
                <th>Provinsi</th>
                <th>Kota/Kab</th>
                <th>Kecamatan</th>
                <th>Pekerjaan</th>
                <th>Perusahaan</th>
                <th>Universitas</th>
                <th>Domisili</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($rows as $row)
                <tr>
                    <td>{{ $row->name }}</td>
                    <td>{{ $row->nisn }}</td>
                    <td>{{ $row->nipm }}</td>
                    <td>{{ $row->gender }}</td>
                    <td>{{ $row->graduation_year }}</td>
                    <td>{{ $row->province }}</td>
                    <td>{{ $row->city }}</td>
                    <td>{{ $row->district }}</td>
                    <td>{{ $row->job }}</td>
                    <td>{{ $row->company }}</td>
                    <td>{{ $row->university }}</td>
                    <td>{{ $row->domisili }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
