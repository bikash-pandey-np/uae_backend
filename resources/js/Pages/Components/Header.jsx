import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Header = ({ title, link, linkText, pagination }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>
                <div>
                    <Link href={link} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        {linkText}
                    </Link>
                </div>
            </div>
            <div>
            <div className='text-sm'>
            <Link href={route('dashboard')} className="text-blue-500 hover:underline">Dashboard</Link> / 
            {pagination.map((page, index) => (
                <React.Fragment key={index}>
                    <Link href={page.href} className="text-blue-500 hover:underline">
                        {page.text}
                    </Link>
                    {index < pagination.length - 1 && ' / '}
                </React.Fragment>
            ))}
             </div>
            </div>
        </div>
    );
};

export default Header;



