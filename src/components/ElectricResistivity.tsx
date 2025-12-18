"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Zap, RotateCcw } from 'lucide-react';

const ElectricResistivity = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'ohm-meter';
  const defaultToUnit = 'ohm-centimeter';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  // Resistivity units relative to ohm-meter (Ω·m)
  const resistivityUnits = useMemo(() => [
    { name: 'ohm-meter', symbol: 'Ω·m', factor: 1 },
    { name: 'ohm-centimeter', symbol: 'Ω·cm', factor: 0.01 },
    { name: 'ohm-millimeter', symbol: 'Ω·mm', factor: 0.001 },
    { name: 'milliohm-centimeter', symbol: 'mΩ·cm', factor: 1e-5 },
    { name: 'microohm-centimeter', symbol: 'μΩ·cm', factor: 1e-8 },
    { name: 'microohm-meter', symbol: 'μΩ·m', factor: 1e-6 },
  ], []);

  const sortedResistivityUnits = useMemo(() => {
    const common = ['ohm-meter', 'ohm-centimeter', 'microohm-centimeter'];
    const units = [...resistivityUnits];
    units.sort((a, b) => {
      const ai = common.indexOf(a.name);
      const bi = common.indexOf(b.name);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [resistivityUnits]);

  useEffect(() => {
    const num = parseFloat(fromValue);
    if (!isNaN(num)) {
      const from = resistivityUnits.find(u => u.name === fromUnit);
      const to = resistivityUnits.find(u => u.name === toUnit);
      if (from && to) {
        const base = num * from.factor; // in Ω·m
        const converted = base / to.factor;
        if (Math.abs(converted) < 1e-6 || Math.abs(converted) > 1e9) {
          setToValue(converted.toExponential(6));
        } else {
          setToValue(converted.toPrecision(7));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, resistivityUnits]);

  const handleFromValueChange = useCallback((v: string) => setFromValue(v), []);
  const handleFromUnitChange = useCallback((u: string) => setFromUnit(u), []);
  const handleToUnitChange = useCallback((u: string) => setToUnit(u), []);

  const swapUnits = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  }, [toUnit, fromUnit, toValue]);

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
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-600" />
              <h1 className="text-4xl font-bold text-gray-900">Electric Resistivity Converter</h1>
            </div>
            <p className="text-lg text-gray-600">Convert between common electric resistivity units</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] items-center gap-4 lg:gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">From:</label>
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
                    {sortedResistivityUnits.map(unit => (
                      <option key={unit.name} value={unit.name}>{unit.name} [{unit.symbol}]</option>
                    ))}
                  </select>
                </div>
              </div>

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

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">To:</label>
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
                    {sortedResistivityUnits.map(unit => (
                      <option key={unit.name} value={unit.name}>{unit.name} [{unit.symbol}]</option>
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

            {fromValue && toValue && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {fromUnit} =
                  <span className="font-semibold text-blue-600"> {toValue}</span> {toUnit}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricResistivity;
