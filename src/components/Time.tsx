"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Clock } from 'lucide-react';
import Head from 'next/head';

const Time = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('second');
  const [toUnit, setToUnit] = useState<string>('minute');

  // Time units with conversion factors (relative to seconds)
  const timeUnits = useMemo(() => [
    { name: 'millisecond', symbol: 'ms', factor: 0.001 },
    { name: 'second', symbol: 's', factor: 1 },
    { name: 'minute', symbol: 'min', factor: 60 },
    { name: 'hour', symbol: 'h', factor: 3600 },
    { name: 'day', symbol: 'd', factor: 86400 },
    { name: 'week', symbol: 'wk', factor: 604800 },
    { name: 'month', symbol: 'mo', factor: 2629746 }, // average month (365.2425/12 days)
    { name: 'year', symbol: 'y', factor: 31556952 }, // average Gregorian year (365.2425 days)
    { name: 'decade', symbol: 'dec', factor: 315569520 },
    { name: 'century', symbol: 'cent', factor: 3155695200 },
    { name: 'millennium', symbol: 'k', factor: 31556952000 },
    { name: 'microsecond', symbol: 'μs', factor: 0.000001 },
    { name: 'nanosecond', symbol: 'ns', factor: 1e-9 },
    { name: 'picosecond', symbol: 'ps', factor: 1e-12 },
    { name: 'femtosecond', symbol: 'fs', factor: 1e-15 },
    { name: 'attosecond', symbol: 'as', factor: 1e-18 },
    // Special time units
    { name: 'fortnight', symbol: 'fn', factor: 1209600 },
    { name: 'year (leap)', symbol: 'y', factor: 31622400 },
    { name: 'year (Julian)', symbol: 'y', factor: 31557600 },
    { name: 'year (tropical)', symbol: 'y', factor: 31556925.216 },
    { name: 'year (sidereal)', symbol: 'y', factor: 31558149.504 },
    { name: 'day (sidereal)', symbol: 'd', factor: 86164.09054 },
    { name: 'hour (sidereal)', symbol: 'h', factor: 3590.170225 },
    { name: 'minute (sidereal)', symbol: 'min', factor: 59.83617042 },
    { name: 'second (sidereal)', symbol: 's', factor: 0.9972695671 },
  ], []);

  // Sort units by common usage, then alphabetically
  const sortedTimeUnits = useMemo(() => {
    const commonUnits = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
    const units = [...timeUnits];
    units.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [timeUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const fromUnitData = timeUnits.find(unit => unit.name === fromUnit);
      const toUnitData = timeUnits.find(unit => unit.name === toUnit);
      
      if (fromUnitData && toUnitData) {
        // Convert to seconds first, then to target unit
        const valueInSeconds = numValue * fromUnitData.factor;
        const convertedValue = valueInSeconds / toUnitData.factor;
        
        // Format output based on magnitude
        if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 999999999) {
          setToValue(convertedValue.toExponential(6));
        } else {
          setToValue(convertedValue.toPrecision(7));
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, timeUnits]);

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
      <Head>
        <title>Time Converter - Convert Time Units</title>
        <meta name="description" content="Convert between different units of time including seconds, minutes, hours, days, weeks, months, years, and more specialized units." />
      </Head>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Time Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different time units with precision
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
                    {sortedTimeUnits.map((unit) => (
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
                    {sortedTimeUnits.map((unit) => (
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Common Time Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Day to Hours</h4>
                <p className="text-sm text-gray-600">1 day = 24 hours</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Hour to Minutes</h4>
                <p className="text-sm text-gray-600">1 hour = 60 minutes</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Minute to Seconds</h4>
                <p className="text-sm text-gray-600">1 minute = 60 seconds</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Week to Days</h4>
                <p className="text-sm text-gray-600">1 week = 7 days</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Month to Days</h4>
                <p className="text-sm text-gray-600">1 month ≈ 30.44 days</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-700 mb-2">Year to Days</h4>
                <p className="text-sm text-gray-600">1 year = 365.2425 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;