import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse: any) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setUser(decoded);
        navigate('/generator'); // Redirect to the generator page after login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-emerald-700 mb-6">Login</h2>
                <p className="text-gray-700 mb-6">Please log in to continue.</p>
                <div className="flex justify-center">
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => console.log('Login Failed')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;