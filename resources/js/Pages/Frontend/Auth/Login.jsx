import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import logo from '../../../../images/logo.png'

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: 'john.doe@example.com',
        password: 'password123',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4 mt-8">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.email && <div className="text-red-500 mt-2">{errors.email}</div>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.password && <div className="text-red-500 mt-2">{errors.password}</div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

