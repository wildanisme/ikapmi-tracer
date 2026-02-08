<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>PDF Terlalu Besar</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
        .card { max-width: 520px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; }
        h1 { font-size: 18px; margin: 0 0 8px; }
        p { font-size: 14px; color: #374151; margin: 0 0 12px; }
        ul { padding-left: 18px; margin: 0; color: #374151; font-size: 14px; }
        .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; background: #fee2e2; color: #991b1b; font-size: 12px; font-weight: 600; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Export PDF terlalu besar</h1>
        <p>Total data: <strong>{{ $total }}</strong> baris. Batas maksimal PDF: <strong>{{ $max }}</strong> baris.</p>
        <p class="badge">PDF hanya disarankan untuk ringkasan</p>
        <p>Solusi:</p>
        <ul>
            <li>Gunakan filter agar jumlah data lebih kecil.</li>
            <li>Gunakan Download Excel atau CSV untuk data lengkap.</li>
        </ul>
    </div>
</body>
</html>
