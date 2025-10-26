'use client';

import { useState } from 'react';
import { Scale } from 'lucide-react';

const MomentOfInertia = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('kilogram-square-meter');
  const [toUnit, setToUnit] = useState<string>('kilogram-square-centimeter');

  const momentOfInertiaUnits = [
    { value: 'kilogram-square-meter', label: 'kilogram square meter', symbol: 'kg·m²' },
    { value: 'kilogram-square-centimeter', label: 'kilogram square centimeter', symbol: 'kg·cm²' },
    { value: 'kilogram-square-millimeter', label: 'kilogram square millimeter', symbol: 'kg·mm²' },
    { value: 'gram-square-centimeter', label: 'gram square centimeter', symbol: 'g·cm²' },
    { value: 'gram-square-millimeter', label: 'gram square millimeter', symbol: 'g·mm²' },
    { value: 'kilogram-force-meter-square-second', label: 'kilogram-force meter square second', symbol: 'kgf·m·s²' },
    { value: 'kilogram-force-centimeter-square-second', label: 'kilogram-force centimeter square second', symbol: 'kgf·cm·s²' },
    { value: 'ounce-square-inch', label: 'ounce square inch [oz*in²]', symbol: 'oz·in²' },
    { value: 'ounce-force-inch-square-second', label: 'ounce-force inch sq. second', symbol: 'ozf·in·s²' },
    { value: 'pound-square-foot', label: 'pound square foot [lb*ft²]', symbol: 'lb·ft²' },
    { value: 'pound-force-foot-square-second', label: 'pound-force foot sq. second', symbol: 'lbf·ft·s²' },
    { value: 'pound-square-inch', label: 'pound square inch [lb*in²]', symbol: 'lb·in²' },
    { value: 'pound-force-inch-square-second', label: 'pound-force inch sq. second', symbol: 'lbf·in·s²' },
    { value: 'slug-square-foot', label: 'slug square foot [slug*ft²]', symbol: 'slug·ft²' }
  ];

  // Conversion factors to kilogram square meter (kg·m²)
  const conversionFactors: { [key: string]: number } = {
    'kilogram-square-meter': 1,
    'kilogram-square-centimeter': 0.0001,
    'kilogram-square-millimeter': 0.000001,
    'gram-square-centimeter': 0.0000001,
    'gram-square-millimeter': 0.0000000001,
    'kilogram-force-meter-square-second': 9.80665,
    'kilogram-force-centimeter-square-second': 0.000980665,
    'ounce-square-inch': 0.000018289536,
    'ounce-force-inch-square-second': 0.007061551959,
    'pound-square-foot': 0.04214011,
    'pound-force-foot-square-second': 1.35581794833,
    'pound-square-inch': 0.00029263965,
    'pound-force-inch-square-second': 0.009415418891,
    'slug-square-foot': 1.35581794833
  };

  const convertMomentOfInertia = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to kg·m² first
    const kgM2 = value * conversionFactors[from];
    // Convert from kg·m² to target unit
    return kgM2 / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertMomentOfInertia(numValue, fromUnit, toUnit);
      setToValue(converted.toExponential(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertMomentOfInertia(numValue, unit, toUnit);
      setToValue(converted.toExponential(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertMomentOfInertia(numValue, fromUnit, unit);
      setToValue(converted.toExponential(6));
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Moment of Inertia Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of moment of inertia measurement
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
                    {momentOfInertiaUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
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
                    {momentOfInertiaUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
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
                  <span className="font-semibold">{fromValue}</span> {momentOfInertiaUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-purple-600"> {toValue}</span> {momentOfInertiaUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Moment of Inertia Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kg·m² = 10,000 kg·cm²</li>
                  <li>1 kg·cm² = 100 kg·mm²</li>
                  <li>1 kg·cm² = 1,000 g·cm²</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 lb·ft² = 144 lb·in²</li>
                  <li>1 slug·ft² ≈ 32.17 lb·ft²</li>
                  <li>1 lb·ft² = 256 oz·in²</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric to Imperial</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kg·m² ≈ 23.73 lb·ft²</li>
                  <li>1 kg·cm² ≈ 0.0034 lb·ft²</li>
                  <li>1 kg·m² ≈ 0.738 slug·ft²</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentOfInertia;
