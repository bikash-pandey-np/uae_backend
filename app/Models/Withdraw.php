<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomerCurrency;
use App\Models\Customer;


class Withdraw extends Model
{
    use HasFactory;

    protected $fillable = [
        'request_amount',
        'customer_currency_id',
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

    // Optionally define relationships if needed
    public function customerCurrency()
    {
        return $this->belongsTo(CustomerCurrency::class, 'customer_currency_id');
    }

    public function requestedBy()
    {
        return $this->belongsTo(Customer::class, 'requested_by');
    }
}
