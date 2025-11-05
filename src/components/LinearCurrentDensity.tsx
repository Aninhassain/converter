'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const LinearCurrentDensity = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('ampere-per-meter');
  const [toUnit, setToUnit] = useState<string>('ampere-per-centimeter');

  const densityUnits = [
    { value: 'ampere-per-meter', label: 'Ampere/meter [A/m]', symbol: 'A/m' },
    { value: 'ampere-per-centimeter', label: 'Ampere/centimeter [A/cm]', symbol: 'A/cm' },
    { value: 'ampere-per-millimeter', label: 'Ampere/millimeter [A/mm]', symbol: 'A/mm' },
    { value: 'milliampere-per-meter', label: 'Milliampere/meter [mA/m]', symbol: 'mA/m' },
    { value: 'microampere-per-meter', label: 'Microampere/meter [µA/m]', symbol: 'µA/m' },
    { value: 'nanoampere-per-meter', label: 'Nanoampere/meter [nA/m]', symbol: 'nA/m' },
    { value: 'kiloampere-per-meter', label: 'Kiloampere/meter [kA/m]', symbol: 'kA/m' },
    { value: 'abampere-per-meter', label: 'Abampere/meter [abA/m]', symbol: 'abA/m' },
    { value: 'abampere-per-centimeter', label: 'Abampere/centimeter [abA/cm]', symbol: 'abA/cm' },
    { value: 'statampere-per-meter', label: 'Statampere/meter [statA/m]', symbol: 'statA/m' },
    { value: 'statampere-per-centimeter', label: 'Statampere/centimeter [statA/cm]', symbol: 'statA/cm' }
  ];

  // Conversion factors to Ampere/meter (A/m)
  const conversionFactors: { [key: string]: number } = {
    'ampere-per-meter': 1,
    'ampere-per-centimeter': 100,
    'ampere-per-millimeter': 1000,
    'milliampere-per-meter': 0.001,
    'microampere-per-meter': 1e-6,
    'nanoampere-per-meter': 1e-9,
    'kiloampere-per-meter': 1000,
    'abampere-per-meter': 10,
    'abampere-per-centimeter': 1000,
    'statampere-per-meter': 3.335641e-10,
    'statampere-per-centimeter': 3.335641e-8
  };

  const convertDensity = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to ampere/meter first
    const amperesPerMeter = value * conversionFactors[from];
    // Convert from ampere/meter to target unit
    return amperesPerMeter / conversionFactors[to];
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
      const absConverted = Math.abs(converted);
      if (absConverted < 0.000001 || absConverted > 1000000) {
        setToValue(converted.toExponential(6));
      } else {
        setToValue(converted.toFixed(6));
      }
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDensity(numValue, unit, toUnit);
      const absConverted = Math.abs(converted);
      if (absConverted < 0.000001 || absConverted > 1000000) {
        setToValue(converted.toExponential(6));
      } else {
        setToValue(converted.toFixed(6));
      }
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDensity(numValue, fromUnit, unit);
      const absConverted = Math.abs(converted);
      if (absConverted < 0.000001 || absConverted > 1000000) {
        setToValue(converted.toExponential(6));
      } else {
        setToValue(converted.toFixed(6));
      }
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
              <Zap className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Linear Current Density Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of linear current density measurement
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                  >
                    {densityUnits.map((unit) => (
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
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                  >
                    {densityUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {densityUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {densityUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Linear Current Density Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 A/m = 0.01 A/cm</li>
                  <li>1 A/m = 0.001 A/mm</li>
                  <li>1 kA/m = 1,000 A/m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">CGS Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 abA/m = 10 A/m</li>
                  <li>1 abA/cm = 1,000 A/m</li>
                  <li>1 A/m = 0.1 abA/m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Submultiples</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mA/m = 0.001 A/m</li>
                  <li>1 µA/m = 0.000001 A/m</li>
                  <li>1 nA/m = 0.000000001 A/m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearCurrentDensity;