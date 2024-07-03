import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

import Layout from '../Components/Layout';
import Header from '../Components/Header';

const List = ({ deposits, search }) => {
    const [searchTerm, setSearchTerm] = useState(search || '');

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.visit(route('deposit.index'), { data: { search: searchTerm }, only: ['deposits', 'search'] });
    };

    return (
        <Layout>
            <Header 
                title="Deposit List" 
                link={route('deposit.create')} 
                linkText="Create Deposit" 
                pagination={[
                    { href: route('deposit.index'), text: 'Deposit List' },
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
                            <th className="py-2 px-4 border-r">Deposited By</th>
                            <th className="py-2 px-4 border-r">Type</th>
                            <th className="py-2 px-4 border-r">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deposits.data.map(deposit => (
                            <tr key={deposit.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4 border-r">{deposit.request_amount} - {deposit.currency.name}</td>
                                <td className="py-2 px-4 border-r">{deposit.transaction_code}</td>
                                <td className="py-2 px-4 border-r">{deposit.deposited_by.customer_code}</td>
                                <td className="py-2 px-4 border-r">
                                    <span className={`px-2 py-1 rounded-full text-white ${deposit.type === 'account' ? 'bg-blue-500' : 'bg-yellow-500'}`}>
                                        {deposit.type}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-r">{deposit.status}</td>
                                <td className="py-2 px-4">
                                    <Link 
                                        href={route('deposit.show', { id: deposit.id })} 
                                        className="text-white hover:text-blue-700 py-1 px-4 bg-blue-500 rounded"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                <nav className="flex justify-center">
                    {deposits.links.map((link, index) => (
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
            </div>
        </Layout>
    );
};

export default List;
