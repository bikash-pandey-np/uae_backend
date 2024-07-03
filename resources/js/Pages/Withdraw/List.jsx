import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

import Layout from '../Components/Layout';
import Header from '../Components/Header';

const List = ({ withdraws, search }) => {
    const [searchTerm, setSearchTerm] = useState(search || '');
    console.log(withdraws);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.visit(route('withdraw.index'), { data: { search: searchTerm }, only: ['withdraws', 'search'] });
    };
  

    return (
        <Layout>
            <Header 
                title="Withdraw List" 
                link={route('withdraw.create')} 
                linkText="Create Withdraw" 
                pagination={[
                    { href: route('withdraw.index'), text: 'Withdraw List' },
                ]}
            />

            <div className='mt-4 page'>
            <form onSubmit={handleSearch} className="mb-4">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search by transaction code or customer code" 
                className="input w-full"
            />
            <button type="submit" className="btn btn-primary mt-2" style={{ display: 'none' }}>Search</button>
        </form>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 border-r">Request Amount</th>
                            <th className="py-2 px-4 border-r">Transaction Code</th>
                            <th className="py-2 px-4 border-r">Withdrawn By</th>
                            <th className="py-2 px-4 border-r">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {withdraws && (
                            withdraws.data.map(withdrawal => (
                                <tr key={withdrawal.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4 border-r">{withdrawal.request_amount} - {withdrawal.currency.name}</td>
                                    <td className="py-2 px-4 border-r">{withdrawal.transaction_code}</td>
                                    <td className="py-2 px-4 border-r">{withdrawal.requested_by.customer_code}</td>
                                   
                                    <td className="py-2 px-4 border-r">{withdrawal.status}</td>
                                    <td className="py-2 px-4">
                                        <Link 
                                            href={route('withdraw.show', { id: withdrawal.id })} 
                                            className="text-white hover:text-blue-700 py-1 px-4 bg-blue-500 rounded"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <div className="mt-4">
                <nav className="flex justify-center">
                   {withdraws && (
                    withdraws.links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => link.url && Inertia.visit(link.url)}
                            className={`mx-1 px-3 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            disabled={!link.url}
                        />
                    ))
                   )}
                </nav>
            </div>
            </div>
        </Layout>
    );
};

export default List;

