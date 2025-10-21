'use client';

import { useState } from 'react';
import { Square } from 'lucide-react';

const Area = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('square_meter');
  const [toUnit, setToUnit] = useState<string>('square_kilometer');

  const areaUnits = [
    { value: 'square_meter', label: 'Square Meter', symbol: 'm²' },
    { value: 'square_kilometer', label: 'Square Kilometer', symbol: 'km²' },
    { value: 'square_centimeter', label: 'Square Centimeter', symbol: 'cm²' },
    { value: 'square_millimeter', label: 'Square Millimeter', symbol: 'mm²' },
    { value: 'square_micrometer', label: 'Square Micrometer', symbol: 'μm²' },
    { value: 'hectare', label: 'Hectare', symbol: 'ha' },
    { value: 'square_mile', label: 'Square Mile', symbol: 'mi²' },
    { value: 'square_yard', label: 'Square Yard', symbol: 'yd²' },
    { value: 'square_foot', label: 'Square Foot', symbol: 'ft²' },
    { value: 'square_inch', label: 'Square Inch', symbol: 'in²' },
    { value: 'acre', label: 'Acre', symbol: 'ac' }
  ];

  // Conversion factors to square meters (base unit)
  const conversionFactors: { [key: string]: number } = {
    square_meter: 1,
    square_kilometer: 1000000,
    square_centimeter: 0.0001,
    square_millimeter: 0.000001,
    square_micrometer: 0.000000000001,
    hectare: 10000,
    square_mile: 2589988.110336,
    square_yard: 0.83612736,
    square_foot: 0.09290304,
    square_inch: 0.00064516,
    acre: 4046.8564224
  };

  const convertArea = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to square meters first
    const squareMeters = value * conversionFactors[from];
    // Convert from square meters to target unit
    return squareMeters / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertArea(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertArea(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertArea(numValue, fromUnit, unit);
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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Square className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Area Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of area measurement
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
                    {areaUnits.map((unit) => (
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
                    {areaUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {areaUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-purple-600"> {toValue}</span> {areaUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Area Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 km² = 1,000,000 m²</li>
                  <li>1 hectare = 10,000 m²</li>
                  <li>1 m² = 10,000 cm²</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 square mile = 640 acres</li>
                  <li>1 acre = 4,840 square yards</li>
                  <li>1 square yard = 9 square feet</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric to Imperial</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 m² ≈ 10.764 ft²</li>
                  <li>1 hectare ≈ 2.471 acres</li>
                  <li>1 km² ≈ 0.386 square miles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
