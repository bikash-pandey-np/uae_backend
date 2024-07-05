import React from 'react';

import Layout from '../Components/Layout'
import { useDarkMode } from '../Components/DarkModeProvider';


const Dashboard = ({assets}) => {
    const { darkMode } = useDarkMode();

    console.log(assets);
 
    return (
        <Layout>
            <div className="container mx-auto">
                <div className={`p-3 rounded-lg flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                    <div>
                        <h2 className="extra_small">Balance (USDT)</h2>
                        <p className="large font-bold">$ 1200 </p>
                        <p className="medium font-bold text-gray-400">≈ 1200 INR</p>
                    </div>
                    <a 
                    href={route('frontend.deposit')} 
                    className={`medium px-4 py-1 rounded shadow focus:outline-none ${darkMode ? 'bg-yellow-500 text-gray-800 hover:bg-yellow-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                        Add Funds
                    </a>
                </div>
                <div className={`p-3 rounded-lg mt-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                    <h2 className="extra_small">Assets</h2>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left medium">Cryptocurrency</th>
                                <th className="text-left medium">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map(asset => (
                                <tr key={asset.id}>
                                    <td className="medium font-bold">{asset.pair}</td>
                                    <td className="medium font-bold">
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

export default Dashboard;
