"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricCharge = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Coulomb", symbol: "C", factor: 1 },
    { name: "Megacoulomb", symbol: "MC", factor: 1e6 },
    { name: "Kilocoulomb", symbol: "kC", factor: 1e3 },
    { name: "Millicoulomb", symbol: "mC", factor: 1e-3 },
    { name: "Microcoulomb", symbol: "uC", factor: 1e-6 },
    { name: "Nanocoulomb", symbol: "nC", factor: 1e-9 },
    { name: "Picocoulomb", symbol: "pC", factor: 1e-12 },
    { name: "Ampere-hour", symbol: "Ah", factor: 3600 },
    { name: "Ampere-minute", symbol: "A-min", factor: 60 },
    { name: "Ampere-second", symbol: "A-s", factor: 1 },
    { name: "Faraday", symbol: "F", factor: 96485.3321233100184 },
    { name: "Elementary Charge", symbol: "e", factor: 1.602176634e-19 },
    { name: "Statcoulomb", symbol: "statC", factor: 3.335641e-10 },
    { name: "Franklin", symbol: "Fr", factor: 3.335641e-10 },
  ];

  const quickConversions = [
    { from: "C", to: "mC", conversion: "1 C = 1000 mC" },
    { from: "Ah", to: "C", conversion: "1 Ah = 3600 C" },
    { from: "C", to: "A-s", conversion: "1 C = 1 A-s" },
    { from: "Faraday", to: "C", conversion: "1 F = 96,485 C" },
    { from: "e", to: "C", conversion: "1 e = 1.602e-19 C" },
    { from: "statC", to: "C", conversion: "1 statC = 3.336e-10 C" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Charge"
      subtitle="Unit Converter"
      description="Convert between different electric charge units including coulombs, ampere-hours, and faradays."
      quickConversions={quickConversions}
      footerText="Built with precision - All electric charge units supported"
    >
      <GenericConverterCard
        title="Electric Charge Converter"
        description="Convert between different units of electric charge measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Coulomb"
        defaultToUnit="Millicoulomb"
        commonUnits={["Coulomb", "Millicoulomb", "Ampere-hour"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricCharge;
