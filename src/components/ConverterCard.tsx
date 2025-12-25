"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Sun, RotateCcw, ArrowLeftRight } from 'lucide-react';

export interface ConversionHistory {
  from: string;
  to: string;
  fromValue: string;
  toValue: string;
  timestamp: Date;
}

interface ConverterCardProps {
  onConvert?: (conversion: ConversionHistory) => void;
}

const ConverterCard = ({ onConvert }: ConverterCardProps) => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'candela/square-meter';
  const defaultToUnit = 'nit';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);
  const lastConversionRef = useRef<string>('');

  // Luminance units with conversion factors (relative to cd/m²)
  const luminanceUnits = useMemo(() => [
    { name: 'candela/square-meter', symbol: 'cd/m²', factor: 1 },
    { name: 'nit', symbol: 'nt', factor: 1 },
    { name: 'footlambert', symbol: 'fL', factor: 3.426259 },
    { name: 'lambert', symbol: 'L', factor: 3183.099 },
    { name: 'stilb', symbol: 'sb', factor: 10000 },
    { name: 'apostilb', symbol: 'asb', factor: 0.3183099 },
    { name: 'candela/square-foot', symbol: 'cd/ft²', factor: 10.76391 },
    { name: 'kilocandela/square-meter', symbol: 'kcd/m²', factor: 1000 },
    { name: 'millilambert', symbol: 'mL', factor: 3.183099 },
    { name: 'skot', symbol: 'sk', factor: 0.0003183099 },
    { name: 'blondel', symbol: 'blondel', factor: 0.3183099 },
  ], []);

  const sortedLuminanceUnits = useMemo(() => {
    const commonUnits = ['candela/square-meter', 'nit', 'footlambert'];
    const units = [...luminanceUnits];
    units.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return units;
  }, [luminanceUnits]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue) && fromValue !== '') {
      const fromUnitData = luminanceUnits.find(unit => unit.name === fromUnit);
      const toUnitData = luminanceUnits.find(unit => unit.name === toUnit);
      
      if (fromUnitData && toUnitData) {
        const baseValue = numValue * fromUnitData.factor;
        const convertedValue = baseValue / toUnitData.factor;
        
        let newToValue: string;
        if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 999999999) {
          newToValue = convertedValue.toExponential(6);
        } else {
          newToValue = convertedValue.toPrecision(7);
        }
        
        setToValue(newToValue);

        // Trigger conversion history only when conversion is complete and different from last
        const conversionKey = `${fromValue}-${fromUnit}-${toUnit}`;
        if (onConvert && fromValue && newToValue && conversionKey !== lastConversionRef.current) {
          lastConversionRef.current = conversionKey;
          onConvert({
            from: `${fromValue} ${fromUnitData.symbol}`,
            to: `${newToValue} ${toUnitData.symbol}`,
            fromValue,
            toValue: newToValue,
            timestamp: new Date(),
          });
        }
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, luminanceUnits]);

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

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setToValue(defaultToValue);
    setFromUnit(defaultFromUnit);
    setToUnit(defaultToUnit);
  };

  const getUnitDisplayName = (unitName: string) => {
    const unit = luminanceUnits.find(u => u.name === unitName);
    return unit ? `${unit.name} [${unit.symbol}]` : unitName;
  };

  return (
    <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-6 md:p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20">
          <Sun className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Luminance Converter</h2>
      </div>
      <p className="text-muted-foreground mb-6">Convert between different luminance units.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] items-start gap-4 lg:gap-6">
        {/* From Section */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-foreground">From:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleFromValueChange(e.target.value)}
            placeholder="Enter value"
            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg text-foreground placeholder:text-muted-foreground"
          />
          <select
            value={fromUnit}
            onChange={(e) => handleFromUnitChange(e.target.value)}
            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg text-foreground"
          >
            {sortedLuminanceUnits.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {getUnitDisplayName(unit.name)}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center pt-8">
          <button
            onClick={swapUnits}
            className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            title="Swap units"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To Section */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-foreground">To:</label>
          <input
            type="text"
            value={toValue}
            readOnly
            placeholder="Result will appear here"
            className="w-full px-4 py-3 bg-background/30 border border-border rounded-lg text-lg text-foreground placeholder:text-muted-foreground"
          />
          <select
            value={toUnit}
            onChange={(e) => handleToUnitChange(e.target.value)}
            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg text-foreground"
          >
            {sortedLuminanceUnits.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {getUnitDisplayName(unit.name)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary font-semibold rounded-full inline-flex items-center transition-colors"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </button>
      </div>

      {/* Conversion Result */}
      {fromValue && toValue && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-center text-foreground">
            <span className="font-semibold">{fromValue}</span>{" "}
            {luminanceUnits.find(u => u.name === fromUnit)?.symbol} ={" "}
            <span className="font-semibold text-primary">{toValue}</span>{" "}
            {luminanceUnits.find(u => u.name === toUnit)?.symbol}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConverterCard;

