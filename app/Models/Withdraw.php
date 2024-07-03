<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\Currency;

class Withdraw extends Model
{
    use HasFactory;

    protected $fillable = [
        'request_amount',
        'currency_id',
        'transaction_code',
        'requested_by',
        'requested_at',
        'wallet_addr',
        'bank_info',
        'is_approved',
        'status',
        'approved_at',
        'rejected_at',
        'reject_reason',
    ];

    public function currency()
    {
        return $this->belongsTo(\App\Models\Currency::class);
    }


    public function requestedBy()
    {
        return $this->belongsTo(Customer::class, 'requested_by');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($deposit) {
            $deposit->transaction_code = self::generateUniqueCode();
        });
    }

    private static function generateUniqueCode()
    {
        do {
            $code = 'DEP' . strtoupper(substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, 4));
        } while (self::where('transaction_code', $code)->exists());

        return $code;
    }
}
