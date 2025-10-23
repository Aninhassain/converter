'use client';

import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const Angle = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('degree');
  const [toUnit, setToUnit] = useState<string>('radian');

  const angleUnits = [
    { value: 'degree', label: 'Degree', symbol: '°' },
    { value: 'radian', label: 'Radian', symbol: 'rad' },
    { value: 'grad', label: 'Grad', symbol: '^g' },
    { value: 'minute', label: 'Minute', symbol: "'" },
    { value: 'second', label: 'Second', symbol: '"' },
    { value: 'gon', label: 'Gon', symbol: 'gon' },
    { value: 'sign', label: 'Sign', symbol: 'sign' },
    { value: 'mil', label: 'Mil', symbol: 'mil' },
    { value: 'revolution', label: 'Revolution', symbol: 'r' },
    { value: 'circle', label: 'Circle', symbol: 'circle' },
    { value: 'turn', label: 'Turn', symbol: 'turn' },
    { value: 'quadrant', label: 'Quadrant', symbol: 'quadrant' },
    { value: 'right_angle', label: 'Right Angle', symbol: 'right angle' },
    { value: 'sextant', label: 'Sextant', symbol: 'sextant' }
  ];

  // Conversion factors to degrees (base unit)
  const conversionFactors: { [key: string]: number } = {
    degree: 1,
    radian: 180 / Math.PI, // 1 rad = 180/π degrees
    grad: 0.9, // 1 grad = 0.9 degrees
    minute: 1/60, // 1 minute = 1/60 degrees
    second: 1/3600, // 1 second = 1/3600 degrees
    gon: 0.9, // 1 gon = 0.9 degrees (same as grad)
    sign: 30, // 1 sign = 30 degrees
    mil: 0.05625, // 1 mil = 0.05625 degrees
    revolution: 360, // 1 revolution = 360 degrees
    circle: 360, // 1 circle = 360 degrees (same as revolution)
    turn: 360, // 1 turn = 360 degrees (same as revolution)
    quadrant: 90, // 1 quadrant = 90 degrees
    right_angle: 90, // 1 right angle = 90 degrees (same as quadrant)
    sextant: 60 // 1 sextant = 60 degrees
  };

  const convertAngle = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to degrees first
    const degrees = value * conversionFactors[from];
    // Convert from degrees to target unit
    return degrees / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertAngle(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertAngle(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertAngle(numValue, fromUnit, unit);
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
              <RotateCcw className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Angle Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different angle units
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
                    placeholder="Enter angle value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                  >
                    {angleUnits.map((unit) => (
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
                    {angleUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {angleUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {angleUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Angle Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Basic Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1° = π/180 rad ≈ 0.0175 rad</li>
                  <li>1 rad = 180/π° ≈ 57.296°</li>
                  <li>1° = 60&apos; (minutes)</li>
                  <li>1&apos; = 60&ldquo; (seconds)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Grad System</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 grad = 0.9°</li>
                  <li>1° = 10/9 grad ≈ 1.111 grad</li>
                  <li>90° = 100 grad</li>
                  <li>180° = 200 grad</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Special Angles</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 revolution = 360°</li>
                  <li>1 quadrant = 90°</li>
                  <li>1 sextant = 60°</li>
                  <li>1 right angle = 90°</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Angle Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Angle Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Basic Angles</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>0° = 0 rad</li>
                  <li>30° = π/6 rad</li>
                  <li>45° = π/4 rad</li>
                  <li>60° = π/3 rad</li>
                  <li>90° = π/2 rad</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Right Angles</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>90° = 1 right angle</li>
                  <li>180° = 2 right angles</li>
                  <li>270° = 3 right angles</li>
                  <li>360° = 4 right angles</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Military/Navigation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 mil ≈ 0.05625°</li>
                  <li>6400 mil = 360°</li>
                  <li>1 sign = 30°</li>
                  <li>12 signs = 360°</li>
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
                  <h4 className="font-semibold text-gray-700 mb-2">Degrees to Radians</h4>
                  <p className="text-sm text-gray-600">radians = degrees × π/180</p>
                  <p className="text-sm text-gray-600">degrees = radians × 180/π</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Degrees to Grads</h4>
                  <p className="text-sm text-gray-600">grads = degrees × 10/9</p>
                  <p className="text-sm text-gray-600">degrees = grads × 9/10</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Minutes & Seconds</h4>
                  <p className="text-sm text-gray-600">1° = 60&apos; = 3600&ldquo;</p>
                  <p className="text-sm text-gray-600">1&apos; = 60&ldquo;</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Special Units</h4>
                  <p className="text-sm text-gray-600">1 revolution = 360°</p>
                  <p className="text-sm text-gray-600">1 quadrant = 90°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angle;
