"use client";

import { useState } from "react";
import { Droplets } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Density = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const densityUnits: UnitDefinition[] = [
    { name: "kilogram per cubic meter", symbol: "kg/m³", factor: 1 },
    { name: "gram per cubic centimeter", symbol: "g/cm³", factor: 1000 },
    { name: "kilogram per liter", symbol: "kg/L", factor: 1000 },
    { name: "gram per milliliter", symbol: "g/mL", factor: 1000 },
    { name: "pound per cubic foot", symbol: "lb/ft³", factor: 16.0185 },
    { name: "pound per cubic inch", symbol: "lb/in³", factor: 27679.9 },
    { name: "ounce per cubic inch", symbol: "oz/in³", factor: 1729.99 },
  ];

  const quickConversions = [
    { from: "g/cm³", to: "kg/m³", conversion: "1 g/cm³ = 1000 kg/m³" },
    { from: "kg/L", to: "g/cm³", conversion: "1 kg/L = 1 g/cm³" },
    { from: "lb/ft³", to: "kg/m³", conversion: "1 lb/ft³ = 16.02 kg/m³" },
    { from: "g/mL", to: "kg/m³", conversion: "1 g/mL = 1000 kg/m³" },
    { from: "lb/in³", to: "g/cm³", conversion: "1 lb/in³ = 27.68 g/cm³" },
    { from: "kg/m³", to: "lb/ft³", conversion: "1 kg/m³ = 0.062 lb/ft³" },
  ];

  return (
    <ConverterPageLayout
      title="Density"
      subtitle="Unit Converter"
      description="Precision conversion between all standard density units"
      quickConversions={quickConversions}
      footerText="Built with precision • All density units supported"
    >
      <GenericConverterCard
        title="Density Converter"
        description="Convert between different units of density measurement."
        icon={Droplets}
        units={densityUnits}
        defaultFromUnit="gram per cubic centimeter"
        defaultToUnit="kilogram per cubic meter"
        commonUnits={["kilogram per cubic meter", "gram per cubic centimeter", "kilogram per liter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Density;
