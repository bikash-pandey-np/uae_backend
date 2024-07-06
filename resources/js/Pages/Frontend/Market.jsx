import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout'
import { useDarkMode } from '../Components/DarkModeProvider';

const Market = ({assets}) => {
    const { darkMode } = useDarkMode();
    const [prices, setPrices] = useState({});

    const fetchPrice = async (symbol) => {
        try {
            const response = await axios.get(route('frontend.crypto-data', { symbol }));
            console.log(response.data.data.price);
            return response.data.data.price;
        } catch (error) {
            console.error('Error fetching price:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchAllPrices = async () => {
            const newPrices = {};
            for (const asset of assets) {
                const price = await fetchPrice(asset.pair + 'USDT');
                newPrices[asset.id] = price;
            }
            setPrices(newPrices);
        };

        fetchAllPrices();
    }, [assets]);

    return (
        <Layout>
            <div className="container mx-auto">
                <div className={`p-3 rounded-lg mt-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                    <h2 className="large font-semibold">Cryptocurrency Data</h2>
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map(asset => (
                                <tr key={asset.id} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} border-b`}>
                                    <td className="px-4 py-2">{asset.name}</td>
                                    <td className="px-4 py-2">{prices[asset.id] || 'Loading...'}</td>
                                    <td className="px-4 py-2">
                                        <button className={`px-4 py-2 rounded ${darkMode ? 'bg-yellow-500 text-gray-800' : 'bg-blue-500 text-white'}`}>
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default Market;
