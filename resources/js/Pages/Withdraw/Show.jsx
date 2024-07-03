import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';

const Show = ({ withdraw }) => {
    const { data, setData, post, processing, errors } = useForm({
        request_amount: withdraw.request_amount * withdraw.currency.rate_per_usdt,
        reject_reason: '',
    });

    console.log(withdraw);

    const handleApprove = (e) => {
        e.preventDefault();
        console.log('asdf');
        post(route('withdraw.approve', { id: withdraw.id }));
    };

    const handleReject = (e) => {
        e.preventDefault();
        post(route('withdraw.reject', { id: withdraw.id }));
    };

    return (
        <Layout>
            <Header 
                title="Withdraw Details" 
                link={route('withdraw.index')} 
                linkText="Back to List" 
                pagination={[
                    { href: route('withdraw.index'), text: 'Withdraw List' },
                ]}
            />

            <div className='mt-4 page flex'>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg info_box w-1/2 mr-4">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Withdraw Information</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Request Amount</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.request_amount} - {withdraw.currency.name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Transaction Code</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.transaction_code}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Withdrawn By</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.requested_by.customer_code}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Status</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.status}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Requested At</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.requested_at}</dd>
                            </div>
                           
                            {withdraw.reject_reason && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Reject Reason</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.reject_reason}sad</dd>
                                </div>
                            )}
                            {withdraw.rejected_at && (
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Rejected At</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.rejected_at}sad</dd>
                                </div>
                            )}
                            {withdraw.approved_at && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Approved At</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{withdraw.approved_at}sad</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
                {withdraw.status === "Processing" && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-1/2">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Approve or Reject Withdraw</h3>
                        </div>
                        <div className="border-t border-gray-200 p-4">
                            <form onSubmit={handleApprove}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Approved Amount</label>
                                    <input
                                        type="text"
                                        name="request_amount"
                                        value={data.request_amount}
                                        onChange={(e) => setData('request_amount', e.target.value)}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input"
                                    />
                                    {errors.request_amount && <div className="text-red-600 text-sm">{errors.request_amount}</div>}
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
