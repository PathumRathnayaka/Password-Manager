import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import PasswordTable from './PasswordTable';
import { useUser } from '../context/UserContext';

interface Passwords {
  [key: string]: string;
}

const Generator = () => {
  const { user } = useUser();
  const navigate = useNavigate(); // Use useNavigate for redirection
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nicNumber: '',
    birthday: '',
    uniqueWord: '',
    uniqueId: '',
  });

  const [passwords, setPasswords] = useState<Passwords | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const platforms = [
    'facebook',
    'instagram',
    'linkedin',
    'tiktok',
    'fiverr',
    'github',
    'platform1',
    'platform2',
    'platform3',
    'platform4',
    'platform5',
    'platform6',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
        prev.includes(platform)
            ? prev.filter((p) => p !== platform)
            : [...prev, platform]
    );
  };

  const generatePasswords = async () => {
    if (!user) {
      setShowLoginPopup(true); // Show login popup if user is not logged in
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/generate-passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPasswords(data);
    } catch (error) {
      console.error('Error generating passwords:', error);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Two Sections: User Details and Platform Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: User Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-6">User Details</h2>
              <form className="space-y-6">
                {[
                  { label: 'First Name', name: 'firstName' },
                  { label: 'Last Name', name: 'lastName' },
                  { label: 'NIC Number', name: 'nicNumber' },
                  { label: 'Birthday', name: 'birthday', type: 'date' },
                  { label: 'Unique Word', name: 'uniqueWord' },
                  { label: 'Unique ID', name: 'uniqueId' },
                ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          required
                      />
                    </div>
                ))}
              </form>
            </div>

            {/* Right Side: Platform Selection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-6">Select Platforms</h2>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                    <label key={platform} className="flex items-center space-x-2">
                      <input
                          type="checkbox"
                          checked={selectedPlatforms.includes(platform)}
                          onChange={() => handlePlatformToggle(platform)}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <span className="capitalize">{platform}</span>
                    </label>
                ))}
              </div>

              <div className="mt-6 text-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={generatePasswords}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
                    disabled={selectedPlatforms.length === 0}
                >
                  Generate Passwords
                </motion.button>
              </div>
            </div>
          </div>

          {/* Separate Table Component */}
          {passwords && selectedPlatforms.length > 0 && (
              <div className="mt-12">
                <PasswordTable passwords={passwords} selectedPlatforms={selectedPlatforms} />
              </div>
          )}
        </div>

        {/* Login Popup */}
        {showLoginPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-emerald-700 mb-6">Login Required</h2>
                <p className="text-gray-700 mb-6">
                  You need to log in to generate passwords. Please log in to continue.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                      onClick={() => setShowLoginPopup(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                  <button
                      onClick={() => navigate('/login')} // Redirect to the login page
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Generator;