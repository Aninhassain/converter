
"use client";
import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Calculator, ChevronDown } from "lucide-react";
import Link from "next/link";


// List of calculators for search suggestions
const calculators = [
  { name: "Currency Converter", path: "/currency" },
  { name: "Unit Converters", path: "/converters" },
  { name: "Pressure", path: "/pressure" },
  { name: "Fuel Consumption", path: "/fuel-consumption" },
  { name: "Torque", path: "/torque" },
  { name: "Angle", path: "/angle" },
  { name: "Numbers Converter", path: "/number-converter" },
  { name: "Data Storage", path: "/data-storage" },
  { name: "Force Converter", path: "/force" },
  { name: "Case Converter", path: "/case" },
  { name: "Time Converter", path: "/time" },
  { name: "Dynamic Viscosity", path: "/viscosity-dynamic" },
  { name: "Kinematic Viscosity", path: "/viscosity-kinematic" },
  { name: "Surface Tension", path: "/surface-tension" },
  { name: "Permeability", path: "/permeability" },
  { name: "Luminance", path: "/luminance" },
  { name: "Luminous Intensity", path: "/luminous-intensity" },
  { name: "Illumination", path: "/illumination" },
  { name: "Image Resolution", path: "/image-resolution" },
  { name: "Frequency & Wavelength", path: "/frequency-wavelength" },
  { name: "Radiation Dose", path: "/radiation" },
  { name: "Radiation Activity", path: "/radiation-activity" },
  { name: "Radiation Exposure", path: "/radiation-exposure" },
  { name: "Absorbed Dose", path: "/radiation-absorbed-dose" },
  { name: "Sound Level", path: "/sound" },
  { name: "Electric Charge", path: "/electric-charge" },
  { name: "Linear Charge Density", path: "/linear-charge-density" },
  { name: "Surface Charge Density", path: "/surface-charge-density" },
  { name: "Volume Charge Density", path: "/volume-charge-density" },
  { name: "Electric Current", path: "/electric-current" },
  { name: "Linear Current Density", path: "/linear-current-density" },
  { name: "Surface Current Density", path: "/surface-current-density" },
  { name: "Electric Field Strength", path: "/electric-field-strength" },
  { name: "Electric Potential", path: "/electric-potential" },
  { name: "Electric Resistance", path: "/electric-resistance" },
  { name: "Electric Resistivity", path: "/electric-resistivity" },
  { name: "Electric Conductance", path: "/electric-conductance" },
  { name: "Electric Conductivity", path: "/electric-conductivity" },
  { name: "Electrostatic Capacitance", path: "/electrostatic-capacitance" },
  { name: "Inductance", path: "/inductance" },
  { name: "Magnetomotive Force", path: "/magnetomotive-force" },
  { name: "Magnetic Field Strength", path: "/magnetic-field-strength" },
  { name: "Magnetic Flux", path: "/magnetic-flux" },
  { name: "Magnetic Flux Density", path: "/magnetic-flux-density" },
  { name: "Length", path: "/length" },
  { name: "Weight & Mass", path: "/weight" },
  { name: "Temperature", path: "/temperature" },
  { name: "Area", path: "/area" },
  { name: "Volume", path: "/volume" },
  { name: "Moment of Inertia", path: "/moment-of-inertia" },
  { name: "Prefixes", path: "/prefixes" },
  { name: "Data Transfer", path: "/data-transfer" },
  { name: "Typography", path: "/typography" },
  { name: "Lumber Volume", path: "/volume-lumber" },
  { name: "Energy Converter", path: "/energy" },
  { name: "Power Converter", path: "/power" },
  { name: "Speed Converter", path: "/speed" },
  { name: "Angular Velocity", path: "/velocity-angular" },
  { name: "Acceleration", path: "/acceleration" },
  { name: "Angular Acceleration", path: "/acceleration-angular" },
  { name: "Density Converter", path: "/density" },
  { name: "Specific Volume", path: "/specific-volume" },
  { name: "Moment of Force (Torque)", path: "/moment-of-force" },
  { name: "Fuel Efficiency (Mass)", path: "/fuel-efficiency-mass" },
  { name: "Fuel Efficiency (Volume)", path: "/fuel-efficiency-volume" },
  { name: "Temperature Interval", path: "/temperature-interval" },
  { name: "Volume (Dry)", path: "/volume-dry" },
  { name: "Thermal Expansion", path: "/thermal-expansion" },
  { name: "Thermal Resistance", path: "/thermal-resistance" },
  { name: "Thermal Conductivity", path: "/thermal-conductivity" },
  { name: "Specific Heat Capacity", path: "/specific-heat-capacity" },
  { name: "Heat Density", path: "/heat-density" },
  { name: "Heat Flux Density", path: "/heat-flux-density" },
  { name: "Heat Transfer Coefficient", path: "/heat-transfer-coefficient" },
  { name: "Flow Converter", path: "/flow" },
  { name: "Flow (Mass) Converter", path: "/flow-mass" },
  { name: "Flow (Molar) Converter", path: "/flow-molar" },
  { name: "Mass Flux Density", path: "/mass-flux-density" },
  { name: "Concentration (Molar)", path: "/concentration-molar" },
  { name: "Concentration (Solution)", path: "/concentration-solution" },
];

// Converter categories
const converterCategories = [
  {
    title: "Basic & Common",
    items: [
      { name: "Length Converter", path: "/length" },
      { name: "Weight and Mass Converter", path: "/weight" },
      { name: "Volume Converter", path: "/volume" },
      { name: "Temperature Converter", path: "/temperature" },
      { name: "Area Converter", path: "/area" },
      { name: "Pressure Converter", path: "/pressure" },
      { name: "Energy Converter", path: "/energy" },
      { name: "Volume (Dry) Converter", path: "/volume-dry" },
      { name: "Currency Converter", path: "/currency" },
      { name: "Case Converter", path: "/case" },
      { name: "Power Converter", path: "/power" },
      { name: "Force Converter", path: "/force" },
      { name: "Time Converter", path: "/time" },
      { name: "Speed Converter", path: "/speed" },
      { name: "Angle Converter", path: "/angle" },
      { name: "Fuel Consumption Converter", path: "/fuel-consumption" },
      { name: "Numbers Converter", path: "/number-converter" },
      { name: "Data Storage Converter", path: "/data-storage" },
      { name: "Velocity Angular Converter", path: "/velocity-angular" },
      { name: "Acceleration Converter", path: "/acceleration" },
      { name: "Acceleration Angular Converter", path: "/acceleration-angular" },
      { name: "Density Converter", path: "/density" },
      { name: "Specific Volume Converter", path: "/specific-volume" },
      { name: "Moment of Inertia Converter", path: "/moment-of-inertia" },
      { name: "Moment of Force Converter", path: "/moment-of-force" },
      { name: "Torque Converter", path: "/torque" },
      { name: "Fuel Efficiency (Mass) Converter", path: "/fuel-efficiency-mass" },
      { name: "Fuel Efficiency (Volume) Converter", path: "/fuel-efficiency-volume" },
      { name: "Temperature Interval Converter", path: "/temperature-interval" },
    ]
  },
  {
    title: "Thermal & Heat",
    items: [
      { name: "Thermal Expansion Converter", path: "/thermal-expansion" },
      { name: "Thermal Resistance Converter", path: "/thermal-resistance" },
      { name: "Thermal Conductivity Converter", path: "/thermal-conductivity" },
      { name: "Specific Heat Capacity Converter", path: "/specific-heat-capacity" },
      { name: "Heat Density Converter", path: "/heat-density" },
      { name: "Heat Flux Density Converter", path: "/heat-flux-density" },
      { name: "Heat Transfer Coefficient Converter", path: "/heat-transfer-coefficient" },
    ]
  },
  {
    title: "Flow & Concentration",
    items: [
      { name: "Flow Converter", path: "/flow" },
      { name: "Flow (Mass) Converter", path: "/flow-mass" },
      { name: "Flow (Molar) Converter", path: "/flow-molar" },
      { name: "Mass Flux Density Converter", path: "/mass-flux-density" },
      { name: "Concentration (Molar) Converter", path: "/concentration-molar" },
      { name: "Concentration (Solution) Converter", path: "/concentration-solution" },
    ]
  },
  {
    title: "Viscosity & Surface",
    items: [
      { name: "Viscosity (Dynamic) Converter", path: "/viscosity-dynamic" },
      { name: "Viscosity (Kinematic) Converter", path: "/viscosity-kinematic" },
      { name: "Surface Tension Converter", path: "/surface-tension" },
      { name: "Permeability Converter", path: "/permeability" },
    ]
  },
  {
    title: "Light & Optics",
    items: [
      { name: "Luminance Converter", path: "/luminance" },
      { name: "Luminous Intensity Converter", path: "/luminous-intensity" },
      { name: "Illumination Converter", path: "/illumination" },
      { name: "Digital Image Resolution Converter", path: "/image-resolution" },
      { name: "Frequency Wavelength Converter", path: "/frequency-wavelength" },
    ]
  },
  {
    title: "Electrical & Magnetic",
    items: [
      { name: "Electric Charge Converter", path: "/electric-charge" },
      { name: "Linear Charge Density Converter", path: "/linear-charge-density" },
      { name: "Surface Charge Density Converter", path: "/surface-charge-density" },
      { name: "Volume Charge Density Converter", path: "/volume-charge-density" },
      { name: "Electric Current Converter", path: "/electric-current" },
      { name: "Linear Current Density Converter", path: "/linear-current-density" },
      { name: "Surface Current Density Converter", path: "/surface-current-density" },
      { name: "Electric Field Strength Converter", path: "/electric-field-strength" },
      { name: "Electric Potential Converter", path: "/electric-potential" },
      { name: "Electric Resistance Converter", path: "/electric-resistance" },
      { name: "Electric Resistivity Converter", path: "/electric-resistivity" },
      { name: "Electric Conductance Converter", path: "/electric-conductance" },
      { name: "Electric Conductivity Converter", path: "/electric-conductivity" },
      { name: "Electrostatic Capacitance Converter", path: "/electrostatic-capacitance" },
      { name: "Inductance Converter", path: "/inductance" },
      { name: "Magnetomotive Force Converter", path: "/magnetomotive-force" },
      { name: "Magnetic Field Strength Converter", path: "/magnetic-field-strength" },
      { name: "Magnetic Flux Converter", path: "/magnetic-flux" },
      { name: "Magnetic Flux Density Converter", path: "/magnetic-flux-density" },
    ]
  },
  {
    title: "Radiation & Sound",
    items: [
      { name: "Radiation Converter", path: "/radiation" },
      { name: "Radiation Activity Converter", path: "/radiation-activity" },
      { name: "Radiation Exposure Converter", path: "/radiation-exposure" },
      { name: "Radiation Absorbed Dose Converter", path: "/radiation-absorbed-dose" },
      { name: "Sound Converter", path: "/sound" },
    ]
  },
  {
    title: "Miscellaneous",
    items: [
      { name: "Prefixes Converter", path: "/prefixes" },
      { name: "Data Transfer Converter", path: "/data-transfer" },
      { name: "Typography Converter", path: "/typography" },
      { name: "Volume Lumber Converter", path: "/volume-lumber" },
    ]
  },
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const router = useRouter();
  const inputRef = useRef(null);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    return calculators.filter((c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search]);

  const handleSelect = (path: string) => {
    setSearch("");
    setShowSuggestions(false);
    router.push(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSelect(suggestions[0].path);
    }
    if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-6">
        {/* Top row: Logo */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
            <Calculator className="h-6 w-6 md:h-8 md:w-8" />
            <h1 className="text-xl md:text-3xl font-bold">
              <span className="font-bold">AAA </span>
              <span className="font-normal hidden sm:inline"> CONVERTER</span>
            </h1>
          </Link>
        </div>

        {/* Search bar and categories section */}
        <div className="space-y-4">
          {/* Search bar - centered */}
          <div className="flex justify-center">
            <div className="relative w-full md:w-96">
              <input
                ref={inputRef}
                type="text"
                className="w-full px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                placeholder="Search..."
                value={search}
                onChange={e => { setSearch(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onKeyDown={handleKeyDown}
                aria-label="Search calculators"
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 left-0 right-0 bg-white text-gray-900 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto border border-blue-200">
                  {suggestions.map((s) => (
                    <li
                      key={s.path}
                      className="px-3 md:px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm md:text-base"
                      onMouseDown={() => handleSelect(s.path)}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Category buttons with dropdowns */}
          {/* <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3"> */}
          {/* <div className="flex flex-nowrap items-center justify-center gap-1.5 md:gap-3 overflow-x-auto"> */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3">


            {converterCategories.map((category, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  className="flex items-center gap-1 px-1.5 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white text-sm md:text-base font-medium whitespace-nowrap"
                >
                  {category.title}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {openDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg z-50 min-w-max border border-blue-200">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.path}
                        className="block px-4 py-2 hover:bg-blue-50 text-sm md:text-base first:rounded-t-lg last:rounded-b-lg transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
