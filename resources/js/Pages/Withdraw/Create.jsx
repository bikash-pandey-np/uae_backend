import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Create = ({ currencies, customers }) => {
    const { data, setData, post, errors } = useForm({
        request_amount: '',
        currency_id: '',
        requested_by: '',
        wallet_addr: '',
        bank_info: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('withdraw.store'));
    };

    return (
        <Layout>
            <Header 
                title="Create Withdraw" 
                link={route('withdraw.index')} 
                linkText="Back" 
                pagination={[
                    { href: route('withdraw.index'), text: 'Withdraw List' },
                    { href: route('withdraw.create'), text: 'Create' },
                ]}
            />

            <div className='mt-4 page'>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Request Amount</label>
                        <input 
                            type="text" 
                            value={data.request_amount} 
                            onChange={e => setData('request_amount', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.request_amount && <div className="text-red-500 text-sm mt-1">{errors.request_amount}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Currency</label>
                        <select 
                            value={data.currency_id} 
                            onChange={e => setData('currency_id', e.target.value)} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Currency</option>
                            {currencies.map(currency => (
                                <option key={currency.id} value={currency.id}>{currency.name} - {currency.rate_per_usdt}</option>
                            ))}
                        </select>
                        {errors.currency_id && <div className="text-red-500 text-sm mt-1">{errors.currency_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Requested By</label>
                        <select 
                            value={data.requested_by} 
                            onChange={e => setData('requested_by', e.target.value)} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Customer</option>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.full_name}</option>
                            ))}
                        </select>
                        {errors.requested_by && <div className="text-red-500 text-sm mt-1">{errors.requested_by}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Wallet Address</label>
                        <input 
                            type="text" 
                            value={data.wallet_addr} 
                            onChange={e => setData('wallet_addr', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.wallet_addr && <div className="text-red-500 text-sm mt-1">{errors.wallet_addr}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Bank Information</label>
                        <input 
                            type="text" 
                            value={data.bank_info} 
                            onChange={e => setData('bank_info', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.bank_info && <div className="text-red-500 text-sm mt-1">{errors.bank_info}</div>}
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Create Withdraw
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
