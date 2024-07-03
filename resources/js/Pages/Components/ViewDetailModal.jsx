import React from 'react';

const ViewDetailModal = ({ show, handleClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button 
                        type="button" 
                        className="ml-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                    <div className="mt-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailModal;