import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        pair: '',
        type: '',
        is_active: true,
        chart_symbol: '',
        min_trade_amount: '',
        max_trade_amount: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('asset.create'));
    };

    return (
        <Layout>
            <Header 
                title="Create Asset" 
                link={route('asset.index')} 
                linkText="Back" 
                pagination={[
                    { href: route('asset.index'), text: 'Asset List' },
                    { href: route('asset.create'), text: 'Create' },
                ]}
            />

            <div className='mt-4 page'>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            value={data.name} 
                            onChange={e => setData('name', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Pair</label>
                        <input 
                            type="text" 
                            value={data.pair} 
                            onChange={e => setData('pair', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.pair && <div className="text-red-500 text-sm mt-1">{errors.pair}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Type</label>
                        <select 
                            value={data.type} 
                            onChange={e => setData('type', e.target.value)} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Type</option>
                            <option value="crypto">Crypto</option>
                            <option value="stock">Stock</option>
                        </select>
                        {errors.type && <div className="text-red-500 text-sm mt-1">{errors.type}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Is Active</label>
                        <input 
                            type="checkbox" 
                            checked={data.is_active} 
                            onChange={e => setData('is_active', e.target.checked)} 
                            className="mt-1 input"
                        />
                        {errors.is_active && <div className="text-red-500 text-sm mt-1">{errors.is_active}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Chart Symbol</label>
                        <input 
                            type="text" 
                            value={data.chart_symbol} 
                            onChange={e => setData('chart_symbol', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.chart_symbol && <div className="text-red-500 text-sm mt-1">{errors.chart_symbol}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Min Trade Amount</label>
                        <input 
                            type="text" 
                            value={data.min_trade_amount} 
                            onChange={e => setData('min_trade_amount', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.min_trade_amount && <div className="text-red-500 text-sm mt-1">{errors.min_trade_amount}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Max Trade Amount</label>
                        <input 
                            type="text" 
                            value={data.max_trade_amount} 
                            onChange={e => setData('max_trade_amount', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.max_trade_amount && <div className="text-red-500 text-sm mt-1">{errors.max_trade_amount}</div>}
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Create Asset
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
