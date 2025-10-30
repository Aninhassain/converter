"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Activity } from 'lucide-react';

const RadiationActivity = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('becquerel');
  const [toUnit, setToUnit] = useState<string>('curie');

  // Radiation activity units with conversion factors (relative to becquerel)
  const activityUnits = useMemo(() => [
    { name: 'becquerel', symbol: 'Bq', factor: 1 },
    { name: 'kilobecquerel', symbol: 'kBq', factor: 1e3 },
    { name: 'megabecquerel', symbol: 'MBq', factor: 1e6 },
    { name: 'gigabecquerel', symbol: 'GBq', factor: 1e9 },
    { name: 'terabecquerel', symbol: 'TBq', factor: 1e12 },
    { name: 'curie', symbol: 'Ci', factor: 3.7e10 },
    { name: 'millicurie', symbol: 'mCi', factor: 3.7e7 },
    { name: 'microcurie', symbol: 'µCi', factor: 3.7e4 },
    { name: 'nanocurie', symbol: 'nCi', factor: 37 },
    { name: 'picocurie', symbol: 'pCi', factor: 0.037 },
    { name: 'rutherford', symbol: 'Rd', factor: 1e6 },
    { name: 'disintegrations per second', symbol: 'dps', factor: 1 },
    { name: 'disintegrations per minute', symbol: 'dpm', factor: 1/60 }
  ], []);

  // Sort units by common usage
  const sortedActivityUnits = useMemo(() => {
    const commonUnits = ['becquerel', 'curie', 'megabecquerel', 'millicurie'];
    const units = [...activityUnits];
    units.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [activityUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const fromUnitData = activityUnits.find(unit => unit.name === fromUnit);
      const toUnitData = activityUnits.find(unit => unit.name === toUnit);
      
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
  }, [fromValue, fromUnit, toUnit, activityUnits]);

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity className="h-8 w-8 text-orange-600" />
              <h1 className="text-4xl font-bold text-gray-900">Radiation Activity Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different radiation activity units and measurements
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg bg-white"
                  >
                    {sortedActivityUnits.map((unit) => (
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
                    {sortedActivityUnits.map((unit) => (
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
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {fromUnit} = 
                  <span className="font-semibold text-orange-600"> {toValue}</span> {toUnit}
                </p>
              </div>
            )}
          </div>

          {/* Common Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Common Activity Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Becquerel to Curie</h4>
                <p className="text-sm text-gray-600">1 Bq = 2.7027 × 10⁻¹¹ Ci</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Curie to Becquerel</h4>
                <p className="text-sm text-gray-600">1 Ci = 3.7 × 10¹⁰ Bq</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">DPS to Becquerel</h4>
                <p className="text-sm text-gray-600">1 dps = 1 Bq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiationActivity;