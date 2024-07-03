import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

import { Link, usePage } from '@inertiajs/inertia-react';
import { FaUser } from 'react-icons/fa';
import Flash from './Flash';
import './backend.css';

const Layout = ({ children }) => {
    const { flash } = usePage().props;

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        // Perform logout action
        Inertia.post(route('logout'));
    };

    const cancelLogout = () => {
        setShowLogoutModal(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-lg font-bold hover:text-red-500">TheCapex.pro</Link>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white hover:text-red-500">Dashboard</Link>
                        <Link href={route('account.index')} className="text-white hover:text-red-500">Account</Link>
                         <Link href={route('customer.index')} className="text-white hover:text-red-500">Customers</Link>
                        <Link href={route('deposit.index')} className="text-white hover:text-red-500">Deposit</Link>
                        <Link href={route('asset.index')} className="text-white hover:text-red-500">Assets</Link>
                        <Link href={route('withdraw.index')} className="text-white hover:text-red-500">WithDraw</Link>
                        <Link href="/position" className="text-white hover:text-red-500">Position</Link>
                        <div className="relative">
                            <button className="text-white" onClick={toggleDropdown}>
                                <FaUser />
                            </button>
                            {dropdownVisible && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:text-red-500">Logout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {flash.success && <Flash type="success" message={flash.success} />}
            {flash.error && <Flash type="error" message={flash.error} />}

            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>

            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Are you sure you want to logout?</h2>
                        <div className="flex justify-end space-x-4">
                            <button onClick={cancelLogout} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                            <button onClick={confirmLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
