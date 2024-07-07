<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Currency;
use App\Models\CountryCode;
use App\Models\Account;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = [
            ['name' => 'Indian Rupee', 'symbol' => 'INR', 'rate_per_usdt' => 0.012],
            // ['name' => 'Philippine peso', 'symbol' => 'PHP', 'rate_per_usdt' => 0.017],
            ['name' => 'US Dollar Tether', 'symbol' => 'USDT', 'rate_per_usdt' => 1.00],
        ];

        foreach ($currencies as $currency) {
            Currency::create($currency);
        }

        $countries = [
            ['country_name' => 'India', 'code' => '+91'],
            // ['country_name' => 'Philippines', 'code' => '+63'],
        ];

        foreach ($countries as $country) {
            CountryCode::create($country);
        }

        $accounts = [
            [
                'title' => 'Crypto USDT',
                'currency_id' => Currency::where('symbol', 'USDT')->first()->id,
                'deposit_instruction' => 'Deposit USDT to wallet address',
                'is_active' => true,
                'wallet_addr' => 'TKvjzERYzCyYSHjRgcDLhqxZ4UW5CjcGJU',
                'bank_name' => null,
                'acc_no' => null,
                'acc_name' => null,
            ],
            [
                'title' => 'INR Deposit',
                'currency_id' => Currency::where('symbol', 'INR')->first()->id,
                'deposit_instruction' => 'Deposit INR to given bank account. IFSC code : UBIN0567744',
                'is_active' => true,
                'wallet_addr' => null,
                'bank_name' => 'Union Bank of India',
                'acc_no' => '677402010007621',
                'acc_name' => 'Rukhshana Khatoon',
            ],
        ];

        foreach ($accounts as $account) {
            Account::create($account);
        }

   
       
    }
}
