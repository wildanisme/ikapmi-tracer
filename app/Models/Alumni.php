<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    protected $table = 'alumnis';

    protected $fillable = [
        'name',
        'gender',
        'nisn',
        'nipm',
        'address',
        'phone_number',
        'province',
        'city',
        'district',
        'domisili',
        'graduation_year',
        'job',
        'company',
        'education_last',
        'department',
        'university',
        'province_code',
        'city_code',
        'district_code',
        'lat',
        'lng',
    ];
}
