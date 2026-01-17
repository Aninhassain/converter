"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricConductance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Siemens", symbol: "S", factor: 1 },
    { name: "Millisiemens", symbol: "mS", factor: 0.001 },
    { name: "Microsiemens", symbol: "uS", factor: 1e-6 },
    { name: "Kilosiemens", symbol: "kS", factor: 1000 },
    { name: "Mho", symbol: "mho", factor: 1 },
  ];

  const quickConversions = [
    { from: "S", to: "mS", conversion: "1 S = 1000 mS" },
    { from: "mS", to: "S", conversion: "1 mS = 0.001 S" },
    { from: "S", to: "uS", conversion: "1 S = 1,000,000 uS" },
    { from: "kS", to: "S", conversion: "1 kS = 1000 S" },
    { from: "S", to: "mho", conversion: "1 S = 1 mho" },
    { from: "uS", to: "mS", conversion: "1 uS = 0.001 mS" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Conductance"
      subtitle="Unit Converter"
      description="Convert between different electric conductance units including siemens, millisiemens, and mho."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric conductance units supported"
    >
      <GenericConverterCard
        title="Electric Conductance Converter"
        description="Convert between different units of electric conductance measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Siemens"
        defaultToUnit="Millisiemens"
        commonUnits={["Siemens", "Millisiemens", "Microsiemens"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricConductance;
