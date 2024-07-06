<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Customer;
use App\Models\Position;

use Illuminate\Support\Facades\DB;

class TradeController extends Controller
{

    public function getSingleSharePrice($symbol)
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->get('https://api-v2.capex.com/quotesv2?key=1&q=' . $symbol);
        $share_datas = json_decode($response->getBody()->getContents(), true);

        $share_datas = $share_datas[$symbol];
        return response()->json([
            'data' => $share_datas
        ]);
    }

    public function handleTradeRequest(Request $request)
    {
        $data = $request->validate([
            'amount' => 'required|numeric|min:500|gt:0',
            'tradeType' => 'required|in:long,short',
            'symbol' => 'required|string',
            'duration' => 'required|in:3,5,15,30,60',
        ], [
            'amount.required' => 'Enter Trade Amount',
            'amount.numeric' => 'The amount must be a number.',
            'amount.min' => 'The minimum trade amount is 500.',
            'amount.gt' => 'The trade amount must be greater than 0.',
            'tradeType.required' => 'The trade type field is required.',
            'tradeType.in' => 'The selected trade type is invalid.',
            'symbol.required' => 'The symbol field is required.',
            'symbol.string' => 'The symbol must be a string.',
            'duration.required' => 'Select trade duration time',
            'duration.in' => 'The selected duration is invalid.',
        ]);

        //check if user have balance 
        $user = Customer::find(Auth::user()->id);
        if($user->balance_usdt < $request->amount)
        {
            return back()->with('error', 'Inssufficient Balance');

        }

        //check if user email is verified

        if(! $user->is_email_verified)
        {
            return back()->with('error', 'Verify email before placing trade');
        }

        //is kyc verified
        // if(! $user->is_kyc_verified)
        // {
        //     return back()->with('error', 'Verify KYC before placing trade');
        // }


        // Assuming you have a Trade model
        try {

            $rawData = [
                'amount' => $request->amount,
                'type' => $request->tradeType,
                'symbol' => $request->symbol,
                'entry_price' => json_decode(file_get_contents('https://ticker.thecapex.pro/?symbol=' . $request->symbol))->price,
                'traded_by' => Auth::user()->id,
                'traded_datetime' => now(),
                'trade_duration' => $request->duration,
                'will_close_at' => now()->addMinutes($request->duration),
            ];

            DB::transaction(function () use ($rawData, $user, $request) {
                $temp = Position::create($rawData);

                $user->balance_usdt = $user->balance_usdt - $request->amount;
                $user->traded_amount += $request->amount;
                $user->save();
            }); 
            
            return back()->with('success', 'Trade Placed Successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Cannot Place Trade ! Contact Admin');

        }
    }

    public function handleTradeRequestShare(Request $request)
    {
        $client = new \GuzzleHttp\Client();

        $response = $client->get('https://api-v2.capex.com/quotesv2?key=1&q=' . $request->symbol);
        $share_datas = json_decode($response->getBody()->getContents(), true);

        $price = $share_datas[$request->symbol]['price'];
        $data = $request->validate([
            'amount' => 'required|numeric|min:500|gt:0',
            'tradeType' => 'required|in:long,short',
            'symbol' => 'required|string',
            'duration' => 'required|in:3,5,15,30,60',
        ], [
            'amount.required' => 'Enter Trade Amount',
            'amount.numeric' => 'The amount must be a number.',
            'amount.min' => 'The minimum trade amount is 500.',
            'amount.gt' => 'The trade amount must be greater than 0.',
            'tradeType.required' => 'The trade type field is required.',
            'tradeType.in' => 'The selected trade type is invalid.',
            'symbol.required' => 'The symbol field is required.',
            'symbol.string' => 'The symbol must be a string.',
            'duration.required' => 'Select trade duration time',
            'duration.in' => 'The selected duration is invalid.',
        ]);


        //check if user have balance 
        $user = Customer::find(Auth::user()->id);
        if($user->balance_usdt < $request->amount)
        {
            return back()->with('error', 'Inssufficient Balance');

        }

        //check if user email is verified

        if(! $user->is_email_verified)
        {
            return back()->with('error', 'Verify email before placing trade');
        }

        //is kyc verified
        // if(! $user->is_kyc_verified)
        // {
        //     return back()->with('error', 'Verify KYC before placing trade');
        // }


        // Assuming you have a Trade model
        try {

            $rawData = [
                'amount' => $request->amount,
                'type' => $request->tradeType,
                'symbol' => $request->symbol,
                'is_crypto' => false,
                'entry_price' => $price,
                'traded_by' => Auth::user()->id,
                'traded_datetime' => now(),
                'trade_duration' => $request->duration,
                'will_close_at' => now()->addMinutes($request->duration),
            ];

            DB::transaction(function () use ($rawData, $user, $request) {
                $temp = Position::create($rawData);

                $user->balance_usdt = $user->balance_usdt - $request->amount;
                $user->traded_amount += $request->amount;

                $user->save();
            }); 
            
            return back()->with('success', 'Trade Placed Successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Cannot Place Trade ! Contact Admin');

        }
    }
}
