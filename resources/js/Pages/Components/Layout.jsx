import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import { FaUser } from 'react-icons/fa';
import Flash from './Flash';
import './backend.css';

const Layout = ({ children }) => {
    const { flash } = usePage().props;

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-lg font-bold hover:text-red-500">TheCapex.pro</Link>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white hover:text-red-500">Dashboard</Link>
                        <Link href={route('account.index')} className="text-white hover:text-red-500">Account</Link>
                         <Link href="/customers" className="text-white hover:text-red-500">Customers</Link>
                        <Link href="/deposit" className="text-white hover:text-red-500">Deposit</Link>
                        <Link href={route('asset.index')} className="text-white hover:text-red-500">Assets</Link>
                        <Link href="" className="text-white hover:text-red-500">WithDraw</Link>
                        <Link href="/position" className="text-white hover:text-red-500">Position</Link>
                        <div className="relative">
                            <button className="text-white" onClick={toggleDropdown}>
                                <FaUser />
                            </button>
                            {dropdownVisible && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:text-red-500">Logout</Link>
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
        </div>
    );
};

export default Layout;
