'use client';

import { useState } from 'react';
import { Fuel } from 'lucide-react';

const FuelConsumption = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('liter_per_100km');
  const [toUnit, setToUnit] = useState<string>('mile_per_gallon_us');

  const fuelConsumptionUnits = [
    // Metric units (distance per volume)
    { value: 'meter_per_liter', label: 'Meter per Liter', symbol: 'm/L' },
    { value: 'kilometer_per_liter', label: 'Kilometer per Liter', symbol: 'km/L' },
    { value: 'liter_per_100km', label: 'Liter per 100 km', symbol: 'L/100 km' },
    { value: 'liter_per_km', label: 'Liter per Kilometer', symbol: 'L/km' },
    
    // US units
    { value: 'mile_per_gallon_us', label: 'Mile per Gallon (US)', symbol: 'mpg (US)' },
    { value: 'gallon_per_100mile_us', label: 'Gallon per 100 Mile (US)', symbol: 'gal/100 mi (US)' },
    
    // UK units
    { value: 'mile_per_gallon_uk', label: 'Mile per Gallon (UK)', symbol: 'mpg (UK)' },
    { value: 'gallon_per_100mile_uk', label: 'Gallon per 100 Mile (UK)', symbol: 'gal/100 mi (UK)' },
    
    // Additional metric variations
    { value: 'meter_per_cubic_meter', label: 'Meter per Cubic Meter', symbol: 'm/m³' },
    { value: 'kilometer_per_cubic_meter', label: 'Kilometer per Cubic Meter', symbol: 'km/m³' },
    
    // Nautical units
    { value: 'nautical_mile_per_liter', label: 'Nautical Mile per Liter', symbol: 'n.mile/L' },
    { value: 'nautical_mile_per_gallon_us', label: 'Nautical Mile per Gallon (US)', symbol: 'n.mile/gal (US)' },
    { value: 'nautical_mile_per_gallon_uk', label: 'Nautical Mile per Gallon (UK)', symbol: 'n.mile/gal (UK)' }
  ];

  // Conversion factors to L/100km (base unit for fuel consumption)
  const conversionFactors: { [key: string]: number } = {
    // Metric units
    meter_per_liter: 100000, // 1 m/L = 100,000 L/100km
    kilometer_per_liter: 100, // 1 km/L = 100 L/100km
    liter_per_100km: 1, // Base unit
    liter_per_km: 0.01, // 1 L/km = 0.01 L/100km
    
    // US units
    mile_per_gallon_us: 235.214583, // 1 mpg (US) = 235.214583 L/100km
    gallon_per_100mile_us: 2.35214583, // 1 gal/100 mi (US) = 2.35214583 L/100km
    
    // UK units
    mile_per_gallon_uk: 282.480936, // 1 mpg (UK) = 282.480936 L/100km
    gallon_per_100mile_uk: 2.82480936, // 1 gal/100 mi (UK) = 2.82480936 L/100km
    
    // Additional metric variations
    meter_per_cubic_meter: 100000, // Same as m/L
    kilometer_per_cubic_meter: 100, // Same as km/L
    
    // Nautical units
    nautical_mile_per_liter: 185.2, // 1 n.mile/L = 185.2 L/100km
    nautical_mile_per_gallon_us: 204.545, // 1 n.mile/gal (US) = 204.545 L/100km
    nautical_mile_per_gallon_uk: 245.454, // 1 n.mile/gal (UK) = 245.454 L/100km
  };

  const convertFuelConsumption = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to L/100km first
    let litersPer100km: number;
    
    if (from === 'liter_per_100km') {
      litersPer100km = value;
    } else if (from === 'liter_per_km') {
      litersPer100km = value * 100;
    } else if (from === 'kilometer_per_liter') {
      litersPer100km = 100 / value;
    } else if (from === 'meter_per_liter') {
      litersPer100km = 100000 / value;
    } else if (from === 'mile_per_gallon_us') {
      litersPer100km = 235.214583 / value;
    } else if (from === 'gallon_per_100mile_us') {
      litersPer100km = value * 2.35214583;
    } else if (from === 'mile_per_gallon_uk') {
      litersPer100km = 282.480936 / value;
    } else if (from === 'gallon_per_100mile_uk') {
      litersPer100km = value * 2.82480936;
    } else if (from === 'nautical_mile_per_liter') {
      litersPer100km = 185.2 / value;
    } else if (from === 'nautical_mile_per_gallon_us') {
      litersPer100km = 204.545 / value;
    } else if (from === 'nautical_mile_per_gallon_uk') {
      litersPer100km = 245.454 / value;
    } else {
      litersPer100km = value;
    }
    
    // Convert from L/100km to target unit
    if (to === 'liter_per_100km') {
      return litersPer100km;
    } else if (to === 'liter_per_km') {
      return litersPer100km / 100;
    } else if (to === 'kilometer_per_liter') {
      return 100 / litersPer100km;
    } else if (to === 'meter_per_liter') {
      return 100000 / litersPer100km;
    } else if (to === 'mile_per_gallon_us') {
      return 235.214583 / litersPer100km;
    } else if (to === 'gallon_per_100mile_us') {
      return litersPer100km / 2.35214583;
    } else if (to === 'mile_per_gallon_uk') {
      return 282.480936 / litersPer100km;
    } else if (to === 'gallon_per_100mile_uk') {
      return litersPer100km / 2.82480936;
    } else if (to === 'nautical_mile_per_liter') {
      return 185.2 / litersPer100km;
    } else if (to === 'nautical_mile_per_gallon_us') {
      return 204.545 / litersPer100km;
    } else if (to === 'nautical_mile_per_gallon_uk') {
      return 245.454 / litersPer100km;
    } else {
      return litersPer100km;
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
      const converted = convertFuelConsumption(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertFuelConsumption(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertFuelConsumption(numValue, fromUnit, unit);
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
              <Fuel className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">Fuel Consumption Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different fuel consumption units
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
                    placeholder="Enter fuel consumption"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                  >
                    {fuelConsumptionUnits.map((unit) => (
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
                    {fuelConsumptionUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {fuelConsumptionUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-green-600"> {toValue}</span> {fuelConsumptionUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Fuel Consumption Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 L/100 km = 100 km/L</li>
                  <li>1 km/L = 100 L/100 km</li>
                  <li>1 m/L = 100,000 L/100 km</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">US System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mpg (US) ≈ 235.2 L/100 km</li>
                  <li>1 gal/100 mi (US) ≈ 2.35 L/100 km</li>
                  <li>30 mpg (US) ≈ 7.84 L/100 km</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">UK System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mpg (UK) ≈ 282.5 L/100 km</li>
                  <li>1 gal/100 mi (UK) ≈ 2.82 L/100 km</li>
                  <li>30 mpg (UK) ≈ 9.42 L/100 km</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fuel Efficiency Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fuel Efficiency Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Excellent Efficiency</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&lt; 5 L/100 km</li>
                  <li>&gt; 47 mpg (US)</li>
                  <li>Hybrid/Electric vehicles</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Good Efficiency</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>5-8 L/100 km</li>
                  <li>30-47 mpg (US)</li>
                  <li>Compact cars</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Average Efficiency</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>8-12 L/100 km</li>
                  <li>20-30 mpg (US)</li>
                  <li>Mid-size cars</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Formulas */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conversion Formulas</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">L/100 km to mpg (US)</h4>
                  <p className="text-sm text-gray-600">mpg (US) = 235.214583 / L/100 km</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">mpg (US) to L/100 km</h4>
                  <p className="text-sm text-gray-600">L/100 km = 235.214583 / mpg (US)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">L/100 km to mpg (UK)</h4>
                  <p className="text-sm text-gray-600">mpg (UK) = 282.480936 / L/100 km</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">mpg (UK) to L/100 km</h4>
                  <p className="text-sm text-gray-600">L/100 km = 282.480936 / mpg (UK)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelConsumption;
