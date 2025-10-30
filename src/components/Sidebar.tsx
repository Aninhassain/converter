// "use client"; // This is necessary for Next.js App Router to use state

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {
//   FaCalculator,
//   FaHome,
//   FaThermometerHalf,
//   FaRulerCombined,
//   FaWeightHanging,
//   FaRulerHorizontal,
//   FaChevronDown,
//   FaSquare,
//   FaCube,
//   FaDollarSign,
//   FaTachometerAlt,
//   FaBalanceScale
// } from 'react-icons/fa';

// // Type definitions
// interface ChildItem {
//   text: string;
//   href: string;
// }

// interface SidebarDropdownItemProps {
//   icon: React.ComponentType<{ className?: string; size?: number }>;
//   text: string;
//   href: string;
//   children?: ChildItem[];
// }

// interface SidebarItemProps {
//   icon: React.ComponentType<{ className?: string; size?: number }>;
//   text: string;
//   href: string;
// }

// // This is a sub-component to keep our code clean (DRY)
// // It manages its own open/closed state
// const SidebarDropdownItem = ({ icon: Icon, text, href, children }: SidebarDropdownItemProps & { children?: ChildItem[] }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const isActive = pathname === href || (children && children.some((child: ChildItem) => pathname === child.href));

//   return (
//     <div className="w-full">
//       {/* The main button to toggle the dropdown */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center justify-between w-full p-3 my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
//           isActive 
//             ? 'bg-blue-700 text-white' 
//             : 'bg-white text-gray-800 hover:bg-gray-100'
//         }`}
//       >
//         <div className="flex items-center">
//           <Icon className={isActive ? 'text-white' : 'text-blue-600'} size={18} />
//           <span className="ml-4 text-sm font-medium">{text}</span>
//         </div>
//         <FaChevronDown
//           className={`text-gray-500 transition-transform duration-200 ${
//             isOpen ? 'rotate-180' : ''
//           }`}
//           size={14}
//         />
//       </button>

//       {/* The collapsible sub-section */}
//       {isOpen && children && (
//         <div className="pl-10 pt-1 pb-2 space-y-1">
//           {children.map((child: ChildItem, index: number) => (
//             <Link
//               key={index}
//               href={child.href}
//               className={`block py-1 text-sm transition-colors ${
//                 pathname === child.href 
//                   ? 'text-white font-medium' 
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               {child.text}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Simple navigation item without dropdown
// const SidebarItem = ({ icon: Icon, text, href }: SidebarItemProps) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={`flex items-center w-full p-3 my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
//         isActive 
//           ? 'bg-blue-700 text-white' 
//           : 'bg-white text-gray-800 hover:bg-gray-100'
//       }`}
//     >
//       <Icon className={isActive ? 'text-white' : 'text-blue-600'} size={18} />
//       <span className="ml-4 text-sm font-medium">{text}</span>
//     </Link>
//   );
// };

// // The main Sidebar component
// const Sidebar = () => {
//   return (
//     <aside className="w-64 h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white p-5 flex flex-col">
      
//       {/* 1. Header/Logo */}
//       <div className="flex flex-col items-center pt-2 pb-8">
//         <FaCalculator size={28} className="mb-2.5" />
//         <h1 className="text-sm font-semibold tracking-widest uppercase">
//           AAA Converter
//         </h1>
//       </div>

//       {/* 2. Navigation Menu */}
//       <nav className="flex-grow">
//         <SidebarItem icon={FaHome} text="Home" href="/" />
        
//         <SidebarDropdownItem 
//           icon={FaRulerCombined} 
//           text="Unit Converters" 
//           href="/converters"
//         >
//           {[
//             { text: "Length", href: "/length" },
//             { text: "Weight & Mass", href: "/weight" },
//             { text: "Temperature", href: "/temperature" },
//             { text: "Area", href: "/area" },
//             { text: "Volume", href: "/volume" },
//             { text: "Pressure", href: "/pressure" },
//             { text: "Currency", href: "/currency" },
//             { text: "Moment of Inertia", href: "/moment-of-inertia" }
//           ]}
//         </SidebarDropdownItem>
        
//         <SidebarItem icon={FaThermometerHalf} text="Temperature" href="/temperature" />
//         <SidebarItem icon={FaRulerHorizontal} text="Length" href="/length" />
//         <SidebarItem icon={FaWeightHanging} text="Weight & Mass" href="/weight" />
//         <SidebarItem icon={FaSquare} text="Area" href="/area" />
//         <SidebarItem icon={FaCube} text="Volume" href="/volume" />
//         <SidebarItem icon={FaTachometerAlt} text="Pressure" href="/pressure" />
//         <SidebarItem icon={FaDollarSign} text="Currency" href="/currency" />
//         <SidebarItem icon={FaBalanceScale} text="Moment of Inertia" href="/moment-of-inertia" />
//       </nav>

//     </aside>
//   );
// };

// export default Sidebar;
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaCalculator,
  FaHome,
  FaThermometerHalf,
  FaRulerCombined,
  FaWeightHanging,
  FaRulerHorizontal,
  FaChevronDown,
  FaSquare,
  FaCube,
  FaDollarSign,
  FaTachometerAlt,
  FaBalanceScale,
  FaBolt,
  FaKeyboard,
  FaVial,
  FaClock,
  FaTint,
  FaWater
} from "react-icons/fa";

interface ChildItem {
  text: string;
  href: string;
}

interface SidebarDropdownItemProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  text: string;
  href: string;
  children: ChildItem[];
}

interface SidebarItemProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  text: string;
  href: string;
}

const SidebarDropdownItem = ({
  icon: Icon,
  text,
  href,
  children,
}: SidebarDropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    children.some((child: ChildItem) => pathname === child.href);

  return (
    <div className="w-full">
      {/* Dropdown Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-3 my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          isActive
            ? "bg-blue-700 text-white"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center">
          <Icon
            className={`${
              isActive ? "text-white" : "text-blue-600"
            } transition-colors`}
            size={18}
          />
          <span className="ml-4 text-sm font-medium">{text}</span>
        </div>
        <FaChevronDown
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={14}
        />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="pl-10 pt-1 pb-2 space-y-1">
          {children.map((child, index) => (
            <Link
              key={index}
              href={child.href}
              className={`block py-1 text-sm transition-colors ${
                pathname === child.href
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-200"
              }`}
            >
              {child.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ icon: Icon, text, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center w-full p-3 my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
        isActive
          ? "bg-blue-700 text-white"
          : "bg-white text-gray-800 hover:bg-gray-100"
      }`}
    >
      <Icon
        className={`${isActive ? "text-white" : "text-blue-600"}`}
        size={18}
      />
      <span className="ml-4 text-sm font-medium">{text}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white p-5 flex flex-col">
      {/* Logo Section */}
      <div className="flex flex-col items-center pt-2 pb-8">
        <FaCalculator size={28} className="mb-2.5" />
        <h1 className="text-sm font-semibold tracking-widest uppercase">
          AAA Converter
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto">
        <SidebarItem icon={FaHome} text="Home" href="/" />

        <SidebarDropdownItem
          icon={FaRulerCombined}
          text="Unit Converters"
          href="/converters"
        >
          {[
            { text: "Length", href: "/length" },
            { text: "Weight & Mass", href: "/weight" },
            { text: "Temperature", href: "/temperature" },
            { text: "Area", href: "/area" },
            { text: "Volume", href: "/volume" },
            { text: "Pressure", href: "/pressure" },
            { text: "Force", href: "/force" },
            { text: "Time", href: "/time" },
            { text: "Currency", href: "/currency" },
            { text: "Moment of Inertia", href: "/moment-of-inertia" },
          ]}
        </SidebarDropdownItem>

        {/* Optional individual links */}
        <SidebarItem icon={FaThermometerHalf} text="Temperature" href="/temperature" />
        <SidebarItem icon={FaRulerHorizontal} text="Length" href="/length" />
        <SidebarItem icon={FaWeightHanging} text="Weight & Mass" href="/weight" />
        <SidebarItem icon={FaSquare} text="Area" href="/area" />
        <SidebarItem icon={FaCube} text="Volume" href="/volume" />
        <SidebarItem icon={FaTachometerAlt} text="Pressure" href="/pressure" />
        <SidebarItem icon={FaBolt} text="Force" href="/force" />
        <SidebarItem icon={FaDollarSign} text="Currency" href="/currency" />
        <SidebarItem icon={FaBalanceScale} text="Moment of Inertia" href="/moment-of-inertia" />
        <SidebarItem icon={FaClock} text="Time" href="/time" />

        <SidebarDropdownItem
          icon={FaWater}
          text="Viscosity & Surface"
          href="/viscosity"
        >
          {[
            { text: "Dynamic Viscosity", href: "/viscosity-dynamic" },
            { text: "Kinematic Viscosity", href: "/viscosity-kinematic" },
            { text: "Surface Tension", href: "/surface-tension" },
            { text: "Permeability", href: "/permeability" },
          ]}
        </SidebarDropdownItem>
      </nav>
    </aside>
  );
};

export default Sidebar;

