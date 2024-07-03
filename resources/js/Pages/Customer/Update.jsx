import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Update = ({ customer, countryCodes }) => {
    const { data, setData, put, errors } = useForm({
        full_name: customer.full_name || '',
        email: customer.email || '',
        password: '',
        password_confirmation: '',
        country_code_id: customer.country_code_id || '',
        contact_no: customer.contact_no || '',
        is_email_verified: customer.is_email_verified || false,
        is_active: customer.is_active || true,
        balance_usdt: customer.balance_usdt || '',
        total_deposit: customer.total_deposit || '',
        pending_deposit: customer.pending_deposit || '',
        total_withdraw: customer.total_withdraw || '',
        credit_score: customer.credit_score || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('customer.update', customer.id));
    };

    return (
        <Layout>
            <Header 
                title="Update Customer" 
                link={route('customer.index')} 
                linkText="Back" 
                pagination={[
                    { href: route('customer.index'), text: 'Customer List' },
                    { href: route('customer.update', customer.id), text: 'Update' },
                ]}
            />

            <div className='mt-4 page'>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input 
                            type="text" 
                            value={data.full_name} 
                            onChange={e => setData('full_name', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.full_name && <div className="text-red-500 text-sm mt-1">{errors.full_name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            value={data.email} 
                            onChange={e => setData('email', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            value={data.password} 
                            onChange={e => setData('password', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input 
                            type="password" 
                            value={data.password_confirmation} 
                            onChange={e => setData('password_confirmation', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.password_confirmation && <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Country Code</label>
                        <select 
                            value={data.country_code_id} 
                            onChange={e => setData('country_code_id', e.target.value)} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Country Code</option>
                            {countryCodes.map(code => (
                                <option key={code.id} value={code.id}>{code.code}</option>
                            ))}
                        </select>
                        {errors.country_code_id && <div className="text-red-500 text-sm mt-1">{errors.country_code_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact No</label>
                        <input 
                            type="text" 
                            value={data.contact_no} 
                            onChange={e => setData('contact_no', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.contact_no && <div className="text-red-500 text-sm mt-1">{errors.contact_no}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Is Email Verified</label>
                        <input 
                            type="checkbox" 
                            checked={data.is_email_verified} 
                            onChange={e => setData('is_email_verified', e.target.checked)} 
                            className="mt-1 input"
                        />
                        {errors.is_email_verified && <div className="text-red-500 text-sm mt-1">{errors.is_email_verified}</div>}
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
                        <label className="block text-gray-700">Balance USDT</label>
                        <input 
                            type="text" 
                            value={data.balance_usdt} 
                            onChange={e => setData('balance_usdt', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.balance_usdt && <div className="text-red-500 text-sm mt-1">{errors.balance_usdt}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Total Deposit</label>
                        <input 
                            type="text" 
                            value={data.total_deposit} 
                            onChange={e => setData('total_deposit', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.total_deposit && <div className="text-red-500 text-sm mt-1">{errors.total_deposit}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Pending Deposit</label>
                        <input 
                            type="text" 
                            value={data.pending_deposit} 
                            onChange={e => setData('pending_deposit', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.pending_deposit && <div className="text-red-500 text-sm mt-1">{errors.pending_deposit}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Total Withdraw</label>
                        <input 
                            type="text" 
                            value={data.total_withdraw} 
                            onChange={e => setData('total_withdraw', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.total_withdraw && <div className="text-red-500 text-sm mt-1">{errors.total_withdraw}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Credit Score</label>
                        <input 
                            type="text" 
                            value={data.credit_score} 
                            onChange={e => setData('credit_score', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.credit_score && <div className="text-red-500 text-sm mt-1">{errors.credit_score}</div>}
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Update Customer
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Update;
