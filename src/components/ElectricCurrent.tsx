'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const ElectricCurrent = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('ampere');
  const [toUnit, setToUnit] = useState<string>('milliampere');

  const currentUnits = [
    { value: 'ampere', label: 'Ampere [A]', symbol: 'A' },
    { value: 'kiloampere', label: 'Kiloampere [kA]', symbol: 'kA' },
    { value: 'milliampere', label: 'Milliampere [mA]', symbol: 'mA' },
    { value: 'microampere', label: 'Microampere [µA]', symbol: 'µA' },
    { value: 'nanoampere', label: 'Nanoampere [nA]', symbol: 'nA' },
    { value: 'picoampere', label: 'Picoampere [pA]', symbol: 'pA' },
    { value: 'abampere', label: 'Abampere [abA]', symbol: 'abA' },
    { value: 'statampere', label: 'Statampere [statA]', symbol: 'statA' },
    { value: 'ampere-hour-per-second', label: 'Ampere hour/second [Ah/s]', symbol: 'Ah/s' },
    { value: 'coulomb-per-second', label: 'Coulomb/second [C/s]', symbol: 'C/s' },
    { value: 'electron-per-second', label: 'Electron/second [e/s]', symbol: 'e/s' },
    { value: 'emu-per-second', label: 'EMU/second [EMU/s]', symbol: 'EMU/s' },
    { value: 'esu-per-second', label: 'ESU/second [ESU/s]', symbol: 'ESU/s' }
  ];

  // Conversion factors to Ampere (A)
  const conversionFactors: { [key: string]: number } = {
    'ampere': 1,
    'kiloampere': 1000,
    'milliampere': 0.001,
    'microampere': 1e-6,
    'nanoampere': 1e-9,
    'picoampere': 1e-12,
    'abampere': 10,
    'statampere': 3.335641e-10,
    'ampere-hour-per-second': 3600,
    'coulomb-per-second': 1,
    'electron-per-second': 1.602176634e-19,
    'emu-per-second': 10,
    'esu-per-second': 3.335641e-10
  };

  const convertCurrent = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to ampere first
    const amperes = value * conversionFactors[from];
    // Convert from ampere to target unit
    return amperes / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertCurrent(numValue, fromUnit, toUnit);
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
      const converted = convertCurrent(numValue, unit, toUnit);
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
      const converted = convertCurrent(numValue, fromUnit, unit);
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
              <h1 className="text-4xl font-bold text-gray-900">Electric Current Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of electric current measurement
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
                    {currentUnits.map((unit) => (
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
                    {currentUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {currentUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {currentUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Electric Current Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 A = 1,000 mA</li>
                  <li>1 kA = 1,000 A</li>
                  <li>1 µA = 0.001 mA</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">CGS Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 abA = 10 A</li>
                  <li>1 statA ≈ 3.336×10⁻¹⁰ A</li>
                  <li>1 A = 0.1 abA</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Other Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 A = 1 C/s</li>
                  <li>1 Ah/s = 3,600 A</li>
                  <li>1 e/s ≈ 1.602×10⁻¹⁹ A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricCurrent;