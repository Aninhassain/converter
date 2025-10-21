'use client';

import { useState } from 'react';
import { Thermometer } from 'lucide-react';

const Temperature = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('celsius');
  const [toUnit, setToUnit] = useState<string>('kelvin');

  const temperatureUnits = [
    { value: 'celsius', label: 'Celsius', symbol: '°C' },
    { value: 'fahrenheit', label: 'Fahrenheit', symbol: '°F' },
    { value: 'kelvin', label: 'Kelvin', symbol: 'K' }
  ];

  const convertTemperature = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    let celsius: number;
    
    // Convert to Celsius first
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }
    
    // Convert from Celsius to target unit
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return (celsius * 9/5) + 32;
      case 'kelvin':
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertTemperature(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(2));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertTemperature(numValue, unit, toUnit);
      setToValue(converted.toFixed(2));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertTemperature(numValue, fromUnit, unit);
      setToValue(converted.toFixed(2));
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
              <Thermometer className="h-8 w-8 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Temperature Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different temperature scales
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
                    placeholder="Enter temperature"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg bg-white"
                  >
                    {temperatureUnits.map((unit) => (
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
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg bg-white"
                  >
                    {temperatureUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}°</span> {temperatureUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-red-600"> {toValue}°</span> {temperatureUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Temperature Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Temperature Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Water Freezing Point</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>0°C = 32°F = 273.15K</li>
                  <li>Ice melts at this temperature</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Water Boiling Point</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>100°C = 212°F = 373.15K</li>
                  <li>Water boils at sea level</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Room Temperature</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>20°C = 68°F = 293.15K</li>
                  <li>Comfortable indoor temperature</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Formulas */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conversion Formulas</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Celsius to Fahrenheit</h4>
                  <p className="text-sm text-gray-600">°F = (°C × 9/5) + 32</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Celsius to Kelvin</h4>
                  <p className="text-sm text-gray-600">K = °C + 273.15</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Fahrenheit to Celsius</h4>
                  <p className="text-sm text-gray-600">°C = (°F - 32) × 5/9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
