"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaCalculator,
  FaHome,
  FaRulerCombined,
  FaChevronDown,
  FaThermometerHalf,
  FaWater,
  FaEye,
  FaBolt,
  FaRadiation,
  FaCog,
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
        className={`flex items-center justify-between w-full p-2 sm:p-3 my-1 sm:my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
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
            size={16}
            style={{ minWidth: '16px' }}
          />
          <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium">{text}</span>
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
        <div className="pl-6 sm:pl-10 pt-1 pb-2 space-y-1">
          {children.map((child, index) => (
            <Link
              key={index}
              href={child.href}
              className={`block py-1 text-xs sm:text-sm transition-colors ${
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
      className={`flex items-center w-full p-2 sm:p-3 my-1 sm:my-1.5 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
        isActive
          ? "bg-blue-700 text-white"
          : "bg-white text-gray-800 hover:bg-gray-100"
      }`}
    >
      <Icon
        className={`${isActive ? "text-white" : "text-blue-600"}`}
        size={16}
        style={{ minWidth: '16px' }}
      />
      <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium">{text}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white p-4 md:p-5 flex flex-col overflow-y-auto">
      {/* Logo Section */}
      <div className="flex flex-col items-center pt-2 pb-4 sm:pb-8">
        <FaCalculator size={24} className="sm:size-[28px] mb-2 sm:mb-2.5" />
        <h1 className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          AAA Converter
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto">
        <SidebarItem icon={FaHome} text="Home" href="/" />

        {/* Basic & Common */}
        <SidebarDropdownItem
          icon={FaRulerCombined}
          text="Basic & Common"
          href="/basic"
        >
          {[
            { text: "Length Converter", href: "/length" },
            { text: "Weight and Mass Converter", href: "/weight" },
            { text: "Volume Converter", href: "/volume" },
            { text: "Temperature Converter", href: "/temperature" },
            { text: "Area Converter", href: "/area" },
            { text: "Pressure Converter", href: "/pressure" },
            { text: "Energy Converter", href: "/energy" },
            { text: "Volume (Dry) Converter", href: "/volume-dry" },
            { text: "Currency Converter", href: "/currency" },
            { text: "Case Converter", href: "/case" },
            { text: "Power Converter", href: "/power" },
            { text: "Force Converter", href: "/force" },
            { text: "Time Converter", href: "/time" },
            { text: "Speed Converter", href: "/speed" },
            { text: "Angle Converter", href: "/angle" },
            { text: "Fuel Consumption Converter", href: "/fuel-consumption" },
            { text: "Numbers Converter", href: "/number-converter" },
            { text: "Data Storage Converter", href: "/data-storage" },
            { text: "Velocity Angular Converter", href: "/velocity-angular" },
            { text: "Acceleration Converter", href: "/acceleration" },
            { text: "Acceleration Angular Converter", href: "/acceleration-angular" },
            { text: "Density Converter", href: "/density" },
            { text: "Specific Volume Converter", href: "/specific-volume" },
            { text: "Moment of Inertia Converter", href: "/moment-of-inertia" },
            { text: "Moment of Force Converter", href: "/moment-of-force" },
            { text: "Torque Converter", href: "/torque" },
            { text: "Fuel Efficiency (Mass) Converter", href: "/fuel-efficiency-mass" },
            { text: "Fuel Efficiency (Volume) Converter", href: "/fuel-efficiency-volume" },
            { text: "Temperature Interval Converter", href: "/temperature-interval" },
          ]}
        </SidebarDropdownItem>

        {/* Thermal & Heat */}
        <SidebarDropdownItem
          icon={FaThermometerHalf}
          text="Thermal & Heat"
          href="/thermal"
        >
          {[
            { text: "Thermal Expansion Converter", href: "/thermal-expansion" },
            { text: "Thermal Resistance Converter", href: "/thermal-resistance" },
            { text: "Thermal Conductivity Converter", href: "/thermal-conductivity" },
            { text: "Specific Heat Capacity Converter", href: "/specific-heat-capacity" },
            { text: "Heat Density Converter", href: "/heat-density" },
            { text: "Heat Flux Density Converter", href: "/heat-flux-density" },
            { text: "Heat Transfer Coefficient Converter", href: "/heat-transfer-coefficient" },
          ]}
        </SidebarDropdownItem>

        {/* Flow & Concentration */}
        <SidebarDropdownItem
          icon={FaWater}
          text="Flow & Concentration"
          href="/flow"
        >
          {[
            { text: "Flow Converter", href: "/flow" },
            { text: "Flow (Mass) Converter", href: "/flow-mass" },
            { text: "Flow (Molar) Converter", href: "/flow-molar" },
            { text: "Mass Flux Density Converter", href: "/mass-flux-density" },
            { text: "Concentration (Molar) Converter", href: "/concentration-molar" },
            { text: "Concentration (Solution) Converter", href: "/concentration-solution" },
          ]}
        </SidebarDropdownItem>

        {/* Viscosity & Surface */}
        <SidebarDropdownItem
          icon={FaWater}
          text="Viscosity & Surface"
          href="/viscosity"
        >
          {[
            { text: "Viscosity (Dynamic) Converter", href: "/viscosity-dynamic" },
            { text: "Viscosity (Kinematic) Converter", href: "/viscosity-kinematic" },
            { text: "Surface Tension Converter", href: "/surface-tension" },
            { text: "Permeability Converter", href: "/permeability" },
          ]}
        </SidebarDropdownItem>

        {/* Light & Optics */}
        <SidebarDropdownItem
          icon={FaEye}
          text="Light & Optics"
          href="/light"
        >
          {[
            { text: "Luminance Converter", href: "/luminance" },
            { text: "Luminous Intensity Converter", href: "/luminous-intensity" },
            { text: "Illumination Converter", href: "/illumination" },
            { text: "Digital Image Resolution Converter", href: "/image-resolution" },
            { text: "Frequency Wavelength Converter", href: "/frequency-wavelength" },
          ]}
        </SidebarDropdownItem>

        {/* Electrical & Magnetic */}
        <SidebarDropdownItem
          icon={FaBolt}
          text="Electrical & Magnetic"
          href="/electrical"
        >
          {[
            { text: "Electric Charge Converter", href: "/electric-charge" },
            { text: "Linear Charge Density Converter", href: "/linear-charge-density" },
            { text: "Surface Charge Density Converter", href: "/surface-charge-density" },
            { text: "Volume Charge Density Converter", href: "/volume-charge-density" },
            { text: "Electric Current Converter", href: "/electric-current" },
            { text: "Linear Current Density Converter", href: "/linear-current-density" },
            { text: "Surface Current Density Converter", href: "/surface-current-density" },
            { text: "Electric Field Strength Converter", href: "/electric-field-strength" },
            { text: "Electric Potential Converter", href: "/electric-potential" },
            { text: "Electric Resistance Converter", href: "/electric-resistance" },
            { text: "Electric Resistivity Converter", href: "/electric-resistivity" },
            { text: "Electric Conductance Converter", href: "/electric-conductance" },
            { text: "Electric Conductivity Converter", href: "/electric-conductivity" },
            { text: "Electrostatic Capacitance Converter", href: "/electrostatic-capacitance" },
            { text: "Inductance Converter", href: "/inductance" },
            { text: "Magnetomotive Force Converter", href: "/magnetomotive-force" },
            { text: "Magnetic Field Strength Converter", href: "/magnetic-field-strength" },
            { text: "Magnetic Flux Converter", href: "/magnetic-flux" },
            { text: "Magnetic Flux Density Converter", href: "/magnetic-flux-density" },
          ]}
        </SidebarDropdownItem>

        {/* Radiation & Sound */}
        <SidebarDropdownItem
          icon={FaRadiation}
          text="Radiation & Sound"
          href="/radiation"
        >
          {[
            { text: "Radiation Converter", href: "/radiation" },
            { text: "Radiation Activity Converter", href: "/radiation-activity" },
            { text: "Radiation Exposure Converter", href: "/radiation-exposure" },
            { text: "Radiation Absorbed Dose Converter", href: "/radiation-absorbed-dose" },
            { text: "Sound Converter", href: "/sound" },
          ]}
        </SidebarDropdownItem>

        {/* Miscellaneous */}
        <SidebarDropdownItem
          icon={FaCog}
          text="Miscellaneous"
          href="/misc"
        >
          {[
            { text: "Prefixes Converter", href: "/prefixes" },
            { text: "Data Transfer Converter", href: "/data-transfer" },
            { text: "Typography Converter", href: "/typography" },
            { text: "Volume Lumber Converter", href: "/volume-lumber" },
          ]}
        </SidebarDropdownItem>
      </nav>
    </aside>
  );
};

export default Sidebar;
