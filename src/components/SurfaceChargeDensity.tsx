"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SurfaceChargeDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Coulomb per Square Meter", symbol: "C/m²", factor: 1 },
    { name: "Coulomb per Square Centimeter", symbol: "C/cm²", factor: 10000 },
    { name: "Coulomb per Square Millimeter", symbol: "C/mm²", factor: 1000000 },
    { name: "Millicoulomb per Square Meter", symbol: "mC/m²", factor: 0.001 },
    { name: "Microcoulomb per Square Meter", symbol: "µC/m²", factor: 1e-6 },
    { name: "Nanocoulomb per Square Meter", symbol: "nC/m²", factor: 1e-9 },
    { name: "Picocoulomb per Square Meter", symbol: "pC/m²", factor: 1e-12 },
    { name: "Statcoulomb per Square Meter", symbol: "statC/m²", factor: 3.335641e-10 },
    { name: "Statcoulomb per Square Centimeter", symbol: "statC/cm²", factor: 3.335641e-6 },
  ];

  const quickConversions = [
    { from: "C/m²", to: "C/cm²", conversion: "1 C/m² = 0.0001 C/cm²" },
    { from: "C/m²", to: "mC/m²", conversion: "1 C/m² = 1000 mC/m²" },
    { from: "mC/m²", to: "µC/m²", conversion: "1 mC/m² = 1000 µC/m²" },
    { from: "µC/m²", to: "nC/m²", conversion: "1 µC/m² = 1000 nC/m²" },
    { from: "nC/m²", to: "pC/m²", conversion: "1 nC/m² = 1000 pC/m²" },
    { from: "C/m²", to: "statC/m²", conversion: "1 C/m² = 2.998e9 statC/m²" },
  ];

  return (
    <ConverterPageLayout
      title="Surface Charge Density"
      subtitle="Unit Converter"
      description="Convert between different units of surface charge density measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All surface charge density units supported"
    >
      <GenericConverterCard
        title="Surface Charge Density Converter"
        description="Convert between different units of surface charge density measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="C/m²"
        defaultToUnit="C/cm²"
        commonUnits={["C/m²", "mC/m²", "µC/m²"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default SurfaceChargeDensity;
