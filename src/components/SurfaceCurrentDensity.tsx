"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SurfaceCurrentDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ampere per Square Meter", symbol: "A/m²", factor: 1 },
    { name: "Ampere per Square Centimeter", symbol: "A/cm²", factor: 10000 },
    { name: "Ampere per Square Millimeter", symbol: "A/mm²", factor: 1000000 },
    { name: "Milliampere per Square Meter", symbol: "mA/m²", factor: 0.001 },
    { name: "Microampere per Square Meter", symbol: "µA/m²", factor: 1e-6 },
    { name: "Nanoampere per Square Meter", symbol: "nA/m²", factor: 1e-9 },
    { name: "Kiloampere per Square Meter", symbol: "kA/m²", factor: 1000 },
    { name: "Abampere per Square Meter", symbol: "abA/m²", factor: 10 },
    { name: "Abampere per Square Centimeter", symbol: "abA/cm²", factor: 1000000 },
    { name: "Statampere per Square Meter", symbol: "statA/m²", factor: 3.335641e-10 },
    { name: "Statampere per Square Centimeter", symbol: "statA/cm²", factor: 3.335641e-6 },
  ];

  const quickConversions = [
    { from: "A/m²", to: "A/cm²", conversion: "1 A/m² = 0.0001 A/cm²" },
    { from: "A/m²", to: "mA/m²", conversion: "1 A/m² = 1000 mA/m²" },
    { from: "kA/m²", to: "A/m²", conversion: "1 kA/m² = 1000 A/m²" },
    { from: "abA/m²", to: "A/m²", conversion: "1 abA/m² = 10 A/m²" },
    { from: "mA/m²", to: "µA/m²", conversion: "1 mA/m² = 1000 µA/m²" },
    { from: "µA/m²", to: "nA/m²", conversion: "1 µA/m² = 1000 nA/m²" },
  ];

  return (
    <ConverterPageLayout
      title="Surface Current Density"
      subtitle="Unit Converter"
      description="Convert between different units of surface current density measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All surface current density units supported"
    >
      <GenericConverterCard
        title="Surface Current Density Converter"
        description="Convert between different units of surface current density measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="A/m²"
        defaultToUnit="A/cm²"
        commonUnits={["A/m²", "A/cm²", "mA/m²"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default SurfaceCurrentDensity;
