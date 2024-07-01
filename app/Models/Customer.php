<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CountryCode;
use App\Models\Kyc;
use App\Models\CustomerCurrency;
use App\Models\Deposit;
use App\Models\Withdraw;
use App\Models\Position;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'txt_password',
        'country_code_id',
        'contact_no',
        'customer_code',
        'is_email_verified',
        'is_active',
        'kyc_id',
        'is_kyc_verified',
        'kyc_verified_at',
        'balance_usdt',
        'total_deposit',
        'pending_deposit',
        'total_withdraw',
        'credit_score',
    ];

    protected $casts = [
        'is_email_verified' => 'boolean',
        'is_active' => 'boolean',
        'is_kyc_verified' => 'boolean',
        'kyc_verified_at' => 'datetime',
        'balance_usdt' => 'float',
        'total_deposit' => 'float',
        'pending_deposit' => 'float',
        'total_withdraw' => 'float',
        'credit_score' => 'float',
    ];

    public function countryCode()
    {
        return $this->belongsTo(CountryCode::class, 'country_code_id');
    }

    public function kyc()
    {
        return $this->belongsTo(Kyc::class, 'kyc_id');
    }

    public function customerCurrencies()
    {
        return $this->hasMany(CustomerCurrency::class);
    }

    public function deposits()
    {
        return $this->hasMany(Deposit::class, 'deposited_by');
    }

    public function withdraws()
    {
        return $this->hasMany(Withdraw::class, 'requested_by');
    }

    public function positions()
    {
        return $this->hasMany(Position::class, 'traded_by');
    }
}
