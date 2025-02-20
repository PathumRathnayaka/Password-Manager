import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Key, Lock } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import heroBackgroundMobile from '../assets/hero-backgroundMobilesize.jpg';
import featureImage from '../assets/about.png';
import socialMediaImage from '../assets/socialimage.jpg';
import facebookIcon from '../assets/icons8-facebook.svg';
import linkedinIcon from '../assets/icons8-linkedin (3).svg';
import instagramIcon from '../assets/icons8-instagram.svg';
import tiktokIcon from '../assets/icons8-tiktok.svg';
import twitterIcon from '../assets/icons8-x.svg';

const Home = () => {
  const navigate = useNavigate();

  return (
      <div className="flex-grow">
        {/* Hero Section */}
        <section
            className="relative text-white py-20 overflow-hidden"
            style={{
              backgroundImage: `url(${heroBackground})`, // Default desktop background
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
          {/* Mobile Background Image */}
          <style>
            {`
            @media (max-width: 640px) {
              .hero-section {
                background-image: url(${heroBackgroundMobile}) !important;
              }
            }
          `}
          </style>
          {/* Green Overlay for Shadow Effect */}
          <div className="absolute inset-0 bg-emerald-900/50"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Secure Your Digital Life
              </h1>
              <p className="text-xl mb-8">
                Generate unique, strong passwords for all your accounts
              </p>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/generator')}
                  className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* New Feature Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side: Summary */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-800">
                  Why Our Password Manager is Different
                </h2>
                <p className="text-gray-600 text-lg">
                  Unlike other password managers, our website uses advanced algorithms to generate strong,
                  highly secure passwords. We prioritize your privacy by <strong>not saving</strong> any of your
                  passwords. This ensures that your data remains completely secure and under your control.
                </p>
                <p className="text-gray-600 text-lg">
                  Whether you need a password for social media, banking, or any other account, our tool
                  generates unique and complex passwords that are virtually impossible to crack.
                </p>
              </motion.div>

              {/* Right Side: Image */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
              >
                <img
                    src={featureImage}
                    alt="Secure Password Generation"
                    className="rounded-lg shadow-lg w-full max-w-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 bg-emerald-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side: Image */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
              >
                <img
                    src={socialMediaImage}
                    alt="Social Media Usage"
                    className="rounded-lg w-full max-w-md"
                />
              </motion.div>

              {/* Right Side: Social Media Icons */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">Connect with Social Media</h2>
                <p className="text-white text-lg">
                  Social media platforms help you stay connected, informed, and engaged.
                  Use them wisely to share, interact, and grow your network.
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                  {/* Facebook Icon */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="w-16 h-16 hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </a>
                  {/* LinkedIn Icon */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="w-16 h-16 hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </a>
                  {/* Instagram Icon */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-16 h-16 hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </a>
                  {/* Tiktok Icon */}
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={tiktokIcon}
                        alt="Tiktok"
                        className="w-16 h-16 hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </a>
                  {/* Twitter Icon */}
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={twitterIcon}
                        alt="Twitter"
                        className="w-16 h-16 hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </a>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose SecurePass?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Generation</h3>
                <p className="text-gray-600">
                  Advanced algorithms ensure your passwords are truly random and secure
                </p>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Key className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unique Patterns</h3>
                <p className="text-gray-600">
                  Create memorable yet secure passwords based on your personal data
                </p>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Lock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your data never leaves your device - complete privacy guaranteed
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;