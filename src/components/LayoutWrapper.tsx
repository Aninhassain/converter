'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - only show on non-home pages */}
      {!isHomePage && <Sidebar />}
      
      {/* Main content */}
      <div className={`flex-1 ${!isHomePage ? 'ml-0' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
