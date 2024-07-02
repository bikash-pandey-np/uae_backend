import React from 'react';

const Flash = ({ type, message }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className={`m-4 p-4 rounded ${getBackgroundColor()} text-white`}>
            {message}
        </div>
    );
};

export default Flash;
