"use client";

import { useState } from "react";
import { Gauge } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Pressure = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const pressureUnits: UnitDefinition[] = [
    { name: "pascal", symbol: "Pa", factor: 1 },
    { name: "kilopascal", symbol: "kPa", factor: 1000 },
    { name: "megapascal", symbol: "MPa", factor: 1e6 },
    { name: "bar", symbol: "bar", factor: 100000 },
    { name: "millibar", symbol: "mbar", factor: 100 },
    { name: "psi", symbol: "psi", factor: 6894.76 },
    { name: "atmosphere", symbol: "atm", factor: 101325 },
    { name: "torr", symbol: "Torr", factor: 133.322 },
    { name: "mmHg", symbol: "mmHg", factor: 133.322 },
    { name: "inHg", symbol: "inHg", factor: 3386.39 },
  ];

  const quickConversions = [
    { from: "Pa", to: "bar", conversion: "1 Pa = 0.00001 bar" },
    { from: "psi", to: "Pa", conversion: "1 psi = 6894.76 Pa" },
    { from: "atm", to: "Pa", conversion: "1 atm = 101,325 Pa" },
    { from: "bar", to: "psi", conversion: "1 bar = 14.504 psi" },
    { from: "Torr", to: "Pa", conversion: "1 Torr = 133.32 Pa" },
    { from: "kPa", to: "bar", conversion: "1 kPa = 0.01 bar" },
  ];

  return (
    <ConverterPageLayout
      title="Pressure"
      subtitle="Unit Converter"
      description="Precision conversion between all standard pressure units"
      quickConversions={quickConversions}
      footerText="Built with precision • All pressure units supported"
    >
      <GenericConverterCard
        title="Pressure Converter"
        description="Convert between different units of pressure measurement."
        icon={Gauge}
        units={pressureUnits}
        defaultFromUnit="pascal"
        defaultToUnit="kilopascal"
        commonUnits={["pascal", "kilopascal", "bar", "psi", "atmosphere"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Pressure;
