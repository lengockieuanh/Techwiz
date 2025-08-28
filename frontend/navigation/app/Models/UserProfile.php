<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class UserProfile extends Authenticatable
{
    use HasFactory,HasApiTokens, Notifiable;

    protected $table = 'user_profiles';
    protected $fillable = [
        'last_name',
        'first_name',
        'middle_name',
        'dob',
        'email',
        'phone_number',
        'country',
        'gender',
        'password',
        'new_password',
        'confirm_new_password',
        'image',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];
}
