"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricCurrent = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ampere", symbol: "A", factor: 1 },
    { name: "Kiloampere", symbol: "kA", factor: 1000 },
    { name: "Milliampere", symbol: "mA", factor: 0.001 },
    { name: "Microampere", symbol: "uA", factor: 1e-6 },
    { name: "Nanoampere", symbol: "nA", factor: 1e-9 },
    { name: "Picoampere", symbol: "pA", factor: 1e-12 },
    { name: "Abampere", symbol: "abA", factor: 10 },
    { name: "Statampere", symbol: "statA", factor: 3.335641e-10 },
    { name: "Ampere-hour/second", symbol: "Ah/s", factor: 3600 },
    { name: "Coulomb/second", symbol: "C/s", factor: 1 },
    { name: "Electron/second", symbol: "e/s", factor: 1.602176634e-19 },
    { name: "EMU/second", symbol: "EMU/s", factor: 10 },
    { name: "ESU/second", symbol: "ESU/s", factor: 3.335641e-10 },
  ];

  const quickConversions = [
    { from: "A", to: "mA", conversion: "1 A = 1000 mA" },
    { from: "kA", to: "A", conversion: "1 kA = 1000 A" },
    { from: "A", to: "uA", conversion: "1 A = 1,000,000 uA" },
    { from: "abA", to: "A", conversion: "1 abA = 10 A" },
    { from: "A", to: "C/s", conversion: "1 A = 1 C/s" },
    { from: "Ah/s", to: "A", conversion: "1 Ah/s = 3600 A" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Current"
      subtitle="Unit Converter"
      description="Convert between different electric current units including amperes, milliamperes, and abamperes."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric current units supported"
    >
      <GenericConverterCard
        title="Electric Current Converter"
        description="Convert between different units of electric current measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Ampere"
        defaultToUnit="Milliampere"
        commonUnits={["Ampere", "Milliampere", "Kiloampere"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricCurrent;
