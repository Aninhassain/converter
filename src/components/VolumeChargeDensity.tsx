"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const VolumeChargeDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Coulomb per Cubic Meter", symbol: "C/m³", factor: 1 },
    { name: "Coulomb per Cubic Centimeter", symbol: "C/cm³", factor: 1000000 },
    { name: "Coulomb per Cubic Millimeter", symbol: "C/mm³", factor: 1000000000 },
    { name: "Millicoulomb per Cubic Meter", symbol: "mC/m³", factor: 0.001 },
    { name: "Microcoulomb per Cubic Meter", symbol: "µC/m³", factor: 1e-6 },
    { name: "Nanocoulomb per Cubic Meter", symbol: "nC/m³", factor: 1e-9 },
    { name: "Picocoulomb per Cubic Meter", symbol: "pC/m³", factor: 1e-12 },
    { name: "Statcoulomb per Cubic Meter", symbol: "statC/m³", factor: 3.335641e-10 },
    { name: "Statcoulomb per Cubic Centimeter", symbol: "statC/cm³", factor: 3.335641e-4 },
  ];

  const quickConversions = [
    { from: "C/m³", to: "C/cm³", conversion: "1 C/m³ = 1e-6 C/cm³" },
    { from: "C/m³", to: "mC/m³", conversion: "1 C/m³ = 1000 mC/m³" },
    { from: "mC/m³", to: "µC/m³", conversion: "1 mC/m³ = 1000 µC/m³" },
    { from: "µC/m³", to: "nC/m³", conversion: "1 µC/m³ = 1000 nC/m³" },
    { from: "nC/m³", to: "pC/m³", conversion: "1 nC/m³ = 1000 pC/m³" },
    { from: "C/m³", to: "statC/m³", conversion: "1 C/m³ = 2.998e9 statC/m³" },
  ];

  return (
    <ConverterPageLayout
      title="Volume Charge Density"
      subtitle="Unit Converter"
      description="Convert between different units of volume charge density measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All volume charge density units supported"
    >
      <GenericConverterCard
        title="Volume Charge Density Converter"
        description="Convert between different units of volume charge density measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="C/m³"
        defaultToUnit="C/cm³"
        commonUnits={["C/m³", "mC/m³", "µC/m³"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default VolumeChargeDensity;
