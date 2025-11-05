'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const ElectricFieldStrength = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('volt-per-meter');
  const [toUnit, setToUnit] = useState<string>('newton-per-coulomb');

  const fieldUnits = [
    { value: 'volt-per-meter', label: 'Volt/meter [V/m]', symbol: 'V/m' },
    { value: 'kilovolt-per-meter', label: 'Kilovolt/meter [kV/m]', symbol: 'kV/m' },
    { value: 'volt-per-centimeter', label: 'Volt/centimeter [V/cm]', symbol: 'V/cm' },
    { value: 'millivolt-per-meter', label: 'Millivolt/meter [mV/m]', symbol: 'mV/m' },
    { value: 'microvolt-per-meter', label: 'Microvolt/meter [µV/m]', symbol: 'µV/m' },
    { value: 'newton-per-coulomb', label: 'Newton/coulomb [N/C]', symbol: 'N/C' },
    { value: 'dyne-per-esu', label: 'Dyne/esu [dyn/esu]', symbol: 'dyn/esu' },
    { value: 'statvolt-per-centimeter', label: 'Statvolt/centimeter [statV/cm]', symbol: 'statV/cm' },
    { value: 'statvolt-per-meter', label: 'Statvolt/meter [statV/m]', symbol: 'statV/m' },
    { value: 'abvolt-per-centimeter', label: 'Abvolt/centimeter [abV/cm]', symbol: 'abV/cm' },
    { value: 'abvolt-per-meter', label: 'Abvolt/meter [abV/m]', symbol: 'abV/m' }
  ];

  // Conversion factors to Volt/meter (V/m)
  const conversionFactors: { [key: string]: number } = {
    'volt-per-meter': 1,
    'kilovolt-per-meter': 1000,
    'volt-per-centimeter': 100,
    'millivolt-per-meter': 0.001,
    'microvolt-per-meter': 1e-6,
    'newton-per-coulomb': 1,
    'dyne-per-esu': 29979.2458,
    'statvolt-per-centimeter': 29979.2458,
    'statvolt-per-meter': 299.792458,
    'abvolt-per-centimeter': 1e-6,
    'abvolt-per-meter': 1e-8
  };

  const convertField = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to volt/meter first
    const voltsPerMeter = value * conversionFactors[from];
    // Convert from volt/meter to target unit
    return voltsPerMeter / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertField(numValue, fromUnit, toUnit);
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
      const converted = convertField(numValue, unit, toUnit);
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
      const converted = convertField(numValue, fromUnit, unit);
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
              <h1 className="text-4xl font-bold text-gray-900">Electric Field Strength Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of electric field strength measurement
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
                    {fieldUnits.map((unit) => (
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
                    {fieldUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {fieldUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {fieldUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Electric Field Strength Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 V/m = 0.01 V/cm</li>
                  <li>1 kV/m = 1,000 V/m</li>
                  <li>1 V/m = 1 N/C</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">CGS Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 statV/cm ≈ 29,979 V/m</li>
                  <li>1 abV/cm = 0.000001 V/m</li>
                  <li>1 V/m ≈ 0.0000334 statV/cm</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Submultiples</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mV/m = 0.001 V/m</li>
                  <li>1 µV/m = 0.000001 V/m</li>
                  <li>1 V/m = 1,000 mV/m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricFieldStrength;