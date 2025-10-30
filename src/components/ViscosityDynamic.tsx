"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Droplets } from 'lucide-react';

const ViscosityDynamic = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('pascal-second');
  const [toUnit, setToUnit] = useState<string>('poise');

  // Viscosity units with conversion factors (relative to pascal-second)
  const viscosityUnits = useMemo(() => [
    { name: 'pascal-second', symbol: 'Pa·s', factor: 1 },
    { name: 'poise', symbol: 'P', factor: 0.1 },
    { name: 'centipoise', symbol: 'cP', factor: 0.001 },
    { name: 'millipascal-second', symbol: 'mPa·s', factor: 0.001 },
    { name: 'micropoise', symbol: 'μP', factor: 0.0001 },
    { name: 'pound-force-second/square-inch', symbol: 'lbf·s/in²', factor: 6894.757 },
    { name: 'pound/foot-second', symbol: 'lb/(ft·s)', factor: 1.488164 },
    { name: 'pound/foot-hour', symbol: 'lb/(ft·h)', factor: 0.000413379 },
    { name: 'kilogram/meter-second', symbol: 'kg/(m·s)', factor: 1 },
    { name: 'gram/centimeter-second', symbol: 'g/(cm·s)', factor: 0.1 },
    { name: 'newton-second/square-meter', symbol: 'N·s/m²', factor: 1 },
    { name: 'micropascal-second', symbol: 'μPa·s', factor: 0.000001 },
    { name: 'millinewton-second/square-meter', symbol: 'mN·s/m²', factor: 0.001 },
  ], []);

  // Sort units by common usage, then alphabetically
  const sortedViscosityUnits = useMemo(() => {
    const commonUnits = ['pascal-second', 'poise', 'centipoise'];
    const units = [...viscosityUnits];
    units.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [viscosityUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const fromUnitData = viscosityUnits.find(unit => unit.name === fromUnit);
      const toUnitData = viscosityUnits.find(unit => unit.name === toUnit);
      
      if (fromUnitData && toUnitData) {
        const baseValue = numValue * fromUnitData.factor;
        const convertedValue = baseValue / toUnitData.factor;
        
        if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 999999999) {
          setToValue(convertedValue.toExponential(6));
        } else {
          setToValue(convertedValue.toPrecision(7));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, viscosityUnits]);

  const handleFromValueChange = useCallback((value: string) => {
    setFromValue(value);
  }, []);

  const handleFromUnitChange = useCallback((unit: string) => {
    setFromUnit(unit);
  }, []);

  const handleToUnitChange = useCallback((unit: string) => {
    setToUnit(unit);
  }, []);

  const swapUnits = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  }, [toUnit, fromUnit, toValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Dynamic Viscosity Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different dynamic viscosity units
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] items-center gap-4 lg:gap-8">
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
                    {sortedViscosityUnits.map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name} [{unit.symbol}]
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center">
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
                    {sortedViscosityUnits.map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name} [{unit.symbol}]
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
                  <span className="font-semibold">{fromValue}</span> {fromUnit} = 
                  <span className="font-semibold text-blue-600"> {toValue}</span> {toUnit}
                </p>
              </div>
            )}
          </div>

          {/* Common Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Common Dynamic Viscosity Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Pascal-second to Poise</h4>
                <p className="text-sm text-gray-600">1 Pa·s = 10 P</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Poise to Centipoise</h4>
                <p className="text-sm text-gray-600">1 P = 100 cP</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Pascal-second to Centipoise</h4>
                <p className="text-sm text-gray-600">1 Pa·s = 1000 cP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViscosityDynamic;