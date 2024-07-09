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
            ['country_name' => 'Afghanistan', 'code' => '+93'],
            ['country_name' => 'Albania', 'code' => '+355'],
            ['country_name' => 'Algeria', 'code' => '+213'],
            ['country_name' => 'Andorra', 'code' => '+376'],
            ['country_name' => 'Angola', 'code' => '+244'],
            ['country_name' => 'Argentina', 'code' => '+54'],
            ['country_name' => 'Armenia', 'code' => '+374'],
            ['country_name' => 'Australia', 'code' => '+61'],
            ['country_name' => 'Austria', 'code' => '+43'],
            ['country_name' => 'Azerbaijan', 'code' => '+994'],
            ['country_name' => 'Bahamas', 'code' => '+1-242'],
            ['country_name' => 'Bahrain', 'code' => '+973'],
            ['country_name' => 'Bangladesh', 'code' => '+880'],
            ['country_name' => 'Barbados', 'code' => '+1-246'],
            ['country_name' => 'Belarus', 'code' => '+375'],
            ['country_name' => 'Belgium', 'code' => '+32'],
            ['country_name' => 'Belize', 'code' => '+501'],
            ['country_name' => 'Benin', 'code' => '+229'],
            ['country_name' => 'Bhutan', 'code' => '+975'],
            ['country_name' => 'Bolivia', 'code' => '+591'],
            ['country_name' => 'Bosnia and Herzegovina', 'code' => '+387'],
            ['country_name' => 'Botswana', 'code' => '+267'],
            ['country_name' => 'Brazil', 'code' => '+55'],
            ['country_name' => 'Brunei', 'code' => '+673'],
            ['country_name' => 'Bulgaria', 'code' => '+359'],
            ['country_name' => 'Burkina Faso', 'code' => '+226'],
            ['country_name' => 'Burundi', 'code' => '+257'],
            ['country_name' => 'Cabo Verde', 'code' => '+238'],
            ['country_name' => 'Cambodia', 'code' => '+855'],
            ['country_name' => 'Cameroon', 'code' => '+237'],
            ['country_name' => 'Canada', 'code' => '+1'],
            ['country_name' => 'Central African Republic', 'code' => '+236'],
            ['country_name' => 'Chad', 'code' => '+235'],
            ['country_name' => 'Chile', 'code' => '+56'],
            ['country_name' => 'China', 'code' => '+86'],
            ['country_name' => 'Colombia', 'code' => '+57'],
            ['country_name' => 'Comoros', 'code' => '+269'],
            ['country_name' => 'Congo', 'code' => '+242'],
            ['country_name' => 'Costa Rica', 'code' => '+506'],
            ['country_name' => 'Croatia', 'code' => '+385'],
            ['country_name' => 'Cuba', 'code' => '+53'],
            ['country_name' => 'Cyprus', 'code' => '+357'],
            ['country_name' => 'Czech Republic', 'code' => '+420'],
            ['country_name' => 'Denmark', 'code' => '+45'],
            ['country_name' => 'Djibouti', 'code' => '+253'],
            ['country_name' => 'Dominica', 'code' => '+1-767'],
            ['country_name' => 'Dominican Republic', 'code' => '+1-809'],
            ['country_name' => 'Ecuador', 'code' => '+593'],
            ['country_name' => 'Egypt', 'code' => '+20'],
            ['country_name' => 'El Salvador', 'code' => '+503'],
            ['country_name' => 'Equatorial Guinea', 'code' => '+240'],
            ['country_name' => 'Eritrea', 'code' => '+291'],
            ['country_name' => 'Estonia', 'code' => '+372'],
            ['country_name' => 'Eswatini', 'code' => '+268'],
            ['country_name' => 'Ethiopia', 'code' => '+251'],
            ['country_name' => 'Fiji', 'code' => '+679'],
            ['country_name' => 'Finland', 'code' => '+358'],
            ['country_name' => 'France', 'code' => '+33'],
            ['country_name' => 'Gabon', 'code' => '+241'],
            ['country_name' => 'Gambia', 'code' => '+220'],
            ['country_name' => 'Georgia', 'code' => '+995'],
            ['country_name' => 'Germany', 'code' => '+49'],
            ['country_name' => 'Ghana', 'code' => '+233'],
            ['country_name' => 'Greece', 'code' => '+30'],
            ['country_name' => 'Grenada', 'code' => '+1-473'],
            ['country_name' => 'Guatemala', 'code' => '+502'],
            ['country_name' => 'Guinea', 'code' => '+224'],
            ['country_name' => 'Guinea-Bissau', 'code' => '+245'],
            ['country_name' => 'Guyana', 'code' => '+592'],
            ['country_name' => 'Haiti', 'code' => '+509'],
            ['country_name' => 'Honduras', 'code' => '+504'],
            ['country_name' => 'Hungary', 'code' => '+36'],
            ['country_name' => 'Iceland', 'code' => '+354'],
            ['country_name' => 'India', 'code' => '+91'],
            ['country_name' => 'Indonesia', 'code' => '+62'],
            ['country_name' => 'Iran', 'code' => '+98'],
            ['country_name' => 'Iraq', 'code' => '+964'],
            ['country_name' => 'Ireland', 'code' => '+353'],
            ['country_name' => 'Israel', 'code' => '+972'],
            ['country_name' => 'Italy', 'code' => '+39'],
            ['country_name' => 'Jamaica', 'code' => '+1-876'],
            ['country_name' => 'Japan', 'code' => '+81'],
            ['country_name' => 'Jordan', 'code' => '+962'],
            ['country_name' => 'Kazakhstan', 'code' => '+7'],
            ['country_name' => 'Kenya', 'code' => '+254'],
            ['country_name' => 'Kiribati', 'code' => '+686'],
            ['country_name' => 'Kuwait', 'code' => '+965'],
            ['country_name' => 'Kyrgyzstan', 'code' => '+996'],
            ['country_name' => 'Laos', 'code' => '+856'],
            ['country_name' => 'Latvia', 'code' => '+371'],
            ['country_name' => 'Lebanon', 'code' => '+961'],
            ['country_name' => 'Lesotho', 'code' => '+266'],
            ['country_name' => 'Liberia', 'code' => '+231'],
            ['country_name' => 'Libya', 'code' => '+218'],
            ['country_name' => 'Liechtenstein', 'code' => '+423'],
            ['country_name' => 'Lithuania', 'code' => '+370'],
            ['country_name' => 'Luxembourg', 'code' => '+352'],
            ['country_name' => 'Madagascar', 'code' => '+261'],
            ['country_name' => 'Malawi', 'code' => '+265'],
            ['country_name' => 'Malaysia', 'code' => '+60'],
            ['country_name' => 'Maldives', 'code' => '+960'],
            ['country_name' => 'Mali', 'code' => '+223'],
            ['country_name' => 'Malta', 'code' => '+356'],
            ['country_name' => 'Marshall Islands', 'code' => '+692'],
            ['country_name' => 'Mauritania', 'code' => '+222'],
            ['country_name' => 'Mauritius', 'code' => '+230'],
            ['country_name' => 'Mexico', 'code' => '+52'],
            ['country_name' => 'Micronesia', 'code' => '+691'],
            ['country_name' => 'Moldova', 'code' => '+373'],
            ['country_name' => 'Monaco', 'code' => '+377'],
            ['country_name' => 'Mongolia', 'code' => '+976'],
            ['country_name' => 'Montenegro', 'code' => '+382'],
            ['country_name' => 'Morocco', 'code' => '+212'],
            ['country_name' => 'Mozambique', 'code' => '+258'],
            ['country_name' => 'Myanmar', 'code' => '+95'],
            ['country_name' => 'Namibia', 'code' => '+264'],
            ['country_name' => 'Nauru', 'code' => '+674'],
            ['country_name' => 'Nepal', 'code' => '+977'],
            ['country_name' => 'Netherlands', 'code' => '+31'],
            ['country_name' => 'New Zealand', 'code' => '+64'],
            ['country_name' => 'Nicaragua', 'code' => '+505'],
            ['country_name' => 'Niger', 'code' => '+227'],
            ['country_name' => 'Nigeria', 'code' => '+234'],
            ['country_name' => 'North Korea', 'code' => '+850'],
            ['country_name' => 'North Macedonia', 'code' => '+389'],
            ['country_name' => 'Norway', 'code' => '+47'],
            ['country_name' => 'Oman', 'code' => '+968'],
            ['country_name' => 'Pakistan', 'code' => '+92'],
            ['country_name' => 'Palau', 'code' => '+680'],
            ['country_name' => 'Palestine', 'code' => '+970'],
            ['country_name' => 'Panama', 'code' => '+507'],
            ['country_name' => 'Papua New Guinea', 'code' => '+675'],
            ['country_name' => 'Paraguay', 'code' => '+595'],
            ['country_name' => 'Peru', 'code' => '+51'],
            ['country_name' => 'Philippines', 'code' => '+63'],
            ['country_name' => 'Poland', 'code' => '+48'],
            ['country_name' => 'Portugal', 'code' => '+351'],
            ['country_name' => 'Qatar', 'code' => '+974'],
            ['country_name' => 'Romania', 'code' => '+40'],
            ['country_name' => 'Russia', 'code' => '+7'],
            ['country_name' => 'Rwanda', 'code' => '+250'],
            ['country_name' => 'Saint Kitts and Nevis', 'code' => '+1-869'],
            ['country_name' => 'Saint Lucia', 'code' => '+1-758'],
            ['country_name' => 'Saint Vincent and the Grenadines', 'code' => '+1-784'],
            ['country_name' => 'Samoa', 'code' => '+685'],
            ['country_name' => 'San Marino', 'code' => '+378'],
            ['country_name' => 'Sao Tome and Principe', 'code' => '+239'],
            ['country_name' => 'Saudi Arabia', 'code' => '+966'],
            ['country_name' => 'Senegal', 'code' => '+221'],
            ['country_name' => 'Serbia', 'code' => '+381'],
            ['country_name' => 'Seychelles', 'code' => '+248'],
            ['country_name' => 'Sierra Leone', 'code' => '+232'],
            ['country_name' => 'Singapore', 'code' => '+65'],
            ['country_name' => 'Slovakia', 'code' => '+421'],
            ['country_name' => 'Slovenia', 'code' => '+386'],
            ['country_name' => 'Solomon Islands', 'code' => '+677'],
            ['country_name' => 'Somalia', 'code' => '+252'],
            ['country_name' => 'South Africa', 'code' => '+27'],
            ['country_name' => 'South Korea', 'code' => '+82'],
            ['country_name' => 'South Sudan', 'code' => '+211'],
            ['country_name' => 'Spain', 'code' => '+34'],
            ['country_name' => 'Sri Lanka', 'code' => '+94'],
            ['country_name' => 'Sudan', 'code' => '+249'],
            ['country_name' => 'Suriname', 'code' => '+597'],
            ['country_name' => 'Sweden', 'code' => '+46'],
            ['country_name' => 'Switzerland', 'code' => '+41'],
            ['country_name' => 'Syria', 'code' => '+963'],
            ['country_name' => 'Taiwan', 'code' => '+886'],
            ['country_name' => 'Tajikistan', 'code' => '+992'],
            ['country_name' => 'Tanzania', 'code' => '+255'],
            ['country_name' => 'Thailand', 'code' => '+66'],
            ['country_name' => 'Timor-Leste', 'code' => '+670'],
            ['country_name' => 'Togo', 'code' => '+228'],
            ['country_name' => 'Tonga', 'code' => '+676'],
            ['country_name' => 'Trinidad and Tobago', 'code' => '+1-868'],
            ['country_name' => 'Tunisia', 'code' => '+216'],
            ['country_name' => 'Turkey', 'code' => '+90'],
            ['country_name' => 'Turkmenistan', 'code' => '+993'],
            ['country_name' => 'Tuvalu', 'code' => '+688'],
            ['country_name' => 'Uganda', 'code' => '+256'],
            ['country_name' => 'Ukraine', 'code' => '+380'],
            ['country_name' => 'United Arab Emirates', 'code' => '+971'],
            ['country_name' => 'United Kingdom', 'code' => '+44'],
            ['country_name' => 'United States', 'code' => '+1'],
            ['country_name' => 'Uruguay', 'code' => '+598'],
            ['country_name' => 'Uzbekistan', 'code' => '+998'],
            ['country_name' => 'Vanuatu', 'code' => '+678'],
            ['country_name' => 'Vatican City', 'code' => '+379'],
            ['country_name' => 'Venezuela', 'code' => '+58'],
            ['country_name' => 'Vietnam', 'code' => '+84'],
            ['country_name' => 'Yemen', 'code' => '+967'],
            ['country_name' => 'Zambia', 'code' => '+260'],
            ['country_name' => 'Zimbabwe', 'code' => '+263'],
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
