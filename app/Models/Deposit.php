<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomerCurrency;
use App\Models\Customer;
use App\Models\Account;

class Deposit extends Model
{
    use HasFactory;

    protected $fillable = [
        'request_amount',
        'customer_currency_id',
        'transaction_code',
        'deposited_by',
        'account_id',
        'type',
        'is_approved',
        'status',
        'approved_amount',
        'reject_reason',
        'requested_at',
        'approved_at',
        'rejected_at',
    ];

    // Optionally define relationships if needed
    public function customerCurrency()
    {
        return $this->belongsTo(CustomerCurrency::class, 'customer_currency_id');
    }

    public function depositedBy()
    {
        return $this->belongsTo(Customer::class, 'deposited_by');
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
