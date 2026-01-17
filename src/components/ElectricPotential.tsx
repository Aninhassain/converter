"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricPotential = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Volt", symbol: "V", factor: 1 },
    { name: "Kilovolt", symbol: "kV", factor: 1000 },
    { name: "Megavolt", symbol: "MV", factor: 1e6 },
    { name: "Millivolt", symbol: "mV", factor: 0.001 },
    { name: "Microvolt", symbol: "uV", factor: 1e-6 },
    { name: "Statvolt", symbol: "statV", factor: 299.792458 },
    { name: "Abvolt", symbol: "abV", factor: 1e-8 },
    { name: "Watt/Ampere", symbol: "W/A", factor: 1 },
    { name: "Joule/Coulomb", symbol: "J/C", factor: 1 },
  ];

  const quickConversions = [
    { from: "V", to: "mV", conversion: "1 V = 1000 mV" },
    { from: "kV", to: "V", conversion: "1 kV = 1000 V" },
    { from: "MV", to: "V", conversion: "1 MV = 1,000,000 V" },
    { from: "V", to: "J/C", conversion: "1 V = 1 J/C" },
    { from: "statV", to: "V", conversion: "1 statV = 299.79 V" },
    { from: "abV", to: "V", conversion: "1 abV = 1e-8 V" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Potential"
      subtitle="Unit Converter"
      description="Convert between different electric potential (voltage) units including volts, kilovolts, and statvolts."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric potential units supported"
    >
      <GenericConverterCard
        title="Electric Potential Converter"
        description="Convert between different units of electric potential measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Volt"
        defaultToUnit="Millivolt"
        commonUnits={["Volt", "Millivolt", "Kilovolt"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricPotential;
