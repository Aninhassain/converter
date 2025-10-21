'use client';

import { useState } from 'react';
import { Box } from 'lucide-react';

const Volume = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('liter');
  const [toUnit, setToUnit] = useState<string>('milliliter');

  const volumeUnits = [
    // Metric units
    { value: 'cubic_meter', label: 'Cubic Meter', symbol: 'm³' },
    { value: 'cubic_kilometer', label: 'Cubic Kilometer', symbol: 'km³' },
    { value: 'cubic_centimeter', label: 'Cubic Centimeter', symbol: 'cm³' },
    { value: 'cubic_millimeter', label: 'Cubic Millimeter', symbol: 'mm³' },
    { value: 'liter', label: 'Liter', symbol: 'L' },
    { value: 'milliliter', label: 'Milliliter', symbol: 'mL' },
    { value: 'hectoliter', label: 'Hectoliter', symbol: 'hL' },
    { value: 'deciliter', label: 'Deciliter', symbol: 'dL' },
    
    // Imperial/US Cubic units
    { value: 'cubic_mile', label: 'Cubic Mile', symbol: 'mi³' },
    { value: 'cubic_yard', label: 'Cubic Yard', symbol: 'yd³' },
    { value: 'cubic_foot', label: 'Cubic Foot', symbol: 'ft³' },
    { value: 'cubic_inch', label: 'Cubic Inch', symbol: 'in³' },
    
    // Imperial Liquid units
    { value: 'imperial_gallon', label: 'Imperial Gallon', symbol: 'imp gal' },
    { value: 'imperial_quart', label: 'Imperial Quart', symbol: 'imp qt' },
    { value: 'imperial_pint', label: 'Imperial Pint', symbol: 'imp pt' },
    { value: 'imperial_fluid_ounce', label: 'Imperial Fluid Ounce', symbol: 'imp fl oz' },
    { value: 'imperial_table_spoon', label: 'Imperial Table Spoon', symbol: 'imp tbsp' },
    { value: 'imperial_tea_spoon', label: 'Imperial Tea Spoon', symbol: 'imp tsp' },
    
    // US Liquid units
    { value: 'us_gallon', label: 'US Gallon', symbol: 'US gal' },
    { value: 'us_quart', label: 'US Quart', symbol: 'US qt' },
    { value: 'us_pint', label: 'US Pint', symbol: 'US pt' },
    { value: 'us_cup', label: 'US Cup', symbol: 'US cup' },
    { value: 'us_fluid_ounce', label: 'US Fluid Ounce', symbol: 'US fl oz' },
    { value: 'us_table_spoon', label: 'US Table Spoon', symbol: 'US tbsp' },
    { value: 'us_tea_spoon', label: 'US Tea Spoon', symbol: 'US tsp' }
  ];

  // Conversion factors to liters (base unit)
  const conversionFactors: { [key: string]: number } = {
    // Metric units
    cubic_meter: 1000,
    cubic_kilometer: 1000000000000,
    cubic_centimeter: 0.001,
    cubic_millimeter: 0.000001,
    liter: 1,
    milliliter: 0.001,
    hectoliter: 100,
    deciliter: 0.1,
    
    // Imperial/US Cubic units
    cubic_mile: 4168181825440,
    cubic_yard: 764.554857984,
    cubic_foot: 28.316846592,
    cubic_inch: 0.016387064,
    
    // Imperial Liquid units
    imperial_gallon: 4.54609,
    imperial_quart: 1.1365225,
    imperial_pint: 0.56826125,
    imperial_fluid_ounce: 0.0284130625,
    imperial_table_spoon: 0.0177581640625,
    imperial_tea_spoon: 0.0059193880208333,
    
    // US Liquid units
    us_gallon: 3.785411784,
    us_quart: 0.946352946,
    us_pint: 0.473176473,
    us_cup: 0.2365882365,
    us_fluid_ounce: 0.0295735295625,
    us_table_spoon: 0.01478676478125,
    us_tea_spoon: 0.00492892159375
  };

  const convertVolume = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to liters first
    const liters = value * conversionFactors[from];
    // Convert from liters to target unit
    return liters / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertVolume(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertVolume(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertVolume(numValue, fromUnit, unit);
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
              <Box className="h-8 w-8 text-orange-600" />
              <h1 className="text-4xl font-bold text-gray-900">Volume Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of volume measurement
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg bg-white"
                  >
                    {volumeUnits.map((unit) => (
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
                  className="p-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg bg-white"
                  >
                    {volumeUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {volumeUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-orange-600"> {toValue}</span> {volumeUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Volume Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 L = 1,000 mL</li>
                  <li>1 m³ = 1,000 L</li>
                  <li>1 hL = 100 L</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial/US System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 US gallon = 4 US quarts</li>
                  <li>1 US quart = 2 US pints</li>
                  <li>1 US pint = 2 US cups</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Cross-System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 L ≈ 0.264 US gallons</li>
                  <li>1 US gallon ≈ 3.785 L</li>
                  <li>1 m³ ≈ 35.315 ft³</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volume;
