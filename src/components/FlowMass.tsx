"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const FlowMass = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kilogram/second", symbol: "kg/s", factor: 1 },
    { name: "Kilogram/hour", symbol: "kg/h", factor: 0.000278 },
    { name: "Kilogram/minute", symbol: "kg/min", factor: 0.01667 },
    { name: "Gram/second", symbol: "g/s", factor: 0.001 },
    { name: "Pound/second", symbol: "lb/s", factor: 0.453592 },
    { name: "Pound/hour", symbol: "lb/h", factor: 0.000126 },
  ];

  const quickConversions = [
    { from: "kg/s", to: "kg/h", conversion: "1 kg/s = 3600 kg/h" },
    { from: "kg/s", to: "g/s", conversion: "1 kg/s = 1000 g/s" },
    { from: "kg/h", to: "lb/h", conversion: "1 kg/h = 2.205 lb/h" },
    { from: "lb/s", to: "kg/s", conversion: "1 lb/s = 0.454 kg/s" },
    { from: "kg/min", to: "kg/h", conversion: "1 kg/min = 60 kg/h" },
    { from: "g/s", to: "kg/h", conversion: "1 g/s = 3.6 kg/h" },
  ];

  return (
    <ConverterPageLayout
      title="Mass Flow"
      subtitle="Unit Converter"
      description="Convert between different mass flow rate units including kg/s, kg/h, and lb/s."
      quickConversions={quickConversions}
      footerText="Built with precision - All mass flow units supported"
    >
      <GenericConverterCard
        title="Mass Flow Converter"
        description="Convert between different units of mass flow measurement."
        icon={Scale}
        units={units}
        defaultFromUnit="Kilogram/second"
        defaultToUnit="Kilogram/hour"
        commonUnits={["Kilogram/second", "Kilogram/hour", "Pound/second"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default FlowMass;
