<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Asset;
use App\Models\Customer;

class Position extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'type',
        'entry_price',
        'identifier',
        'asset_id',
        'traded_by',
        'traded_datetime',
        'trade_duration',
        'trade_close_price',
        'will_close_at',
        'closed_at',
        'outcome',
        'status',
        'pnl',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // Define relationships if needed
    public function asset()
    {
        return $this->belongsTo(Asset::class);
    }

    public function tradedBy()
    {
        return $this->belongsTo(Customer::class, 'traded_by');
    }
}
