"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { RotateCcw, ArrowLeftRight, LucideIcon } from 'lucide-react';

export interface UnitDefinition {
  name: string;
  symbol: string;
  factor: number;
}

export interface ConversionHistory {
  from: string;
  to: string;
  fromValue: string;
  toValue: string;
  timestamp: Date;
}

interface GenericConverterCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  units: UnitDefinition[];
  defaultFromUnit?: string;
  defaultToUnit?: string;
  defaultFromValue?: string;
  baseUnitName?: string;
  commonUnits?: string[];
  onConvert?: (conversion: ConversionHistory) => void;
  customConvert?: (value: number, from: string, to: string) => number;
}

const GenericConverterCard = ({
  title,
  description,
  icon: Icon,
  units,
  defaultFromUnit,
  defaultToUnit,
  defaultFromValue = '1',
  commonUnits = [],
  onConvert,
  customConvert,
}: GenericConverterCardProps) => {
  const defaultFrom = defaultFromUnit || units[0]?.name || '';
  const defaultTo = defaultToUnit || units[1]?.name || '';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>(defaultFrom);
  const [toUnit, setToUnit] = useState<string>(defaultTo);
  const lastConversionRef = useRef<string>('');

  const sortedUnits = useMemo(() => {
    if (commonUnits.length === 0) return units;

    const sorted = [...units];
    sorted.sort((a, b) => {
      const aCommonIndex = commonUnits.indexOf(a.name);
      const bCommonIndex = commonUnits.indexOf(b.name);
      if (aCommonIndex !== -1 && bCommonIndex !== -1) return aCommonIndex - bCommonIndex;
      if (aCommonIndex !== -1) return -1;
      if (bCommonIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
    return sorted;
  }, [units, commonUnits]);

  const convert = useCallback((value: number, from: string, to: string): number => {
    if (customConvert) {
      return customConvert(value, from, to);
    }

    if (from === to) return value;

    const fromUnitData = units.find(unit => unit.name === from);
    const toUnitData = units.find(unit => unit.name === to);

    if (!fromUnitData || !toUnitData) return value;

    const baseValue = value * fromUnitData.factor;
    return baseValue / toUnitData.factor;
  }, [units, customConvert]);

  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue) && fromValue !== '') {
      const convertedValue = convert(numValue, fromUnit, toUnit);

      let newToValue: string;
      if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 999999999) {
        newToValue = convertedValue.toExponential(6);
      } else {
        newToValue = convertedValue.toPrecision(7);
      }

      setToValue(newToValue);

      const conversionKey = `${fromValue}-${fromUnit}-${toUnit}`;
      if (onConvert && fromValue && newToValue && conversionKey !== lastConversionRef.current) {
        const fromUnitData = units.find(unit => unit.name === fromUnit);
        const toUnitData = units.find(unit => unit.name === toUnit);
        lastConversionRef.current = conversionKey;
        onConvert({
          from: `${fromValue} ${fromUnitData?.symbol || fromUnit}`,
          to: `${newToValue} ${toUnitData?.symbol || toUnit}`,
          fromValue,
          toValue: newToValue,
          timestamp: new Date(),
        });
      }
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, units, convert, onConvert]);

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
    setToValue('');
    setFromUnit(defaultFrom);
    setToUnit(defaultTo);
  };

  const getUnitDisplayName = (unitName: string) => {
    const unit = units.find(u => u.name === unitName);
    return unit ? `${unit.name} [${unit.symbol}]` : unitName;
  };

  const fromUnitData = units.find(u => u.name === fromUnit);
  const toUnitData = units.find(u => u.name === toUnit);

  return (
    <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-6 md:p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>

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
            {sortedUnits.map((unit) => (
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
            {sortedUnits.map((unit) => (
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
            {fromUnitData?.symbol || fromUnit} ={" "}
            <span className="font-semibold text-primary">{toValue}</span>{" "}
            {toUnitData?.symbol || toUnit}
          </p>
        </div>
      )}
    </div>
  );
};

export default GenericConverterCard;
