"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Waves, RotateCcw } from 'lucide-react';

const FrequencyWavelength = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'hertz';
  const defaultToUnit = 'meter';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);
  const [conversionType, setConversionType] = useState<'frequency' | 'wavelength'>('frequency');

  // Constants
  const SPEED_OF_LIGHT = 299792458; // Speed of light in meters per second

  // Units with conversion factors
  const frequencyUnits = useMemo(() => [
    { name: 'hertz', symbol: 'Hz', factor: 1 },
    { name: 'kilohertz', symbol: 'kHz', factor: 1e3 },
    { name: 'megahertz', symbol: 'MHz', factor: 1e6 },
    { name: 'gigahertz', symbol: 'GHz', factor: 1e9 },
    { name: 'terahertz', symbol: 'THz', factor: 1e12 }
  ], []);

  const wavelengthUnits = useMemo(() => [
    { name: 'meter', symbol: 'm', factor: 1 },
    { name: 'centimeter', symbol: 'cm', factor: 0.01 },
    { name: 'millimeter', symbol: 'mm', factor: 0.001 },
    { name: 'micrometer', symbol: 'μm', factor: 1e-6 },
    { name: 'nanometer', symbol: 'nm', factor: 1e-9 },
    { name: 'angstrom', symbol: 'Å', factor: 1e-10 },
    { name: 'picometer', symbol: 'pm', factor: 1e-12 }
  ], []);

  // Get current units based on conversion type
  const currentUnits = useMemo(() => {
    return conversionType === 'frequency' ? frequencyUnits : wavelengthUnits;
  }, [conversionType, frequencyUnits, wavelengthUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      let result: number | undefined;
      
      if (conversionType === 'frequency') {
        // Convert input frequency to Hz
        const fromUnitData = frequencyUnits.find(unit => unit.name === fromUnit);
        const toUnitData = wavelengthUnits.find(unit => unit.name === toUnit);
        if (fromUnitData && toUnitData) {
          const frequencyInHz = numValue * fromUnitData.factor;
          const wavelengthInMeters = SPEED_OF_LIGHT / frequencyInHz;
          result = wavelengthInMeters / toUnitData.factor;
        }
      } else {
        // Convert input wavelength to meters
        const fromUnitData = wavelengthUnits.find(unit => unit.name === fromUnit);
        const toUnitData = frequencyUnits.find(unit => unit.name === toUnit);
        if (fromUnitData && toUnitData) {
          const wavelengthInMeters = numValue * fromUnitData.factor;
          const frequencyInHz = SPEED_OF_LIGHT / wavelengthInMeters;
          result = frequencyInHz / toUnitData.factor;
        }
      }

      if (result !== undefined) {
        if (Math.abs(result) < 0.000001 || Math.abs(result) > 999999999) {
          setToValue(result.toExponential(6));
        } else {
          setToValue(result.toPrecision(7));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, conversionType, frequencyUnits, wavelengthUnits]);

  const handleFromValueChange = useCallback((value: string) => {
    setFromValue(value);
  }, []);

  const handleFromUnitChange = useCallback((unit: string) => {
    setFromUnit(unit);
  }, []);

  const handleToUnitChange = useCallback((unit: string) => {
    setToUnit(unit);
  }, []);

  const toggleConversionType = useCallback(() => {
    setConversionType(prev => prev === 'frequency' ? 'wavelength' : 'frequency');
    // Reset units to default for the new conversion type
    if (conversionType === 'frequency') {
      setFromUnit('meter');
      setToUnit('hertz');
    } else {
      setFromUnit('hertz');
      setToUnit('meter');
    }
  }, [conversionType]);

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setToValue(defaultToValue);
    setFromUnit(defaultFromUnit);
    setToUnit(defaultToUnit);
    setConversionType('frequency');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Waves className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Frequency & Wavelength Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between frequency and wavelength using the speed of light
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Conversion Type Toggle */}
            <div className="mb-6">
              <div className="flex justify-center gap-4">
                <button
                  onClick={toggleConversionType}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    conversionType === 'frequency'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Frequency to Wavelength
                </button>
                <button
                  onClick={toggleConversionType}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    conversionType === 'wavelength'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Wavelength to Frequency
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* From Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From ({conversionType === 'frequency' ? 'Frequency' : 'Wavelength'}):
                </label>
                <div className="space-y-3">
                  <input
                    type="number"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Enter value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {currentUnits.map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name} [{unit.symbol}]
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* To Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To ({conversionType === 'frequency' ? 'Wavelength' : 'Frequency'}):
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
                    {(conversionType === 'frequency' ? wavelengthUnits : frequencyUnits).map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name} [{unit.symbol}]
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
                <button onClick={handleReset} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                </button>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && (
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {fromUnit} = 
                  <span className="font-semibold text-purple-600"> {toValue}</span> {toUnit}
                </p>
              </div>
            )}
          </div>

          {/* Common Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Common Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Visible Light</h4>
                <p className="text-sm text-gray-600">400-700 nm wavelength</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Radio Waves</h4>
                <p className="text-sm text-gray-600">3 kHz - 300 GHz frequency</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">X-rays</h4>
                <p className="text-sm text-gray-600">0.01-10 nm wavelength</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyWavelength;