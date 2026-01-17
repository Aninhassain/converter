"use client";

import { useState } from "react";
import { Beaker } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ConcentrationSolution = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Gram/liter", symbol: "g/L", factor: 1 },
    { name: "Kilogram/cubic meter", symbol: "kg/m³", factor: 1 },
    { name: "Milligram/liter", symbol: "mg/L", factor: 0.001 },
    { name: "Microgram/liter", symbol: "µg/L", factor: 0.000001 },
    { name: "Percentage by weight", symbol: "%w/w", factor: 10 },
    { name: "Percentage by volume", symbol: "%v/v", factor: 0.1 },
    { name: "Parts per million", symbol: "ppm", factor: 0.001 },
  ];

  const quickConversions = [
    { from: "g/L", to: "mg/L", conversion: "1 g/L = 1000 mg/L" },
    { from: "%w/w", to: "g/L", conversion: "1 %w/w = 10 g/L" },
    { from: "ppm", to: "mg/L", conversion: "1 ppm = 1 mg/L" },
    { from: "g/L", to: "kg/m³", conversion: "1 g/L = 1 kg/m³" },
    { from: "mg/L", to: "µg/L", conversion: "1 mg/L = 1000 µg/L" },
    { from: "%v/v", to: "g/L", conversion: "1 %v/v = 0.1 g/L" },
  ];

  return (
    <ConverterPageLayout
      title="Concentration (Solution)"
      subtitle="Unit Converter"
      description="Convert solution concentration between g/L, mg/L, %w/w, %v/v, ppm, and more with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All concentration solution units supported"
    >
      <GenericConverterCard
        title="Concentration Converter"
        description="Convert between different units of solution concentration measurement."
        icon={Beaker}
        units={units}
        defaultFromUnit="Gram/liter"
        defaultToUnit="Percentage by weight"
        commonUnits={["Gram/liter", "Milligram/liter", "Parts per million", "Percentage by weight"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ConcentrationSolution;
