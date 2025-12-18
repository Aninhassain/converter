"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Ruler, Thermometer, Scale, Box, Gauge, Fuel, Wrench, RotateCcw, 
  Hash, HardDrive, Zap, Type, Clock, Droplets, Waves, Filter, 
  Sun, Flashlight, Lightbulb, Image, Radio, AlertTriangle, Activity, 
  ShieldAlert, Volume2, Flame, Beaker, Calculator, ChevronDown
} from "lucide-react";

// Calculator data organized by category
const calculatorCategories = [
  {
    title: "Basic & Common",
    calculators: [
      { name: "Length Converter", path: "/length", icon: Ruler, color: "blue" },
      { name: "Weight and Mass Converter", path: "/weight", icon: Scale, color: "purple" },
      { name: "Volume Converter", path: "/volume", icon: Box, color: "orange" },
      { name: "Temperature Converter", path: "/temperature", icon: Thermometer, color: "red" },
      { name: "Area Converter", path: "/area", icon: Ruler, color: "green" },
      { name: "Pressure Converter", path: "/pressure", icon: Gauge, color: "indigo" },
      { name: "Energy Converter", path: "/energy", icon: Zap, color: "orange" },
      { name: "Volume (Dry) Converter", path: "/volume-dry", icon: Box, color: "yellow" },
      { name: "Currency Converter", path: "/currency", icon: Calculator, color: "blue" },
      { name: "Case Converter", path: "/case", icon: Type, color: "orange" },
      { name: "Power Converter", path: "/power", icon: Zap, color: "amber" },
      { name: "Force Converter", path: "/force", icon: Zap, color: "orange" },
      { name: "Time Converter", path: "/time", icon: Clock, color: "violet" },
      { name: "Speed Converter", path: "/speed", icon: Gauge, color: "cyan" },
      { name: "Angle Converter", path: "/angle", icon: RotateCcw, color: "blue" },
      { name: "Fuel Consumption Converter", path: "/fuel-consumption", icon: Fuel, color: "green" },
      { name: "Numbers Converter", path: "/number-converter", icon: Hash, color: "green" },
      { name: "Data Storage Converter", path: "/data-storage", icon: HardDrive, color: "indigo" },
      { name: "Velocity Angular Converter", path: "/velocity-angular", icon: RotateCcw, color: "purple" },
      { name: "Acceleration Converter", path: "/acceleration", icon: Zap, color: "red" },
      { name: "Acceleration Angular Converter", path: "/acceleration-angular", icon: RotateCcw, color: "violet" },
      { name: "Density Converter", path: "/density", icon: Scale, color: "green" },
      { name: "Specific Volume Converter", path: "/specific-volume", icon: Box, color: "teal" },
      { name: "Moment of Inertia Converter", path: "/moment-of-inertia", icon: RotateCcw, color: "blue" },
      { name: "Moment of Force Converter", path: "/moment-of-force", icon: RotateCcw, color: "blue" },
      { name: "Torque Converter", path: "/torque", icon: Wrench, color: "purple" },
      { name: "Fuel Efficiency (Mass) Converter", path: "/fuel-efficiency-mass", icon: Fuel, color: "orange" },
      { name: "Fuel Efficiency (Volume) Converter", path: "/fuel-efficiency-volume", icon: Fuel, color: "amber" },
      { name: "Temperature Interval Converter", path: "/temperature-interval", icon: Thermometer, color: "red" },
    ]
  },
  {
    title: "Thermal & Heat",
    calculators: [
      { name: "Thermal Expansion Converter", path: "/thermal-expansion", icon: Thermometer, color: "orange" },
      { name: "Thermal Resistance Converter", path: "/thermal-resistance", icon: Thermometer, color: "amber" },
      { name: "Thermal Conductivity Converter", path: "/thermal-conductivity", icon: Thermometer, color: "red" },
      { name: "Specific Heat Capacity Converter", path: "/specific-heat-capacity", icon: Flame, color: "yellow" },
      { name: "Heat Density Converter", path: "/heat-density", icon: Flame, color: "orange" },
      { name: "Heat Flux Density Converter", path: "/heat-flux-density", icon: Sun, color: "yellow" },
      { name: "Heat Transfer Coefficient Converter", path: "/heat-transfer-coefficient", icon: Flame, color: "red" },
    ]
  },
  {
    title: "Flow & Concentration",
    calculators: [
      { name: "Flow Converter", path: "/flow", icon: Waves, color: "blue" },
      { name: "Flow (Mass) Converter", path: "/flow-mass", icon: Scale, color: "green" },
      { name: "Flow (Molar) Converter", path: "/flow-molar", icon: Zap, color: "purple" },
      { name: "Mass Flux Density Converter", path: "/mass-flux-density", icon: Droplets, color: "teal" },
      { name: "Concentration (Molar) Converter", path: "/concentration-molar", icon: Zap, color: "orange" },
      { name: "Concentration (Solution) Converter", path: "/concentration-solution", icon: Beaker, color: "pink" },
    ]
  },
  {
    title: "Viscosity & Surface",
    calculators: [
      { name: "Viscosity (Dynamic) Converter", path: "/viscosity-dynamic", icon: Droplets, color: "blue" },
      { name: "Viscosity (Kinematic) Converter", path: "/viscosity-kinematic", icon: Droplets, color: "indigo" },
      { name: "Surface Tension Converter", path: "/surface-tension", icon: Waves, color: "cyan" },
      { name: "Permeability Converter", path: "/permeability", icon: Filter, color: "teal" },
    ]
  },
  {
    title: "Light & Optics",
    calculators: [
      { name: "Luminance Converter", path: "/luminance", icon: Sun, color: "yellow" },
      { name: "Luminous Intensity Converter", path: "/luminous-intensity", icon: Flashlight, color: "amber" },
      { name: "Illumination Converter", path: "/illumination", icon: Lightbulb, color: "orange" },
      { name: "Digital Image Resolution Converter", path: "/image-resolution", icon: Image, color: "blue" },
      { name: "Frequency Wavelength Converter", path: "/frequency-wavelength", icon: Radio, color: "purple" },
    ]
  },
  {
    title: "Electrical & Magnetic",
    calculators: [
      { name: "Electric Charge Converter", path: "/electric-charge", icon: Zap, color: "yellow" },
      { name: "Linear Charge Density Converter", path: "/linear-charge-density", icon: Zap, color: "orange" },
      { name: "Surface Charge Density Converter", path: "/surface-charge-density", icon: Zap, color: "red" },
      { name: "Volume Charge Density Converter", path: "/volume-charge-density", icon: Zap, color: "violet" },
      { name: "Electric Current Converter", path: "/electric-current", icon: Zap, color: "blue" },
      { name: "Linear Current Density Converter", path: "/linear-current-density", icon: Zap, color: "indigo" },
      { name: "Surface Current Density Converter", path: "/surface-current-density", icon: Zap, color: "purple" },
      { name: "Electric Field Strength Converter", path: "/electric-field-strength", icon: Zap, color: "teal" },
      { name: "Electric Potential Converter", path: "/electric-potential", icon: Zap, color: "cyan" },
      { name: "Electric Resistance Converter", path: "/electric-resistance", icon: Zap, color: "pink" },
      { name: "Electric Resistivity Converter", path: "/electric-resistivity", icon: Zap, color: "pink" },
      { name: "Electric Conductance Converter", path: "/electric-conductance", icon: Zap, color: "yellow" },
      { name: "Electric Conductivity Converter", path: "/electric-conductivity", icon: Filter, color: "teal" },
      { name: "Electrostatic Capacitance Converter", path: "/electrostatic-capacitance", icon: ShieldAlert, color: "violet" },
      { name: "Inductance Converter", path: "/inductance", icon: RotateCcw, color: "indigo" },
      { name: "Magnetomotive Force Converter", path: "/magnetomotive-force", icon: Activity, color: "yellow" },
      { name: "Magnetic Field Strength Converter", path: "/magnetic-field-strength", icon: Sun, color: "cyan" },
      { name: "Magnetic Flux Converter", path: "/magnetic-flux", icon: Waves, color: "pink" },
      { name: "Magnetic Flux Density Converter", path: "/magnetic-flux-density", icon: Gauge, color: "cyan" },
    ]
  },
  {
    title: "Radiation & Sound",
    calculators: [
      { name: "Radiation Converter", path: "/radiation", icon: Zap, color: "yellow" },
      { name: "Radiation Activity Converter", path: "/radiation-activity", icon: Activity, color: "orange" },
      { name: "Radiation Exposure Converter", path: "/radiation-exposure", icon: AlertTriangle, color: "red" },
      { name: "Radiation Absorbed Dose Converter", path: "/radiation-absorbed-dose", icon: ShieldAlert, color: "violet" },
      { name: "Sound Converter", path: "/sound", icon: Volume2, color: "blue" },
    ]
  },
  {
    title: "Miscellaneous",
    calculators: [
      { name: "Prefixes Converter", path: "/prefixes", icon: Hash, color: "indigo" },
      { name: "Data Transfer Converter", path: "/data-transfer", icon: HardDrive, color: "sky" },
      { name: "Typography Converter", path: "/typography", icon: Type, color: "rose" },
      { name: "Volume Lumber Converter", path: "/volume-lumber", icon: Box, color: "green" },
    ]
  },
];

const colorClasses: { [key: string]: string } = {
  blue: "text-blue-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
  red: "text-red-600",
  green: "text-green-600",
  indigo: "text-indigo-600",
  yellow: "text-yellow-600",
  amber: "text-amber-600",
  violet: "text-violet-600",
  cyan: "text-cyan-600",
  teal: "text-teal-600",
  pink: "text-pink-600",
  sky: "text-sky-600",
  rose: "text-rose-600",
};

export default function Home() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setOpenCategoryIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background layers inspired by provided artwork */}
      <div aria-hidden="true" className="absolute inset-0 starry-base" />
      <div aria-hidden="true" className="absolute inset-0 star-field star-field-primary" />
      <div aria-hidden="true" className="absolute inset-0 star-field star-field-secondary" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 horizon-glow" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 city-grid" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 swirl-layer swirl-layer-left" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 swirl-layer swirl-layer-right" />

      <div className="relative z-10">
        <div className="w-full px-2 md:px-4 py-8 md:py-14 mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10 md:mb-16 space-y-5">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight px-4 text-white drop-shadow-glow">
                Welcome to{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text animate-pan">
                  AAA Converter
                </span>
              </h1>
              <p className="text-base md:text-xl text-blue-100/90 max-w-2xl mx-auto px-4">
                Your comprehensive platform for all types of unit conversions. From length and weight to temperature
                and currency conversions.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="space-y-6 md:space-y-12 px-2 md:px-0">
              {calculatorCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl shadow-blue-900/30 p-4 md:p-8 border border-white/40 animate-rise"
                  style={{ animationDelay: `${categoryIndex * 120}ms` }}
                >
                  <div className="flex items-center justify-between gap-4 mb-3 md:mb-4 pb-2 border-b border-blue-200/60">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <button
                      type="button"
                      aria-label={`Toggle ${category.title}`}
                      onClick={() => toggleCategory(categoryIndex)}
                      className="rounded-full border border-blue-200 bg-white/60 p-2 text-blue-600 transition-transform duration-300 hover:bg-blue-50"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openCategoryIndex === categoryIndex ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 transition-all duration-500 ${
                      openCategoryIndex === categoryIndex
                        ? "max-h-[2000px] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
                  >
                    {category.calculators.map((calculator, index) => {
                      const IconComponent = calculator.icon;
                      const iconColorClass = colorClasses[calculator.color] || "text-blue-600";
                      return (
                        <Link
                          key={index}
                          href={calculator.path}
                          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/60 border border-gray-200/70"
                        >
                          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-blue-50/80 via-transparent to-purple-50/60 hover:opacity-100" />
                          <div className="relative flex flex-col items-center text-center">
                            <IconComponent className={`h-8 w-8 md:h-10 md:w-10 ${iconColorClass} mb-2 md:mb-3`} />
                            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 md:mb-2 leading-tight">
                              {calculator.name}
                            </h3>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
