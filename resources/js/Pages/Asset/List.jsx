import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import ViewDetailModal from '../Components/ViewDetailModal';

const List = ({ assets }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleViewDetails = (asset) => {
        setSelectedAsset(asset);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAsset(null);
    };

    return (
        <Layout>
            <Header 
                title="Asset List" 
                link={route('asset.create')} 
                linkText="Create Asset" 
                pagination={[
                    { href: route('asset.index'), text: 'Asset List' },
                ]}
            />

            <div className='mt-4 page'>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2">Pair</th>
                            <th className="py-2">Chart Symbol</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map(asset => (
                            <tr key={asset.id}>
                                <td className="py-2">{asset.name}</td>
                                <td className="py-2">{asset.pair}</td>
                                <td className="py-2">{asset.chart_symbol}</td>
                                <td className="py-2">
                                    <button 
                                        onClick={() => handleViewDetails(asset)} 
                                        className="text-white hover:text-blue-700 py-1 px-4 bg-blue-500"
                                    >
                                        View Details
                                    </button>
                                    <Link href={route('asset.update', { id: asset.id })} className='ml-4 bg-orange-300 px-4 py-1'>Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedAsset && (
                    <ViewDetailModal 
                        show={showModal} 
                        handleClose={handleCloseModal} 
                        title="Asset Details"
                    >
                        <p><strong>Name:</strong> {selectedAsset.name}</p>
                        <p><strong>Pair:</strong> {selectedAsset.pair}</p>
                        <p><strong>Chart Symbol:</strong> {selectedAsset.chart_symbol}</p>
                        <p><strong>Type:</strong> {selectedAsset.type}</p>
                        <p><strong>Is Active:</strong> {selectedAsset.is_active ? 'Yes' : 'No'}</p>
                        <p><strong>Min Trade Amount:</strong> {selectedAsset.min_trade_amount}</p>
                        <p><strong>Max Trade Amount:</strong> {selectedAsset.max_trade_amount}</p>
                    </ViewDetailModal>
                )}
            </div>
        </Layout>
    );
};

export default List;
