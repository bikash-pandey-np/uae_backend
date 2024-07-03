<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Currency;
use App\Models\CountryCode;
use App\Models\Asset;
use App\Models\Deposit;

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
            ['country_name' => 'India', 'code' => '+977'],
            ['country_name' => 'United Arab Emirates', 'code' => '+91'],
            ['country_name' => 'Nigeria', 'code' => '+234'],
            ['country_name' => 'United States', 'code' => '+1'],
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
        $customers = [
            [
                'full_name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'password' => bcrypt('password123'),
                'txt_password' => 'password123',
                'country_code_id' => 1,
                'contact_no' => '1234567890',
                'customer_code' => 'CUST001',
                'is_email_verified' => true,
                'is_active' => true,
                'kyc_id' => null,
                'is_kyc_verified' => false,
                'kyc_verified_at' => null,
                'balance_usdt' => 1000.00,
                'total_deposit' => 5000.00,
                'pending_deposit' => 0.00,
                'total_withdraw' => 4000.00,
                'credit_score' => 750.00,
                'currency_id' => 4,
            ],
            [
                'full_name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'password' => bcrypt('password123'),
                'txt_password' => 'password123',
                'country_code_id' => 2,
                'contact_no' => '0987654321',
                'customer_code' => 'CUST002',
                'is_email_verified' => true,
                'is_active' => true,
                'kyc_id' => null,
                'is_kyc_verified' => false,
                'kyc_verified_at' => null,
                'balance_usdt' => 2000.00,
                'total_deposit' => 6000.00,
                'pending_deposit' => 0.00,
                'total_withdraw' => 4000.00,
                'credit_score' => 800.00,
                'currency_id' => 4,
            ],
            [
                'full_name' => 'Alice Johnson',
                'email' => 'alice.johnson@example.com',
                'password' => bcrypt('password123'),
                'txt_password' => 'password123',
                'country_code_id' => 3,
                'contact_no' => '1122334455',
                'customer_code' => 'CUST003',
                'is_email_verified' => true,
                'is_active' => true,
                'kyc_id' => null,
                'is_kyc_verified' => false,
                'kyc_verified_at' => null,
                'balance_usdt' => 1500.00,
                'total_deposit' => 7000.00,
                'pending_deposit' => 0.00,
                'total_withdraw' => 5500.00,
                'credit_score' => 780.00,
                'currency_id' => 4,
            ],
            [
                'full_name' => 'Bob Brown',
                'email' => 'bob.brown@example.com',
                'password' => bcrypt('password123'),
                'txt_password' => 'password123',
                'country_code_id' => 4,
                'contact_no' => '6677889900',
                'customer_code' => 'CUST004',
                'is_email_verified' => true,
                'is_active' => true,
                'kyc_id' => null,
                'is_kyc_verified' => false,
                'kyc_verified_at' => null,
                'balance_usdt' => 3000.00,
                'total_deposit' => 8000.00,
                'pending_deposit' => 0.00,
                'total_withdraw' => 5000.00,
                'credit_score' => 790.00,
                'currency_id' => 4,
            ],
            [
                'full_name' => 'Charlie Davis',
                'email' => 'charlie.davis@example.com',
                'password' => bcrypt('password123'),
                'txt_password' => 'password123',
                'country_code_id' => 1,
                'contact_no' => '5566778899',
                'customer_code' => 'CUST005',
                'is_email_verified' => true,
                'is_active' => true,
                'kyc_id' => null,
                'is_kyc_verified' => false,
                'kyc_verified_at' => null,
                'balance_usdt' => 2500.00,
                'total_deposit' => 9000.00,
                'pending_deposit' => 0.00,
                'total_withdraw' => 6500.00,
                'credit_score' => 770.00,
                'currency_id' => 4,
            ],
        ];

        foreach ($customers as $customer) {
            \App\Models\Customer::create($customer);
        }
    }
}
