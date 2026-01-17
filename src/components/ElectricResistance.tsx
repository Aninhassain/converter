"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricResistance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ohm", symbol: "Ohm", factor: 1 },
    { name: "Kiloohm", symbol: "kOhm", factor: 1000 },
    { name: "Megaohm", symbol: "MOhm", factor: 1e6 },
    { name: "Milliohm", symbol: "mOhm", factor: 0.001 },
    { name: "Microohm", symbol: "uOhm", factor: 1e-6 },
    { name: "Volt/Ampere", symbol: "V/A", factor: 1 },
    { name: "Abohm", symbol: "abOhm", factor: 1e-9 },
    { name: "Statohm", symbol: "statOhm", factor: 8.987551787e11 },
    { name: "Watt/Ampere squared", symbol: "W/A2", factor: 1 },
  ];

  const quickConversions = [
    { from: "Ohm", to: "kOhm", conversion: "1 Ohm = 0.001 kOhm" },
    { from: "kOhm", to: "Ohm", conversion: "1 kOhm = 1000 Ohm" },
    { from: "MOhm", to: "Ohm", conversion: "1 MOhm = 1,000,000 Ohm" },
    { from: "Ohm", to: "V/A", conversion: "1 Ohm = 1 V/A" },
    { from: "abOhm", to: "Ohm", conversion: "1 abOhm = 1e-9 Ohm" },
    { from: "statOhm", to: "Ohm", conversion: "1 statOhm = 8.99e11 Ohm" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Resistance"
      subtitle="Unit Converter"
      description="Convert between different electric resistance units including ohms, kiloohms, and megaohms."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric resistance units supported"
    >
      <GenericConverterCard
        title="Electric Resistance Converter"
        description="Convert between different units of electric resistance measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Ohm"
        defaultToUnit="Kiloohm"
        commonUnits={["Ohm", "Kiloohm", "Megaohm"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricResistance;
