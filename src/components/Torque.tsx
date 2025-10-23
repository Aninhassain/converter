'use client';

import { useState } from 'react';
import { Wrench } from 'lucide-react';

const Torque = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('newton_meter');
  const [toUnit, setToUnit] = useState<string>('newton_centimeter');

  const torqueUnits = [
    // SI units (Newton-based)
    { value: 'newton_meter', label: 'Newton Meter', symbol: 'N·m' },
    { value: 'newton_centimeter', label: 'Newton Centimeter', symbol: 'N·cm' },
    { value: 'newton_millimeter', label: 'Newton Millimeter', symbol: 'N·mm' },
    { value: 'kilonewton_meter', label: 'Kilonewton Meter', symbol: 'kN·m' },
    
    // Dyne units
    { value: 'dyne_meter', label: 'Dyne Meter', symbol: 'dyn·m' },
    { value: 'dyne_centimeter', label: 'Dyne Centimeter', symbol: 'dyn·cm' },
    { value: 'dyne_millimeter', label: 'Dyne Millimeter', symbol: 'dyn·mm' },
    
    // Kilogram-force units
    { value: 'kilogram_force_meter', label: 'Kilogram-force Meter', symbol: 'kgf·m' },
    { value: 'kilogram_force_centimeter', label: 'Kilogram-force Centimeter', symbol: 'kgf·cm' },
    { value: 'kilogram_force_millimeter', label: 'Kilogram-force Millimeter', symbol: 'kgf·mm' },
    
    // Gram-force units
    { value: 'gram_force_meter', label: 'Gram-force Meter', symbol: 'gf·m' },
    { value: 'gram_force_centimeter', label: 'Gram-force Centimeter', symbol: 'gf·cm' },
    { value: 'gram_force_millimeter', label: 'Gram-force Millimeter', symbol: 'gf·mm' },
    
    // Imperial units
    { value: 'pound_force_foot', label: 'Pound-force Foot', symbol: 'lbf·ft' },
    { value: 'pound_force_inch', label: 'Pound-force Inch', symbol: 'lbf·in' },
    { value: 'ounce_force_foot', label: 'Ounce-force Foot', symbol: 'ozf·ft' },
    { value: 'ounce_force_inch', label: 'Ounce-force Inch', symbol: 'ozf·in' }
  ];

  // Conversion factors to Newton meters (base unit)
  const conversionFactors: { [key: string]: number } = {
    // SI units
    newton_meter: 1,
    newton_centimeter: 0.01,
    newton_millimeter: 0.001,
    kilonewton_meter: 1000,
    
    // Dyne units
    dyne_meter: 0.00001,
    dyne_centimeter: 0.0000001,
    dyne_millimeter: 0.00000001,
    
    // Kilogram-force units
    kilogram_force_meter: 9.80665,
    kilogram_force_centimeter: 0.0980665,
    kilogram_force_millimeter: 0.00980665,
    
    // Gram-force units
    gram_force_meter: 0.00980665,
    gram_force_centimeter: 0.0000980665,
    gram_force_millimeter: 0.00000980665,
    
    // Imperial units
    pound_force_foot: 1.3558179483314004,
    pound_force_inch: 0.1129848290276167,
    ounce_force_foot: 0.084738624,
    ounce_force_inch: 0.007061552
  };

  const convertTorque = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to Newton meters first
    const newtonMeters = value * conversionFactors[from];
    // Convert from Newton meters to target unit
    return newtonMeters / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertTorque(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertTorque(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertTorque(numValue, fromUnit, unit);
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
              <Wrench className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Torque Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different torque units
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
                    placeholder="Enter torque value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {torqueUnits.map((unit) => (
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
                    {torqueUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {torqueUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-purple-600"> {toValue}</span> {torqueUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Torque Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">SI Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 N·m = 100 N·cm</li>
                  <li>1 N·m = 1,000 N·mm</li>
                  <li>1 kN·m = 1,000 N·m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Imperial Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 lbf·ft = 12 lbf·in</li>
                  <li>1 lbf·ft ≈ 1.36 N·m</li>
                  <li>1 lbf·in ≈ 0.113 N·m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Force Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 kgf·m = 9.81 N·m</li>
                  <li>1 gf·m = 0.00981 N·m</li>
                  <li>1 dyn·m = 0.00001 N·m</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Torque Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Torque Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Automotive</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Engine bolts: 20-100 N·m</li>
                  <li>Wheel nuts: 80-150 N·m</li>
                  <li>Spark plugs: 15-30 N·m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Industrial</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Small motors: 0.1-10 N·m</li>
                  <li>Large motors: 100-10,000 N·m</li>
                  <li>Machine tools: 50-500 N·m</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Household</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Door hinges: 2-5 N·m</li>
                  <li>Furniture assembly: 1-10 N·m</li>
                  <li>Bicycle pedals: 30-50 N·m</li>
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
                  <h4 className="font-semibold text-gray-700 mb-2">SI to Imperial</h4>
                  <p className="text-sm text-gray-600">1 N·m = 0.7376 lbf·ft</p>
                  <p className="text-sm text-gray-600">1 N·m = 8.8507 lbf·in</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Imperial to SI</h4>
                  <p className="text-sm text-gray-600">1 lbf·ft = 1.3558 N·m</p>
                  <p className="text-sm text-gray-600">1 lbf·in = 0.1130 N·m</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Force Units</h4>
                  <p className="text-sm text-gray-600">1 kgf·m = 9.8067 N·m</p>
                  <p className="text-sm text-gray-600">1 gf·m = 0.0098 N·m</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Dyne Units</h4>
                  <p className="text-sm text-gray-600">1 dyn·m = 10⁻⁵ N·m</p>
                  <p className="text-sm text-gray-600">1 dyn·cm = 10⁻⁷ N·m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Torque;
