<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Currency;
use App\Models\CountryCode;
use App\Models\Asset;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = [
            ['name' => 'Indian Rupee', 'symbol' => 'INR', 'rate_per_usdt' => 74.25],
            ['name' => 'UAE Dirham', 'symbol' => 'AED', 'rate_per_usdt' => 3.67],
            ['name' => 'Nigerian Naira', 'symbol' => 'NGN', 'rate_per_usdt' => 410.25],
            ['name' => 'US Dollar', 'symbol' => 'USD', 'rate_per_usdt' => 1.00],
            ['name' => 'US Dollar Tether', 'symbol' => 'USDT', 'rate_per_usdt' => 1.00],
        ];

        foreach ($currencies as $currency) {
            Currency::create($currency);
        }

        $countries = [
            ['country_name' => 'India', 'code' => 'IN'],
            ['country_name' => 'United Arab Emirates', 'code' => 'AE'],
            ['country_name' => 'Nigeria', 'code' => 'NG'],
            ['country_name' => 'United States', 'code' => 'US'],
            ['country_name' => 'United States Dollar Tether', 'code' => 'USDT'],
        ];

        foreach ($countries as $country) {
            CountryCode::create($country);
        }

        $cryptos = [
            ['name' => 'Bitcoin', 'pair' => 'BTC', 'type' => 'crypto', 'chart_symbol' => 'BTCUSD', 'min_trade_amount' => 250, 'max_trade_amount' => 100000],
            ['name' => 'Ethereum', 'pair' => 'ETH', 'type' => 'crypto', 'chart_symbol' => 'ETHUSD', 'min_trade_amount' => 250, 'max_trade_amount' => 1010000000],
            ['name' => 'Cardano', 'pair' => 'ADA', 'type' => 'crypto', 'chart_symbol' => 'ADAUSD', 'min_trade_amount' => 250, 'max_trade_amount' => 100000],
            ['name' => 'Binance Coin', 'pair' => 'BNB', 'type' => 'crypto', 'chart_symbol' => 'BNBUSD', 'min_trade_amount' => 250, 'max_trade_amount' => 10000],
            ['name' => 'XRP', 'pair' => 'XRP', 'type' => 'crypto', 'chart_symbol' => 'XRPUSD', 'min_trade_amount' => 250, 'max_trade_amount' => 100000],
            // Add more cryptocurrencies as needed
        ];

        foreach ($cryptos as $crypto) {
            Asset::create($crypto);
        }
    }
}
