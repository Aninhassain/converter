"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Volume2 } from 'lucide-react';

const Sound = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('decibel');
  const [toUnit, setToUnit] = useState<string>('phon');

  // Sound units with conversion factors and formulas
  const soundUnits = useMemo(() => [
    { name: 'decibel', symbol: 'dB', factor: 1 },
    { name: 'phon', symbol: 'phon', factor: 1 }, // Equal to dB at 1kHz
    { name: 'neper', symbol: 'Np', factor: 8.686 }, // 1 Np = 8.686 dB
    { name: 'bel', symbol: 'B', factor: 10 }, // 1 B = 10 dB
    { name: 'sound pressure level', symbol: 'SPL', factor: 1 }, // Same as dB
    { name: 'sound power level', symbol: 'SWL', factor: 1 }, // Same as dB
    { name: 'sound intensity level', symbol: 'SIL', factor: 1 }, // Same as dB
    { name: 'pascal', symbol: 'Pa', factor: 1 }, // For sound pressure
    { name: 'micropascal', symbol: 'µPa', factor: 0.000001 },
    { name: 'watt per square meter', symbol: 'W/m²', factor: 1 }, // For sound intensity
    { name: 'milliwatt per square meter', symbol: 'mW/m²', factor: 0.001 }
  ], []);

  // Sort units by common usage
  const sortedSoundUnits = useMemo(() => {
    const commonUnits = ['decibel', 'phon', 'sound pressure level', 'pascal'];
    const units = [...soundUnits];
    units.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [soundUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const fromUnitData = soundUnits.find(unit => unit.name === fromUnit);
      const toUnitData = soundUnits.find(unit => unit.name === toUnit);
      
      if (fromUnitData && toUnitData) {
        let convertedValue: number;

        // Special conversions for sound pressure/intensity
        if ((fromUnit === 'pascal' || fromUnit === 'micropascal') && 
            (toUnit === 'decibel' || toUnit === 'sound pressure level')) {
          const p0 = 20e-6; // Reference sound pressure
          const pressure = numValue * fromUnitData.factor;
          convertedValue = 20 * Math.log10(pressure / p0);
        } else if ((fromUnit === 'decibel' || fromUnit === 'sound pressure level') && 
                   (toUnit === 'pascal' || toUnit === 'micropascal')) {
          const p0 = 20e-6; // Reference sound pressure
          convertedValue = p0 * Math.pow(10, numValue / 20) / toUnitData.factor;
        } else {
          // Standard unit conversion
          const baseValue = numValue * fromUnitData.factor;
          convertedValue = baseValue / toUnitData.factor;
        }
        
        if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 999999999) {
          setToValue(convertedValue.toExponential(6));
        } else {
          setToValue(convertedValue.toPrecision(7));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, soundUnits]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Volume2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Sound Level Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different sound measurement units and levels
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
                    {sortedSoundUnits.map((unit) => (
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
                    {sortedSoundUnits.map((unit) => (
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Common Sound Level References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Whisper</h4>
                <p className="text-sm text-gray-600">≈ 30 dB SPL</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Normal Conversation</h4>
                <p className="text-sm text-gray-600">≈ 60 dB SPL</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Rock Concert</h4>
                <p className="text-sm text-gray-600">≈ 110 dB SPL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sound;