'use client';

import { useState } from 'react';
import { Scale } from 'lucide-react';

const Weight = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('kilogram');
  const [toUnit, setToUnit] = useState<string>('gram');

  const weightUnits = [
    { value: 'kilogram', label: 'Kilogram', symbol: 'kg' },
    { value: 'gram', label: 'Gram', symbol: 'g' },
    { value: 'milligram', label: 'Milligram', symbol: 'mg' },
    { value: 'metric_ton', label: 'Metric Ton', symbol: 't' },
    { value: 'long_ton', label: 'Long Ton', symbol: 'long ton' },
    { value: 'short_ton', label: 'Short Ton', symbol: 'short ton' },
    { value: 'pound', label: 'Pound', symbol: 'lb' },
    { value: 'ounce', label: 'Ounce', symbol: 'oz' },
    { value: 'carat', label: 'Carat', symbol: 'ct' },
    { value: 'atomic_mass_unit', label: 'Atomic Mass Unit', symbol: 'amu' }
  ];

  // Conversion factors to kilograms (base unit)
  const conversionFactors: { [key: string]: number } = {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    metric_ton: 1000,
    long_ton: 1016.0469088,
    short_ton: 907.18474,
    pound: 0.45359237,
    ounce: 0.028349523125,
    carat: 0.0002,
    atomic_mass_unit: 1.66053906660e-27
  };

  const convertWeight = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to kilograms first
    const kilograms = value * conversionFactors[from];
    // Convert from kilograms to target unit
    return kilograms / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertWeight(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertWeight(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertWeight(numValue, fromUnit, unit);
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
              <Scale className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">Weight & Mass Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of weight and mass measurement
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                  >
                    {weightUnits.map((unit) => (
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
                  className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                  >
                    {weightUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {weightUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-green-600"> {toValue}</span> {weightUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Weight Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kg = 1,000 g</li>
                  <li>1 g = 1,000 mg</li>
                  <li>1 metric ton = 1,000 kg</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 pound = 16 ounces</li>
                  <li>1 short ton = 2,000 lbs</li>
                  <li>1 long ton = 2,240 lbs</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric to Imperial</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kg ≈ 2.205 lbs</li>
                  <li>1 g ≈ 0.035 oz</li>
                  <li>1 metric ton ≈ 1.102 short tons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weight;
