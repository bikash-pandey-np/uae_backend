import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Create = ({currencies}) => {
    const { data, setData, post, errors } = useForm({
        title: '',
        currency_id: '',
        deposit_instruction: '',
        is_active: true,
        wallet_addr: '',
        bank_name: '',
        acc_no: '',
        acc_name: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('account.create'));
    };

    return (
        <Layout>
            <Header 
                title="Create Account" 
                link={route('account.index')} 
                linkText="Back" 
                pagination={[
                    { href: route('account.index'), text: 'Account List' },
                    { href: route('account.create'), text: 'Create' },
                ]}
            />

            <div className='mt-4 page'>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input 
                            type="text" 
                            value={data.title} 
                            onChange={e => setData('title', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <div className="mb-4">
                            <label className="block text-gray-700">Currency</label>
                            <select 
                                value={data.currency_id} 
                                onChange={e => setData('currency_id', e.target.value)} 
                                className="mt-1 block w-full input"
                            >
                                <option value="">Select Currency</option>
                                {currencies.map(currency => (
                                    <option key={currency.id} value={currency.id}>{currency.name}</option>
                                ))}
                            </select>
                            {errors.currency_id && <div className="text-red-500 text-sm mt-1">{errors.currency_id}</div>}
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
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Deposit Instruction</label>
                        <textarea 
                            value={data.deposit_instruction} 
                            onChange={e => setData('deposit_instruction', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.deposit_instruction && <div className="text-red-500 text-sm mt-1">{errors.deposit_instruction}</div>}
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
                        <label className="block text-gray-700">Bank Name</label>
                        <input 
                            type="text" 
                            value={data.bank_name} 
                            onChange={e => setData('bank_name', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.bank_name && <div className="text-red-500 text-sm mt-1">{errors.bank_name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Account Number</label>
                        <input 
                            type="text" 
                            value={data.acc_no} 
                            onChange={e => setData('acc_no', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.acc_no && <div className="text-red-500 text-sm mt-1">{errors.acc_no}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Account Name</label>
                        <input 
                            type="text" 
                            value={data.acc_name} 
                            onChange={e => setData('acc_name', e.target.value)} 
                            className="mt-1 block w-full input"
                        />
                        {errors.acc_name && <div className="text-red-500 text-sm mt-1">{errors.acc_name}</div>}
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
