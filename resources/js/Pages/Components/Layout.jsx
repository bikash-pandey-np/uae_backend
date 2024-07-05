import React from 'react';
import { FaSun, FaHome, FaChartLine, FaExchangeAlt, FaWallet, FaUser } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

import { useDarkMode } from './DarkModeProvider';
import { usePage } from '@inertiajs/inertia-react';
import logo from '../../../images/logo.png';

const Layout = ({ children }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { props } = usePage();
    const { flash } = props;

    return (
        <div className={darkMode ? 'dark body' : 'body'}>
            <div className="min-h-screen flex flex-col">
                <header className={`p-4 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <div className="text-lg font-bold">
                        <a>
                            <img src={logo} className='logo' />
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="focus:outline-none mr-2">
                            <BiSupport size={22} />
                        </button>
                        <button onClick={toggleDarkMode} className="focus:outline-none">
                            {darkMode ? <FaSun size={24} /> : <IoMoon size={24} />}
                        </button>
                    </div>
                </header>
                <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900 dark:text-white overflow-auto">
                    {flash.success && (
                        <div className="bg-green-500 text-white p-4 rounded mb-4">
                            {flash.success}
                        </div>
                    )}
                    {flash.error && (
                        <div className="bg-red-500 text-white p-4 rounded mb-4">
                            {flash.error}
                        </div>
                    )}
                    {children}
                </main>
                <footer className={`p-4 flex justify-around items-center shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} footer_menu_text`} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                    <div className="flex flex-col items-center">
                        <FaHome className="mb-1" />
                        <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaChartLine className="mb-1" />
                        <span>Market</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaExchangeAlt className="mb-1" />
                        <span>Trade</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaWallet className="mb-1" />
                        <span>Portfolio</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUser className="mb-1" />
                        <span>Profile</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
