import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Lock className="h-8 w-8" />
            <span className="font-bold text-xl">Password Gen</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-emerald-200 transition-colors">Home</Link>
            <a href="#about" className="hover:text-emerald-200 transition-colors">About</a>
            <Link to="/generator" className="hover:text-emerald-200 transition-colors">Generator</Link>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;