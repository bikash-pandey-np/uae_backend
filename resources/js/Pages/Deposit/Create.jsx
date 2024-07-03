import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Create = ({ currencies, customers, accounts }) => {
    console.log(accounts);
    const { data, setData, post, errors } = useForm({
        request_amount: '',
        currency_id: '',
        deposited_by: '',
        account_id: '',
        type: '',
    });

    const [showAccountField, setShowAccountField] = useState(true);

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setData('type', value);
        setShowAccountField(value === 'account');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('deposit.store'));
    };

    return (
        <Layout>
            <Header 
                title="Create Deposit" 
                link={route('deposit.index')} 
                linkText="Back" 
                pagination={[
                    { href: route('deposit.index'), text: 'Deposit List' },
                    { href: route('deposit.create'), text: 'Create' },
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
                        <label className="block text-gray-700">Deposited By</label>
                        <select 
                            value={data.deposited_by} 
                            onChange={e => setData('deposited_by', e.target.value)} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Customer</option>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.full_name}</option>
                            ))}
                        </select>
                        {errors.deposited_by && <div className="text-red-500 text-sm mt-1">{errors.deposited_by}</div>}
                    </div>
                    {showAccountField && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Account</label>
                            <select 
                                value={data.account_id} 
                                onChange={e => setData('account_id', e.target.value)} 
                                className="mt-1 block w-full input"
                            >
                                <option value="">Select Account</option>
                                {accounts.map(account => (
                                    <option key={account.id} value={account.id}>{account.title}</option>
                                ))}
                            </select>
                            {errors.account_id && <div className="text-red-500 text-sm mt-1">{errors.account_id}</div>}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700">Type</label>
                        <select 
                            value={data.type} 
                            onChange={handleTypeChange} 
                            className="mt-1 block w-full input"
                        >
                            <option value="">Select Type</option>
                            <option value="cash">Cash</option>
                            <option value="account">Account</option>
                        </select>
                        {errors.type && <div className="text-red-500 text-sm mt-1">{errors.type}</div>}
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Create Deposit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;


