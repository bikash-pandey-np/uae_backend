import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import ViewDetailModal from '../Components/ViewDetailModal';

const List = ({accounts}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleViewDetails = (account) => {
        setSelectedAccount(account);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAccount(null);
    };

    return (
        <Layout>
            <Header 
                title="Account List" 
                link="/account/create" 
                linkText="Create Account" 
                pagination={[
                    { href: route('account.index'), text: 'Account List' },
                ]}
            />
            <div className='page'>
            <table className="min-w-full bg-white">
                <thead className='bg-gray-400'>
                    <tr>
                        <th className="py-2">Title</th>
                        <th className="py-2">Currency</th>
                        <th className="py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td className="border px-4 py-2">{account.title}</td>
                            <td className="border px-4 py-2">{account.currency.symbol}</td>
                            <td className="border px-4 py-2">
                                <button 
                                    onClick={() => handleViewDetails(account)} 
                                    className="text-white hover:text-blue-700 py-1 px-4 bg-blue-500"
                                >
                                    View Details
                                </button>
                                <Link href={route('account.update', { id: account.id })} className='ml-4 bg-orange-300 px-4 py-1'>Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedAccount && (
                <ViewDetailModal 
                    show={showModal} 
                    handleClose={handleCloseModal} 
                    title="Account Details"
                >
                    <p><strong>Title:</strong> {selectedAccount.title}</p>
                    <p><strong>Currency:</strong> {selectedAccount.currency.symbol}</p>
                    <p><strong>Deposit Instruction:</strong> {selectedAccount.deposit_instruction}</p>
                    <p><strong>Is Active:</strong> {selectedAccount.is_active ? 'Yes' : 'No'}</p>
                    <p><strong>Wallet Address:</strong> {selectedAccount.wallet_addr}</p>
                    <p><strong>Bank Name:</strong> {selectedAccount.bank_name}</p>
                    <p><strong>Account Number:</strong> {selectedAccount.acc_no}</p>
                    <p><strong>Account Name:</strong> {selectedAccount.acc_name}</p>
                </ViewDetailModal>
            )}
            </div>
        </Layout>
    );
};

export default List;
