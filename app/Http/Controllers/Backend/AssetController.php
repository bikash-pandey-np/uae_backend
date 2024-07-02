<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Asset;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index()
    {
        $assets = Asset::all();
        return Inertia::render('Asset/List', [
            'assets' => $assets
        ]);
    }

    public function getCreate()
    {
        return Inertia::render('Asset/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'pair' => 'required|string|max:255',
            'type' => 'required|in:crypto,stock',
            'is_active' => 'required|boolean',
            'chart_symbol' => 'nullable|string|max:255',
            'min_trade_amount' => 'nullable|numeric|min:200',
            'max_trade_amount' => 'nullable|numeric|gt:min_trade_amount|gt:min_trade_amount',
        ]);

        try {
            Asset::create($validatedData);
        } catch (\Exception $e) {
            return redirect()->route('asset.create')->with('error', 'Failed to create asset: ' . $e->getMessage());
        }
        return redirect()->route('asset.index')->with('success', 'Asset created successfully.');
    }

    public function getUpdate($id)
    {
        $asset = Asset::findOrFail($id);
        return Inertia::render('Asset/Update', [
            'asset' => $asset,
        ]);
    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'pair' => 'required|string|max:255',
            'type' => 'required|in:crypto,stock',
            'is_active' => 'required|boolean',
            'chart_symbol' => 'nullable|string|max:255',
            'min_trade_amount' => 'nullable|numeric|min:200',
            'max_trade_amount' => 'nullable|numeric|gt:min_trade_amount|gt:min_trade_amount',
        ]);

        try {
            $asset = Asset::findOrFail($id);
            $asset->update($validatedData);
        } catch (\Exception $e) {
            return redirect()->route('asset.update', ['id' => $id])->with('error', 'Failed to update asset: ' . $e->getMessage());
        }
        return redirect()->route('asset.index')->with('success', 'Asset updated successfully.');
    }
}