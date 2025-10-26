'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const Force = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('newton');
  const [toUnit, setToUnit] = useState<string>('kilonewton');

  const forceUnits = [
    { value: 'newton', label: 'newton [N]', symbol: 'N' },
    { value: 'kilonewton', label: 'kilonewton [kN]', symbol: 'kN' },
    { value: 'gram-force', label: 'gram-force [gf]', symbol: 'gf' },
    { value: 'kilogram-force', label: 'kilogram-force [kgf]', symbol: 'kgf' },
    { value: 'ton-force-metric', label: 'ton-force (metric) [tf]', symbol: 'tf' },
    { value: 'exanewton', label: 'exanewton [EN]', symbol: 'EN' },
    { value: 'petanewton', label: 'petanewton [PT]', symbol: 'PT' },
    { value: 'teranewton', label: 'teranewton [TN]', symbol: 'TN' },
    { value: 'giganewton', label: 'giganewton [GN]', symbol: 'GN' },
    { value: 'meganewton', label: 'meganewton [MN]', symbol: 'MN' },
    { value: 'hectonewton', label: 'hectonewton [hN]', symbol: 'hN' },
    { value: 'dekanewton', label: 'dekanewton [daN]', symbol: 'daN' },
    { value: 'decinewton', label: 'decinewton [dN]', symbol: 'dN' },
    { value: 'centinewton', label: 'centinewton [cN]', symbol: 'cN' },
    { value: 'millinewton', label: 'millinewton [mN]', symbol: 'mN' },
    { value: 'micronewton', label: 'micronewton [μN]', symbol: 'μN' },
    { value: 'nanonewton', label: 'nanonewton [nN]', symbol: 'nN' },
    { value: 'piconewton', label: 'piconewton [pN]', symbol: 'pN' },
    { value: 'femtonewton', label: 'femtonewton [fN]', symbol: 'fN' },
    { value: 'attonewton', label: 'attonewton [aN]', symbol: 'aN' },
    { value: 'dyne', label: 'dyne [dyn]', symbol: 'dyn' },
    { value: 'joule-per-meter', label: 'joule/meter [J/m]', symbol: 'J/m' },
    { value: 'joule-per-centimeter', label: 'joule/centimeter [J/cm]', symbol: 'J/cm' },
    { value: 'ton-force-short', label: 'ton-force (short)', symbol: 'tonf (US)' },
    { value: 'ton-force-long', label: 'ton-force (long) [tonf (UK)]', symbol: 'tonf (UK)' },
    { value: 'kip-force', label: 'kip-force [kipf]', symbol: 'kipf' },
    { value: 'kilopound-force', label: 'kilopound-force [kipf]', symbol: 'kipf' },
    { value: 'pound-force', label: 'pound-force [lbf]', symbol: 'lbf' },
    { value: 'ounce-force', label: 'ounce-force [ozf]', symbol: 'ozf' },
    { value: 'poundal', label: 'poundal [pdl]', symbol: 'pdl' },
    { value: 'pound-foot-per-square-second', label: 'pound foot/square second', symbol: 'lb·ft/s²' },
    { value: 'pond', label: 'pond [p]', symbol: 'p' },
    { value: 'kilopond', label: 'kilopond [kp]', symbol: 'kp' }
  ];

  // Conversion factors to newton (N)
  const conversionFactors: { [key: string]: number } = {
    'newton': 1,
    'kilonewton': 1000,
    'gram-force': 0.00980665,
    'kilogram-force': 9.80665,
    'ton-force-metric': 9806.65,
    'exanewton': 1e18,
    'petanewton': 1e15,
    'teranewton': 1e12,
    'giganewton': 1e9,
    'meganewton': 1e6,
    'hectonewton': 100,
    'dekanewton': 10,
    'decinewton': 0.1,
    'centinewton': 0.01,
    'millinewton': 0.001,
    'micronewton': 0.000001,
    'nanonewton': 1e-9,
    'piconewton': 1e-12,
    'femtonewton': 1e-15,
    'attonewton': 1e-18,
    'dyne': 0.00001,
    'joule-per-meter': 1,
    'joule-per-centimeter': 100,
    'ton-force-short': 8896.443230521,
    'ton-force-long': 9964.01641818352,
    'kip-force': 4448.2216,
    'kilopound-force': 4448.2216,
    'pound-force': 4.4482216152605,
    'ounce-force': 0.27801385095378,
    'poundal': 0.138254954376,
    'pound-foot-per-square-second': 0.138254954376,
    'pond': 0.00980665,
    'kilopond': 9.80665
  };

  const convertForce = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to newton first
    const newtons = value * conversionFactors[from];
    // Convert from newton to target unit
    return newtons / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertForce(numValue, fromUnit, toUnit);
      // Use exponential notation for very large or very small numbers
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
      const converted = convertForce(numValue, unit, toUnit);
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
      const converted = convertForce(numValue, fromUnit, unit);
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
              <h1 className="text-4xl font-bold text-gray-900">Force Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different units of force measurement
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
                    {forceUnits.map((unit) => (
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
                    {forceUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {forceUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-orange-600"> {toValue}</span> {forceUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Force Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kN = 1,000 N</li>
                  <li>1 N = 100,000 dyn</li>
                  <li>1 N = 1 J/m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Metric System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kgf ≈ 9.807 N</li>
                  <li>1 tf = 1,000 kgf</li>
                  <li>1 kp = 1 kgf</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 lbf ≈ 4.448 N</li>
                  <li>1 kipf = 1,000 lbf</li>
                  <li>1 lbf = 16 ozf</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Force;
