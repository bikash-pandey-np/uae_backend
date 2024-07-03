import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Show = ({ deposit }) => {
    const { data, setData, post, processing, errors } = useForm({
        approved_amount: deposit.request_amount * deposit.currency.rate_per_usdt,
        reject_reason: '',
    });

    console.log(deposit);

    const handleApprove = (e) => {
        e.preventDefault();
        post(route('deposit.approve', { id: deposit.id }));
    };

    const handleReject = (e) => {
        e.preventDefault();
        post(route('deposit.reject', { id: deposit.id }));
    };

    return (
        <Layout>
            <Header 
                title="Deposit Details" 
                link={route('deposit.index')} 
                linkText="Back to List" 
                pagination={[
                    { href: route('deposit.index'), text: 'Deposit List' },
                ]}
            />

            <div className='mt-4 page flex'>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg info_box w-1/2 mr-4">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Deposit Information</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Request Amount</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.request_amount} - {deposit.currency.name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Transaction Code</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.transaction_code}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Deposited By</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.deposited_by.customer_code}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Type</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.type}</dd>
                            </div>
                            {deposit.type === 'account' && (
                                <>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Account Title</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.account.title}</dd>
                                    </div>
                                    {deposit.account.wallet_addr && (
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Wallet Address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.account.wallet_addr}</dd>
                                        </div>
                                    )}
                                    {deposit.account.acc_no && deposit.account.bank_name && (
                                        <>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Account Number</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.account.acc_no}</dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.account.bank_name}</dd>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Status</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.status}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Requested At</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.requested_at}</dd>
                            </div>
                            {!(deposit.approved_amount === 0) && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Approved Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.approved_amount} USDT</dd>
                                </div>
                            )}
                            {deposit.reject_reason && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Reject Reason</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.reject_reason}</dd>
                                </div>
                            )}
                            {deposit.rejected_at && (
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Rejected At</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.rejected_at}</dd>
                                </div>
                            )}
                            {deposit.approved_at && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Approved At</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deposit.approved_at}</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
                {deposit.status === "Processing" && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-1/2">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Approve or Reject Deposit</h3>
                        </div>
                        <div className="border-t border-gray-200 p-4">
                            <form onSubmit={handleApprove}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Approved Amount</label>
                                    <input
                                        type="text"
                                        name="approved_amount"
                                        value={data.approved_amount}
                                        onChange={(e) => setData('approved_amount', e.target.value)}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input"
                                    />
                                    {errors.approved_amount && <div className="text-red-600 text-sm">{errors.approved_amount}</div>}
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
                                    disabled={processing}
                                >
                                    Approve
                                </button>
                            </form>
                            <form onSubmit={handleReject} className="mt-4">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Reject Reason</label>
                                    <textarea
                                        name="reject_reason"
                                        value={data.reject_reason}
                                        onChange={(e) => setData('reject_reason', e.target.value)}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input"
                                    />
                                    {errors.reject_reason && <div className="text-red-600 text-sm">{errors.reject_reason}</div>}
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring ring-red-300 disabled:opacity-25 transition ease-in-out duration-150"
                                    disabled={processing}
                                >
                                    Reject
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Show;
