import React from 'react';
import Layout from '../Components/Layout';
import { useDarkMode } from '../Components/DarkModeProvider';
import moment from 'moment';

const DepositHistory = ({ deposits }) => {
    console.log(deposits);
    const { darkMode } = useDarkMode();

    const formatDate = (dateString) => {
        return moment(dateString).format('LLL');
    };

    return (
        <Layout>
            <div className="container mx-auto">
                <div className={`p-3 rounded-lg flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
                    <h3 className='text-xl font-semibold'>Deposit History</h3>
                </div>

                <div className={`mt-4 mb-12 p-3 rounded-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
                    {deposits.map(deposit => (
                        <div key={deposit.id} className="mb-4 p-4 rounded-lg shadow-md border border-gray-200">
                            <a>
                                <p><strong>Request Amount:</strong> {deposit.request_amount} {deposit.currency.symbol}</p>
                                <p><strong>Transaction Code:</strong> {deposit.transaction_code}</p>
                                <p><strong>Type:</strong> {deposit.type}</p>
                                <p><strong>Is Approved:</strong> {deposit.is_approved ? 'Yes' : 'No'}</p>
                                <p><strong>Requested At:</strong> {formatDate(deposit.requested_at)}</p>
                                <p><strong>Status:</strong> {deposit.status}</p>
                                {deposit.is_approved === 1 && (
                                    <p><strong>Approved Amount:</strong> {deposit.approved_amount} USDT</p>
                                )}
                                {deposit.status === 'Rejected' && (
                                    <>
                                        <p><strong>Reject Reason:</strong> {deposit.reject_reason}</p>
                                        <p><strong>Rejected At:</strong> {formatDate(deposit.rejected_at)}</p>
                                    </>
                                )}
                            </a>
                        </div>
                    ))}
                </div>

                <div className={`mt-4 mb-12 p-3 rounded-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
                {deposits.map(deposit => (
                    <div key={deposit.id} className="mb-4 p-4 rounded-lg shadow-md border border-gray-200">
                        <a>
                            <p><strong>Request Amount:</strong> {deposit.request_amount} {deposit.currency.symbol}</p>
                            <p><strong>Transaction Code:</strong> {deposit.transaction_code}</p>
                            <p><strong>Type:</strong> {deposit.type}</p>
                            <p><strong>Is Approved:</strong> {deposit.is_approved ? 'Yes' : 'No'}</p>
                            <p><strong>Requested At:</strong> {formatDate(deposit.requested_at)}</p>
                            <p><strong>Status:</strong> {deposit.status}</p>
                            {deposit.is_approved === 1 && (
                                <p><strong>Approved Amount:</strong> {deposit.approved_amount} USDT</p>
                            )}
                            {deposit.status === 'Rejected' && (
                                <>
                                    <p><strong>Reject Reason:</strong> {deposit.reject_reason}</p>
                                    <p><strong>Rejected At:</strong> {formatDate(deposit.rejected_at)}</p>
                                </>
                            )}
                        </a>
                    </div>
                ))}
            </div>
                
            </div>
        </Layout>
    );
};

export default DepositHistory;
