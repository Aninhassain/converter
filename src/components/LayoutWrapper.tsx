'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile menu button - only show on non-home pages */}
      {!isHomePage && (
        <>
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-16 sm:top-20 left-2 sm:left-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-lg shadow-lg"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar - hidden on mobile, shown as drawer when open */}
          <div className={`
            fixed md:static inset-y-0 left-0 z-40
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="relative h-full">
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 z-50 md:hidden bg-white text-gray-800 p-2 rounded-lg shadow-lg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              <Sidebar />
            </div>
          </div>
        </>
      )}
      
      {/* Main content */}
      <div className={`flex-1 w-full ${!isHomePage ? 'md:ml-0' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
