
"use client";
import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Calculator } from "lucide-react";
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

const Header = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
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
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Calculator className="h-8 w-8" />
            <h1 className="text-3xl font-bold">
              <span className="font-bold">AAA </span>
              <span className="font-normal"> CONVERTER</span>
            </h1>
          </Link>
          <nav className="flex items-center gap-4 flex-1 justify-end">
            <Link 
              href="/converters" 
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Unit Converters
            </Link>
            {/* Search bar at extreme right */}
            <div className="relative ml-4 w-64">
              <input
                ref={inputRef}
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Search calculators..."
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
                      className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                      onMouseDown={() => handleSelect(s.path)}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
