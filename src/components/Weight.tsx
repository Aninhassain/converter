"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Weight = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const weightUnits: UnitDefinition[] = [
    { name: "kilogram", symbol: "kg", factor: 1 },
    { name: "gram", symbol: "g", factor: 0.001 },
    { name: "milligram", symbol: "mg", factor: 0.000001 },
    { name: "metric ton", symbol: "t", factor: 1000 },
    { name: "long ton", symbol: "long ton", factor: 1016.0469088 },
    { name: "short ton", symbol: "short ton", factor: 907.18474 },
    { name: "pound", symbol: "lb", factor: 0.45359237 },
    { name: "ounce", symbol: "oz", factor: 0.028349523125 },
    { name: "carat", symbol: "ct", factor: 0.0002 },
    { name: "atomic mass unit", symbol: "amu", factor: 1.66053906660e-27 },
  ];

  const quickConversions = [
    { from: "kg", to: "lb", conversion: "1 kg = 2.205 lb" },
    { from: "lb", to: "kg", conversion: "1 lb = 0.454 kg" },
    { from: "oz", to: "g", conversion: "1 oz = 28.35 g" },
    { from: "kg", to: "g", conversion: "1 kg = 1,000 g" },
    { from: "t", to: "kg", conversion: "1 metric ton = 1,000 kg" },
    { from: "lb", to: "oz", conversion: "1 lb = 16 oz" },
  ];

  return (
    <ConverterPageLayout
      title="Weight"
      subtitle="Unit Converter"
      description="Precision conversion between all standard weight and mass units with advanced visualization"
      quickConversions={quickConversions}
      footerText="Built with precision • All weight and mass units supported"
    >
      <GenericConverterCard
        title="Weight Converter"
        description="Convert between different units of weight and mass measurement."
        icon={Scale}
        units={weightUnits}
        defaultFromUnit="kilogram"
        defaultToUnit="gram"
        commonUnits={["kilogram", "gram", "pound", "ounce"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Weight;
