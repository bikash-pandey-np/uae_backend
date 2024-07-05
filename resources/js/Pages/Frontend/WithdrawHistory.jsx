import React from 'react';

import Layout from '../Components/Layout'
import { useDarkMode } from '../Components/DarkModeProvider';


const WithdrawHistory = ({withdrawals}) => {
    console.log(withdrawals);
    const { darkMode } = useDarkMode();

 
    return (
        <Layout>
            <div className="container mx-auto">
            <div className={`p-3 rounded-lg flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
</div>
              
               
            </div>
        </Layout>
    );
};

export default WithdrawHistory;
