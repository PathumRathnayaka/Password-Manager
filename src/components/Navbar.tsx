import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Menu } from 'lucide-react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { FaUserCircle } from 'react-icons/fa';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useUser(); // Use useUser hook
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLoginSuccess = (credentialResponse: any) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded); // Use setUser from context
    navigate('/generator'); // Redirect to the generator page after login
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null); // Use setUser from context
    navigate('/'); // Redirect to the home page after logout
  };

  return (
      <nav className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Lock className="h-8 w-8" />
              <span className="font-bold text-xl">SecurePass</span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="hover:text-emerald-200 transition-colors">Home</Link>
              <a href="#about" className="hover:text-emerald-200 transition-colors">About</a>
              <Link to="/generator" className="hover:text-emerald-200 transition-colors">Generator</Link>

              {user ? (
                  <div className="flex items-center space-x-4">
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="h-8 w-8 rounded-full"
                    />
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
              ) : (
                  <div className="flex space-x-4">
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => console.log('Login Failed')}
                    />
                    <Link
                        to="/signup"
                        className="bg-white text-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-50 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
              )}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 hover:bg-emerald-700 rounded-md">Home</Link>
                <a href="#about" className="block px-3 py-2 hover:bg-emerald-700 rounded-md">About</a>
                <Link to="/generator" className="block px-3 py-2 hover:bg-emerald-700 rounded-md">Generator</Link>

                {user ? (
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <img
                            src={user.picture}
                            alt={user.name}
                            className="h-8 w-8 rounded-full"
                        />
                        <span>{user.name}</span>
                      </div>
                      <button
                          onClick={handleLogout}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2">
                      <GoogleLogin
                          onSuccess={handleLoginSuccess}
                          onError={() => console.log('Login Failed')}
                          useOneTap
                      />
                      <Link
                          to="/signup"
                          className="bg-white text-emerald-600 px-4 py-2 rounded-md text-center hover:bg-emerald-50 transition-colors"
                      >
                        Sign Up
                      </Link>
                    </div>
                )}
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;