'use client';

import { useState, useEffect } from 'react';
import { Gauge } from 'lucide-react';

const Pressure = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('pascal');
  const [toUnit, setToUnit] = useState<string>('kilopascal');

  // Comprehensive pressure units list
  const pressureUnits = [
    { name: 'pascal', symbol: 'Pa', factor: 1 },
    { name: 'kilopascal', symbol: 'kPa', factor: 1000 },
    { name: 'bar', symbol: 'bar', factor: 100000 },
    { name: 'psi', symbol: 'psi', factor: 6894.76 },
    { name: 'ksi', symbol: 'ksi', factor: 6894760 },
    { name: 'Standard atmosphere', symbol: 'atm', factor: 101325 },
    { name: 'exapascal', symbol: 'EPa', factor: 1e18 },
    { name: 'petapascal', symbol: 'PPa', factor: 1e15 },
    { name: 'terapascal', symbol: 'TPa', factor: 1e12 },
    { name: 'gigapascal', symbol: 'GPa', factor: 1e9 },
    { name: 'megapascal', symbol: 'MPa', factor: 1e6 },
    { name: 'hectopascal', symbol: 'hPa', factor: 100 },
    { name: 'dekapascal', symbol: 'daPa', factor: 10 },
    { name: 'decipascal', symbol: 'dPa', factor: 0.1 },
    { name: 'centipascal', symbol: 'cPa', factor: 0.01 },
    { name: 'millipascal', symbol: 'mPa', factor: 0.001 },
    { name: 'micropascal', symbol: 'µPa', factor: 1e-6 },
    { name: 'nanopascal', symbol: 'nPa', factor: 1e-9 },
    { name: 'picopascal', symbol: 'pPa', factor: 1e-12 },
    { name: 'femtopascal', symbol: 'fPa', factor: 1e-15 },
    { name: 'attopascal', symbol: 'aPa', factor: 1e-18 },
    { name: 'newton/square meter', symbol: 'N/m²', factor: 1 },
    { name: 'newton/square centimeter', symbol: 'N/cm²', factor: 10000 },
    { name: 'newton/square millimeter', symbol: 'N/mm²', factor: 1000000 },
    { name: 'kilonewton/square meter', symbol: 'kN/m²', factor: 1000 },
    { name: 'millibar', symbol: 'mbar', factor: 100 },
    { name: 'microbar', symbol: 'µbar', factor: 0.1 },
    { name: 'dyne/square centimeter', symbol: 'dyn/cm²', factor: 0.1 },
    { name: 'kilogram-force/square meter', symbol: 'kgf/m²', factor: 9.80665 },
    { name: 'kilogram-force/sq. cm', symbol: 'kgf/cm²', factor: 98066.5 },
    { name: 'kilogram-force/sq. millimeter', symbol: 'kgf/mm²', factor: 9806650 },
    { name: 'gram-force/sq. centimeter', symbol: 'gf/cm²', factor: 98.0665 },
    { name: 'ton-force (short)/sq. foot', symbol: 'tf/ft²', factor: 95760.52 },
    { name: 'ton-force (short)/sq. inch', symbol: 'tf/in²', factor: 13789514.6 },
    { name: 'ton-force (long)/square foot', symbol: 'tf/ft²', factor: 107251.78 },
    { name: 'ton-force (long)/square inch', symbol: 'tf/in²', factor: 15444256.3 },
    { name: 'kip-force/square inch', symbol: 'kip/in²', factor: 6894757.29 },
    { name: 'pound-force/square foot', symbol: 'lbf/ft²', factor: 47.88026 },
    { name: 'pound-force/square inch', symbol: 'lbf/in²', factor: 6894.76 },
    { name: 'poundal/square foot', symbol: 'pdl/ft²', factor: 1.488164 },
    { name: 'torr', symbol: 'Torr', factor: 133.322 },
    { name: 'centimeter mercury (0°C)', symbol: 'cmHg', factor: 1333.22 },
    { name: 'millimeter mercury (0°C)', symbol: 'mmHg', factor: 133.322 },
    { name: 'inch mercury (32°F)', symbol: 'inHg', factor: 3386.39 },
    { name: 'inch mercury (60°F)', symbol: 'inHg', factor: 3376.85 },
    { name: 'centimeter water (4°C)', symbol: 'cmH2O', factor: 98.0638 },
    { name: 'millimeter water (4°C)', symbol: 'mmH2O', factor: 9.80638 },
    { name: 'inch water (4°C)', symbol: 'inAq', factor: 249.082 },
    { name: 'foot water (4°C)', symbol: 'ftAq', factor: 2988.98 },
    { name: 'inch water (60°F)', symbol: 'inAq', factor: 248.843 },
    { name: 'foot water (60°F)', symbol: 'ftAq', factor: 2986.12 },
    { name: 'atmosphere technical', symbol: 'at', factor: 98066.5 },
  ];

  // Sort the list alphabetically by name, but keep common units at the top
  const sortedPressureUnits = pressureUnits.sort((a, b) => {
    const commonUnits = ['pascal', 'kilopascal', 'bar', 'psi', 'Standard atmosphere'];
    if (commonUnits.includes(a.name) && !commonUnits.includes(b.name)) return -1;
    if (!commonUnits.includes(a.name) && commonUnits.includes(b.name)) return 1;
    return a.name.localeCompare(b.name);
  });

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const fromUnitData = pressureUnits.find(unit => unit.name === fromUnit);
      const toUnitData = pressureUnits.find(unit => unit.name === toUnit);
      
      if (fromUnitData && toUnitData) {
        // Convert to pascal first, then to target unit
        const valueInPascals = numValue * fromUnitData.factor;
        const convertedValue = valueInPascals / toUnitData.factor;
        
        // Dynamic precision for formatting
        if (convertedValue < 0.0001 && convertedValue > 0) {
          setToValue(convertedValue.toExponential(4));
        } else if (convertedValue > 1000) {
          setToValue(convertedValue.toFixed(2));
        } else {
          setToValue(convertedValue.toFixed(6));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, pressureUnits]);

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
  };
  
  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const getUnitName = (unitName: string) => {
    return pressureUnits.find(u => u.name === unitName)?.name || unitName;
  };

  const getUnitSymbol = (unitName: string) => {
    return pressureUnits.find(u => u.name === unitName)?.symbol || '';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gauge className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Pressure Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different pressure units with precision
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
                    {sortedPressureUnits.map((unit) => (
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
                    {sortedPressureUnits.map((unit) => (
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
                  <span className="font-semibold">{fromValue}</span> {getUnitName(fromUnit)} [{getUnitSymbol(fromUnit)}] =
                  <span className="font-semibold text-blue-600"> {toValue}</span> {getUnitName(toUnit)} [{getUnitSymbol(toUnit)}]
                </p>
              </div>
            )}
          </div>
          
          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Popular Pressure Unit Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Pascal to Bar</h4>
                <p className="text-sm text-gray-600">1 Pa = 0.00001 bar</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">PSI to Pascal</h4>
                <p className="text-sm text-gray-600">1 psi = 6894.76 Pa</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Atmosphere to Pascal</h4>
                <p className="text-sm text-gray-600">1 atm = 101,325 Pa</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Bar to PSI</h4>
                <p className="text-sm text-gray-600">1 bar = 14.5038 psi</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Torr to Pascal</h4>
                <p className="text-sm text-gray-600">1 Torr = 133.322 Pa</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Kilopascal to Bar</h4>
                <p className="text-sm text-gray-600">1 kPa = 0.01 bar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pressure;
