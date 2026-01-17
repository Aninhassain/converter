"use client";

import { useState } from "react";
import { Box } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SpecificVolume = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Cubic Meter per Kilogram", symbol: "m³/kg", factor: 1 },
    { name: "Cubic Centimeter per Gram", symbol: "cm³/g", factor: 0.001 },
    { name: "Cubic Foot per Pound", symbol: "ft³/lb", factor: 0.0624279 },
    { name: "Liter per Kilogram", symbol: "L/kg", factor: 0.001 },
    { name: "Gallon per Pound", symbol: "gal/lb", factor: 0.008345 },
  ];

  const quickConversions = [
    { from: "m³/kg", to: "cm³/g", conversion: "1 m³/kg = 1000 cm³/g" },
    { from: "m³/kg", to: "L/kg", conversion: "1 m³/kg = 1000 L/kg" },
    { from: "m³/kg", to: "ft³/lb", conversion: "1 m³/kg = 16.02 ft³/lb" },
    { from: "cm³/g", to: "L/kg", conversion: "1 cm³/g = 1 L/kg" },
    { from: "ft³/lb", to: "gal/lb", conversion: "1 ft³/lb = 7.48 gal/lb" },
    { from: "L/kg", to: "gal/lb", conversion: "1 L/kg = 0.12 gal/lb" },
  ];

  return (
    <ConverterPageLayout
      title="Specific Volume"
      subtitle="Unit Converter"
      description="Convert between different units of specific volume measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All specific volume units supported"
    >
      <GenericConverterCard
        title="Specific Volume Converter"
        description="Convert between different units of specific volume measurement."
        icon={Box}
        units={units}
        defaultFromUnit="m³/kg"
        defaultToUnit="cm³/g"
        commonUnits={["m³/kg", "cm³/g", "ft³/lb"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default SpecificVolume;
