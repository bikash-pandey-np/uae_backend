import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-lg font-bold">TheCapex.pro</Link>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/account" className="text-white">Account</Link>
                        <Link href="/customers" className="text-white">Customers</Link>
                        <Link href="/deposit" className="text-white">Deposit</Link>
                        <Link href="/assets" className="text-white">Assets</Link>
                        <Link href="/withdraw" className="text-white">WithDraw</Link>
                        <Link href="/position" className="text-white">Position</Link>
                        <div className="relative">
                            <button className="text-white">Profile</button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                <Link href="/logout" className="block px-4 py-2 text-gray-800">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
