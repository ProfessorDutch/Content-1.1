import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, User, Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-accent' : 'text-neutral';
  };

  return (
    <nav className="bg-white shadow-sm border-b border-neutral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary">MustardSeed</span>
                <span className="text-xs text-neutral">Free Learning Platform</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/"
              className={`${isActive('/')} hover:text-accent px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/5 transition flex items-center space-x-2`}
            >
              <Home className="h-4 w-4 text-accent" />
              <span>Home</span>
            </Link>
            <Link 
              to="/tests"
              className={`${isActive('/tests')} hover:text-accent px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/5 transition`}
            >
              Learning Modules
            </Link>
            <Link 
              to="/course/rent-101"
              className={`${isActive('/course')} hover:text-accent px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/5 transition`}
            >
              Practice Tests
            </Link>
            <button className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition shadow-sm">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:bg-accent/5 p-2 rounded-md transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={`flex items-center space-x-2 ${isActive('/')} hover:text-accent px-3 py-2 rounded-md text-base font-medium hover:bg-accent/5 transition`}
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4 text-accent" />
                <span>Home</span>
              </Link>
              <Link
                to="/tests"
                className={`block ${isActive('/tests')} hover:text-accent px-3 py-2 rounded-md text-base font-medium hover:bg-accent/5 transition`}
                onClick={() => setIsOpen(false)}
              >
                Learning Modules
              </Link>
              <Link
                to="/course/rent-101"
                className={`block ${isActive('/course')} hover:text-accent px-3 py-2 rounded-md text-base font-medium hover:bg-accent/5 transition`}
                onClick={() => setIsOpen(false)}
              >
                Practice Tests
              </Link>
              <button className="w-full flex items-center justify-center space-x-2 bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition shadow-sm">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}