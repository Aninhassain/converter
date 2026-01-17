"use client";

import { useState } from "react";
import { CircuitBoard } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectrostaticCapacitance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Farad", symbol: "F", factor: 1 },
    { name: "Kilofarad", symbol: "kF", factor: 1e3 },
    { name: "Millifarad", symbol: "mF", factor: 1e-3 },
    { name: "Microfarad", symbol: "µF", factor: 1e-6 },
    { name: "Nanofarad", symbol: "nF", factor: 1e-9 },
    { name: "Picofarad", symbol: "pF", factor: 1e-12 },
  ];

  const quickConversions = [
    { from: "F", to: "µF", conversion: "1 F = 1,000,000 µF" },
    { from: "µF", to: "nF", conversion: "1 µF = 1,000 nF" },
    { from: "nF", to: "pF", conversion: "1 nF = 1,000 pF" },
    { from: "mF", to: "µF", conversion: "1 mF = 1,000 µF" },
    { from: "µF", to: "pF", conversion: "1 µF = 1,000,000 pF" },
    { from: "kF", to: "F", conversion: "1 kF = 1,000 F" },
  ];

  return (
    <ConverterPageLayout
      title="Electrostatic Capacitance"
      subtitle="Unit Converter"
      description="Convert between farad, microfarad, nanofarad, picofarad, and more with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All capacitance units supported"
    >
      <GenericConverterCard
        title="Capacitance Converter"
        description="Convert between different units of electrostatic capacitance measurement."
        icon={CircuitBoard}
        units={units}
        defaultFromUnit="Farad"
        defaultToUnit="Microfarad"
        commonUnits={["Farad", "Microfarad", "Nanofarad", "Picofarad"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectrostaticCapacitance;
