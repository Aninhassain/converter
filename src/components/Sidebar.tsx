'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Ruler, 
  Scale, 
  Thermometer, 
  Square, 
  Box, 
  Calculator,
  Menu,
  X,
  Home,
  ArrowRight
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      name: 'Length',
      href: '/length',
      icon: Ruler,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      name: 'Weight & Mass',
      href: '/weight',
      icon: Scale,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-50'
    },
    {
      name: 'Temperature',
      href: '/temperature',
      icon: Thermometer,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-50'
    },
    {
      name: 'Area',
      href: '/area',
      icon: Square,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-50'
    },
    {
      name: 'Volume',
      href: '/volume',
      icon: Box,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-50'
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:shadow-none
        `}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">ConverterHub</h2>
              <p className="text-sm text-gray-500">Unit Converters</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                  ${active 
                    ? `${item.bgColor} ${item.color} shadow-sm` 
                    : `text-gray-700 ${item.hoverColor} hover:text-gray-900`
                  }
                `}
              >
                <div className={`
                  p-2 rounded-lg transition-colors
                  ${active 
                    ? 'bg-white shadow-sm' 
                    : 'bg-gray-100 group-hover:bg-white group-hover:shadow-sm'
                  }
                `}>
                  <Icon className={`h-5 w-5 ${active ? item.color : 'text-gray-500 group-hover:' + item.color}`} />
                </div>
                <span className="font-medium flex-1">{item.name}</span>
                {active && (
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Made with ❤️ for the community
            </p>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/Aninhassain/converter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://github.com/Aninhassain/converter/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
              >
                Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
