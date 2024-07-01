<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;
use App\Models\CustomerCurrency;

class Currency extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'symbol',
        'rate_per_usdt',
    ];

    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    public function customerCurrencies()
    {
        return $this->hasMany(CustomerCurrency::class);
    }
}