"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const HeatDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Joule/cubic meter", symbol: "J/m³", factor: 1 },
    { name: "Megajoule/cubic meter", symbol: "MJ/m³", factor: 1e6 },
    { name: "Calorie/cubic centimeter", symbol: "cal/cm³", factor: 4.184e6 },
    { name: "BTU/cubic foot", symbol: "BTU/ft³", factor: 37258.6 },
  ];

  const quickConversions = [
    { from: "MJ/m³", to: "J/m³", conversion: "1 MJ/m³ = 1,000,000 J/m³" },
    { from: "cal/cm³", to: "J/m³", conversion: "1 cal/cm³ ≈ 4,184,000 J/m³" },
    { from: "BTU/ft³", to: "J/m³", conversion: "1 BTU/ft³ ≈ 37,259 J/m³" },
    { from: "J/m³", to: "MJ/m³", conversion: "1,000,000 J/m³ = 1 MJ/m³" },
    { from: "MJ/m³", to: "BTU/ft³", conversion: "1 MJ/m³ ≈ 26.84 BTU/ft³" },
    { from: "cal/cm³", to: "BTU/ft³", conversion: "1 cal/cm³ ≈ 112.37 BTU/ft³" },
  ];

  return (
    <ConverterPageLayout
      title="Heat Density"
      subtitle="Unit Converter"
      description="Convert heat density between J/m³, MJ/m³, cal/cm³, and BTU/ft³ with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All heat density units supported"
    >
      <GenericConverterCard
        title="Heat Density Converter"
        description="Convert between different units of heat density measurement."
        icon={Flame}
        units={units}
        defaultFromUnit="Joule/cubic meter"
        defaultToUnit="Calorie/cubic centimeter"
        commonUnits={["Joule/cubic meter", "Megajoule/cubic meter", "BTU/cubic foot"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default HeatDensity;
