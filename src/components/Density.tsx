'use client';

import { useState } from 'react';
import { Droplets } from 'lucide-react';

const Density = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('g_cm3');
  const [toUnit, setToUnit] = useState<string>('kg_m3');

  const densityUnits = [
    { value: 'g_cm3', label: 'Grams per cubic centimeter', symbol: 'g/cm³' },
    { value: 'kg_m3', label: 'Kilograms per cubic meter', symbol: 'kg/m³' },
    { value: 'kg_l', label: 'Kilograms per liter', symbol: 'kg/L' },
    { value: 'g_ml', label: 'Grams per milliliter', symbol: 'g/mL' },
    { value: 'lb_ft3', label: 'Pounds per cubic foot', symbol: 'lb/ft³' },
    { value: 'lb_in3', label: 'Pounds per cubic inch', symbol: 'lb/in³' },
  ];

  // Conversion factors to kg/m³ (base unit)
  const conversionFactors: { [key: string]: number } = {
    g_cm3: 1000,
    kg_m3: 1,
    kg_l: 1000,
    g_ml: 1000,
    lb_ft3: 16.0185,
    lb_in3: 27679.9,
  };

  const convertDensity = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    const baseValue = value * conversionFactors[from];
    return baseValue / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertDensity(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDensity(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDensity(numValue, fromUnit, unit);
      setToValue(converted.toFixed(6));
    }
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    const tempValue = fromValue;
    
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
    setToValue(tempValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Density Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of density.
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* From Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From:
                </label>
                <div className="space-y-3">
                  <input
                    type="number"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Enter value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {densityUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label} ({unit.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center lg:order-3">
                <button
                  onClick={swapUnits}
                  className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  title="Swap units"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </button>
              </div>

              {/* To Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To:
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={toValue}
                    readOnly
                    placeholder="Result will appear here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg text-gray-700"
                  />
                  <select
                    value={toUnit}
                    onChange={(e) => handleToUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {densityUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label} ({unit.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && (
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {densityUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-purple-600"> {toValue}</span> {densityUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Density Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Water</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>The density of water is approximately 1 g/cm³ or 1000 kg/m³.</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Air</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>The density of dry air at sea level is about 1.225 kg/m³.</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-.4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Gold</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>The density of gold is about 19.3 g/cm³, making it one of the densest metals.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Density;
