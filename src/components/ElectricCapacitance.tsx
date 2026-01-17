"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricCapacitance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Farad", symbol: "F", factor: 1 },
    { name: "Millifarad", symbol: "mF", factor: 0.001 },
    { name: "Microfarad", symbol: "uF", factor: 1e-6 },
    { name: "Nanofarad", symbol: "nF", factor: 1e-9 },
    { name: "Picofarad", symbol: "pF", factor: 1e-12 },
    { name: "Kilofarad", symbol: "kF", factor: 1000 },
    { name: "Coulomb/Volt", symbol: "C/V", factor: 1 },
    { name: "Abfarad", symbol: "abF", factor: 1e9 },
    { name: "Statfarad", symbol: "statF", factor: 1.112650056e-12 },
  ];

  const quickConversions = [
    { from: "F", to: "uF", conversion: "1 F = 1,000,000 uF" },
    { from: "uF", to: "nF", conversion: "1 uF = 1000 nF" },
    { from: "nF", to: "pF", conversion: "1 nF = 1000 pF" },
    { from: "F", to: "C/V", conversion: "1 F = 1 C/V" },
    { from: "abF", to: "F", conversion: "1 abF = 1e9 F" },
    { from: "statF", to: "F", conversion: "1 statF = 1.11e-12 F" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Capacitance"
      subtitle="Unit Converter"
      description="Convert between different electric capacitance units including farads, microfarads, and picofarads."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric capacitance units supported"
    >
      <GenericConverterCard
        title="Electric Capacitance Converter"
        description="Convert between different units of electric capacitance measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Farad"
        defaultToUnit="Microfarad"
        commonUnits={["Farad", "Microfarad", "Nanofarad", "Picofarad"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricCapacitance;
