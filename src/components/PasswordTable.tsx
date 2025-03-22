import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordTableProps {
    passwords: { [key: string]: string };
    selectedPlatforms: string[];
}

const PasswordTable: React.FC<PasswordTableProps> = ({ passwords, selectedPlatforms }) => {
    const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});

    const togglePasswordVisibility = (platform: string) => {
        setShowPasswords((prev) => ({
            ...prev,
            [platform]: !prev[platform],
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6">Generated Passwords</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Platform</th>
                        <th className="px-4 py-2 border-b">Password</th>
                        <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(passwords)
                        .filter(([platform]) => selectedPlatforms.includes(platform))
                        .map(([platform, password]) => (
                            <tr key={platform} className="text-center">
                                <td className="px-4 py-2 border-b capitalize">{platform}</td>
                                <td className="px-4 py-2 border-b font-mono">
                                    {showPasswords[platform] ? password : '••••••••'}
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <button
                                        onClick={() => togglePasswordVisibility(platform)}
                                        className="text-emerald-600 hover:text-emerald-700"
                                    >
                                        {showPasswords[platform] ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PasswordTable;