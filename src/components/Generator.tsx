import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Passwords {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  fiverr: string;
  github: string;
  platform1: string;
  platform2: string;
  platform3: string;
  platform4: string;
  platform5: string;
  platform6: string;
}

const Generator = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nicNumber: '',
    birthday: '',
    uniqueWord: '',
    uniqueId: '',
  });

  const [passwords, setPasswords] = useState<Passwords | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePasswords = async () => {
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">Password Generator</h2>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NIC Number
              </label>
              <input
                type="text"
                name="nicNumber"
                value={formData.nicNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unique Word
              </label>
              <input
                type="text"
                name="uniqueWord"
                value={formData.uniqueWord}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unique ID
              </label>
              <input
                type="text"
                name="uniqueId"
                value={formData.uniqueId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={generatePasswords}
              className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
            >
              Generate Passwords
            </motion.button>
          </div>
        </form>

        {passwords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold mb-4">Generated Passwords:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(passwords).map(([platform, password]) => (
                <div key={platform} className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium capitalize">{platform}:</p>
                  <p className="font-mono text-emerald-600">{password}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Generator;