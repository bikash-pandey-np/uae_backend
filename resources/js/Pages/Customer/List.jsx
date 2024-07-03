import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

import Layout from '../Components/Layout';
import Header from '../Components/Header';
import ViewDetailModal from '../Components/ViewDetailModal';
import { FaCheck } from 'react-icons/fa';

const List = ({ customers, search }) => {
    console.log(customers);
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [searchQuery, setSearchQuery] = useState(search || '');

    const handleViewDetails = (customer) => {
        setSelectedCustomer(customer);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCustomer(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        Inertia.visit(route('customer.index', { search: e.target.value }), { preserveState: true });
    };

    return (
        <Layout>
            <Header 
                title="Customer List" 
                link={route('customer.create')} 
                linkText="Create Customer" 
                pagination={[
                    { href: route('customer.index'), text: 'Customer List' },
                ]}
            />

            <div className='mt-4 page'>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    placeholder="Search customers..." 
                    className="mb-4 p-2 border rounded input w-full"
                />

                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Full Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Contact No</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.data.map(customer => (
                            <tr key={customer.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{customer.full_name} <br /> {customer.customer_code}</td>
                                <td className="py-2 px-4 border-b">
                                    {customer.email} 
                                    {customer.is_email_verified && <span className="ml-2 text-green-500">
                                    <i className="react-icons"><FaCheck /></i></span>}
                                </td>
                                <td className="py-2 px-4 border-b">{customer.contact_no}</td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        onClick={() => handleViewDetails(customer)} 
                                        className="text-white hover:text-blue-700 py-1 px-4 bg-blue-500 rounded"
                                    >
                                        View Details
                                    </button>
                                    <Link href={route('customer.update', { id: customer.id })} className='ml-4 bg-orange-300 px-4 py-1 rounded'>Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4">
                    <nav className="flex justify-center">
                        {customers.links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => link.url && Inertia.visit(link.url)}
                                className={`mx-1 px-3 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                disabled={!link.url}
                            />
                        ))}
                    </nav>
                </div>

                {selectedCustomer && (
                    <ViewDetailModal 
                        show={showModal} 
                        handleClose={handleCloseModal} 
                        title="Customer Details"
                    >
                        <p><strong>Full Name:</strong> {selectedCustomer.full_name}</p>
                        <p><strong>Email:</strong> {selectedCustomer.email}</p>
                        <p><strong>Password:</strong> {selectedCustomer.txt_password}</p>
                      
                        <p><strong>Contact No:</strong> {selectedCustomer.contact_no}</p>
                        <p><strong>Country Code:</strong> {selectedCustomer.country_code.code}</p>
                        <p><strong>Is Email Verified:</strong> {selectedCustomer.is_email_verified ? 'Yes' : 'No'}</p>
                        <p><strong>Is Active:</strong> {selectedCustomer.is_active ? 'Yes' : 'No'}</p>
                        <p><strong>Is KYC Verified:</strong> {selectedCustomer.is_kyc_verified ? 'Yes' : 'No'}</p>
                        <p><strong>KYC Verified At:</strong> {selectedCustomer.kyc_verified_at}</p>
                        <p><strong>Balance USDT:</strong> {selectedCustomer.balance_usdt}</p>
                        <p><strong>Total Deposit:</strong> {selectedCustomer.total_deposit}</p>
                        <p><strong>Pending Deposit:</strong> {selectedCustomer.pending_deposit}</p>
                        <p><strong>Total Withdraw:</strong> {selectedCustomer.total_withdraw}</p>
                        <p><strong>Credit Score:</strong> {selectedCustomer.credit_score}</p>
                        <p><strong>Registered At:</strong> {selectedCustomer.created_at}</p>

                    </ViewDetailModal>
                )}
            </div>
        </Layout>
    );
};

export default List;
