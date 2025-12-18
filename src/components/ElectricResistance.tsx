'use client';

import { useState } from 'react';
import { Zap, RotateCcw } from 'lucide-react';

const ElectricResistance = () => {
  const defaultFromValue = '';
  const defaultToValue = '';
  const defaultFromUnit = 'ohm';
  const defaultToUnit = 'kiloohm';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  const resistanceUnits = [
    { value: 'ohm', label: 'Ohm [Ω]', symbol: 'Ω' },
    { value: 'kiloohm', label: 'Kiloohm [kΩ]', symbol: 'kΩ' },
    { value: 'megaohm', label: 'Megaohm [MΩ]', symbol: 'MΩ' },
    { value: 'milliohm', label: 'Milliohm [mΩ]', symbol: 'mΩ' },
    { value: 'microohm', label: 'Microohm [µΩ]', symbol: 'µΩ' },
    { value: 'volt-per-ampere', label: 'Volt/Ampere [V/A]', symbol: 'V/A' },
    { value: 'abohm', label: 'Abohm [abΩ]', symbol: 'abΩ' },
    { value: 'statohm', label: 'Statohm [statΩ]', symbol: 'statΩ' },
    { value: 'watt-per-square-ampere', label: 'Watt/Ampere² [W/A²]', symbol: 'W/A²' }
  ];

  // Conversion factors to Ohm (Ω)
  const conversionFactors: { [key: string]: number } = {
    'ohm': 1,
    'kiloohm': 1000,
    'megaohm': 1e6,
    'milliohm': 0.001,
    'microohm': 1e-6,
    'volt-per-ampere': 1,
    'abohm': 1e-9,
    'statohm': 8.987551787e11,
    'watt-per-square-ampere': 1
  };

  const convertResistance = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to ohms first
    const ohms = value * conversionFactors[from];
    // Convert from ohms to target unit
    return ohms / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertResistance(numValue, fromUnit, toUnit);
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
      const converted = convertResistance(numValue, unit, toUnit);
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
      const converted = convertResistance(numValue, fromUnit, unit);
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

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setToValue(defaultToValue);
    setFromUnit(defaultFromUnit);
    setToUnit(defaultToUnit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Electric Resistance Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of electric resistance measurement
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
                    {resistanceUnits.map((unit) => (
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
                    {resistanceUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
                <button onClick={handleReset} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                </button>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {resistanceUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {resistanceUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Electric Resistance Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 Ω = 1 V/A</li>
                  <li>1 kΩ = 1,000 Ω</li>
                  <li>1 MΩ = 1,000,000 Ω</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">CGS Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 abΩ = 10⁻⁹ Ω</li>
                  <li>1 statΩ ≈ 8.987552e11 Ω</li>
                  <li>1 Ω = 10⁹ abΩ</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Submultiples</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mΩ = 0.001 Ω</li>
                  <li>1 µΩ = 0.000001 Ω</li>
                  <li>1 Ω = 1,000 mΩ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricResistance;