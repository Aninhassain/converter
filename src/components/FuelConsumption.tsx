"use client";

import { useState, useCallback } from "react";
import { Fuel } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const FuelConsumption = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Meter per Liter", symbol: "m/L", factor: 100000 },
    { name: "Kilometer per Liter", symbol: "km/L", factor: 100 },
    { name: "Liter per 100 km", symbol: "L/100 km", factor: 1 },
    { name: "Liter per Kilometer", symbol: "L/km", factor: 0.01 },
    { name: "Mile per Gallon (US)", symbol: "mpg (US)", factor: 235.214583 },
    { name: "Gallon per 100 Mile (US)", symbol: "gal/100 mi (US)", factor: 2.35214583 },
    { name: "Mile per Gallon (UK)", symbol: "mpg (UK)", factor: 282.480936 },
    { name: "Gallon per 100 Mile (UK)", symbol: "gal/100 mi (UK)", factor: 2.82480936 },
    { name: "Meter per Cubic Meter", symbol: "m/m3", factor: 100000 },
    { name: "Kilometer per Cubic Meter", symbol: "km/m3", factor: 100 },
    { name: "Nautical Mile per Liter", symbol: "n.mile/L", factor: 185.2 },
    { name: "Nautical Mile per Gallon (US)", symbol: "n.mile/gal (US)", factor: 204.545 },
    { name: "Nautical Mile per Gallon (UK)", symbol: "n.mile/gal (UK)", factor: 245.454 },
  ];

  const customConvert = useCallback((value: number, from: string, to: string): number => {
    if (from === to) return value;

    let litersPer100km: number;

    if (from === "Liter per 100 km") {
      litersPer100km = value;
    } else if (from === "Liter per Kilometer") {
      litersPer100km = value * 100;
    } else if (from === "Kilometer per Liter") {
      litersPer100km = 100 / value;
    } else if (from === "Meter per Liter") {
      litersPer100km = 100000 / value;
    } else if (from === "Mile per Gallon (US)") {
      litersPer100km = 235.214583 / value;
    } else if (from === "Gallon per 100 Mile (US)") {
      litersPer100km = value * 2.35214583;
    } else if (from === "Mile per Gallon (UK)") {
      litersPer100km = 282.480936 / value;
    } else if (from === "Gallon per 100 Mile (UK)") {
      litersPer100km = value * 2.82480936;
    } else if (from === "Nautical Mile per Liter") {
      litersPer100km = 185.2 / value;
    } else if (from === "Nautical Mile per Gallon (US)") {
      litersPer100km = 204.545 / value;
    } else if (from === "Nautical Mile per Gallon (UK)") {
      litersPer100km = 245.454 / value;
    } else {
      litersPer100km = value;
    }

    if (to === "Liter per 100 km") {
      return litersPer100km;
    } else if (to === "Liter per Kilometer") {
      return litersPer100km / 100;
    } else if (to === "Kilometer per Liter") {
      return 100 / litersPer100km;
    } else if (to === "Meter per Liter") {
      return 100000 / litersPer100km;
    } else if (to === "Mile per Gallon (US)") {
      return 235.214583 / litersPer100km;
    } else if (to === "Gallon per 100 Mile (US)") {
      return litersPer100km / 2.35214583;
    } else if (to === "Mile per Gallon (UK)") {
      return 282.480936 / litersPer100km;
    } else if (to === "Gallon per 100 Mile (UK)") {
      return litersPer100km / 2.82480936;
    } else if (to === "Nautical Mile per Liter") {
      return 185.2 / litersPer100km;
    } else if (to === "Nautical Mile per Gallon (US)") {
      return 204.545 / litersPer100km;
    } else if (to === "Nautical Mile per Gallon (UK)") {
      return 245.454 / litersPer100km;
    }
    return litersPer100km;
  }, []);

  const quickConversions = [
    { from: "L/100 km", to: "mpg (US)", conversion: "Divide 235.21 by L/100km" },
    { from: "mpg (US)", to: "L/100 km", conversion: "Divide 235.21 by mpg" },
    { from: "L/100 km", to: "mpg (UK)", conversion: "Divide 282.48 by L/100km" },
    { from: "km/L", to: "L/100 km", conversion: "Divide 100 by km/L" },
    { from: "30 mpg (US)", to: "L/100 km", conversion: "7.84 L/100 km" },
    { from: "8 L/100 km", to: "mpg (US)", conversion: "29.4 mpg (US)" },
  ];

  return (
    <ConverterPageLayout
      title="Fuel Consumption"
      subtitle="Unit Converter"
      description="Convert between different fuel consumption and efficiency units including L/100km, mpg, and km/L."
      quickConversions={quickConversions}
      footerText="Built with precision - All fuel consumption units supported"
    >
      <GenericConverterCard
        title="Fuel Consumption Converter"
        description="Convert between different units of fuel consumption measurement."
        icon={Fuel}
        units={units}
        defaultFromUnit="Liter per 100 km"
        defaultToUnit="Mile per Gallon (US)"
        commonUnits={["Liter per 100 km", "Mile per Gallon (US)", "Kilometer per Liter"]}
        onConvert={handleConvert}
        customConvert={customConvert}
      />
    </ConverterPageLayout>
  );
};

export default FuelConsumption;
