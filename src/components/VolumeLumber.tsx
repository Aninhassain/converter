"use client";

import { useState } from "react";
import { Box } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const VolumeLumber = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  // Using cubic meter as base unit
  // 1 board foot = 144 cubic inches, 1 m³ = 61023.7441 in³
  const units: UnitDefinition[] = [
    { name: "Cubic Meter", symbol: "m³", factor: 1 },
    { name: "Board Foot", symbol: "bd ft", factor: 144 / 61023.7441 },
    { name: "Cubic Inch", symbol: "in³", factor: 1 / 61023.7441 },
    { name: "Cubic Foot", symbol: "ft³", factor: 1728 / 61023.7441 },
  ];

  const quickConversions = [
    { from: "bd ft", to: "in³", conversion: "1 bd ft = 144 in³" },
    { from: "ft³", to: "bd ft", conversion: "1 ft³ = 12 bd ft" },
    { from: "m³", to: "ft³", conversion: "1 m³ = 35.31 ft³" },
    { from: "m³", to: "bd ft", conversion: "1 m³ = 423.78 bd ft" },
    { from: "ft³", to: "in³", conversion: "1 ft³ = 1728 in³" },
    { from: "m³", to: "in³", conversion: "1 m³ = 61,023.74 in³" },
  ];

  return (
    <ConverterPageLayout
      title="Volume (Lumber)"
      subtitle="Unit Converter"
      description="Convert between different units of lumber volume measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All lumber volume units supported"
    >
      <GenericConverterCard
        title="Lumber Volume Converter"
        description="Convert between different units of lumber volume measurement."
        icon={Box}
        units={units}
        defaultFromUnit="bd ft"
        defaultToUnit="m³"
        commonUnits={["bd ft", "ft³", "m³"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default VolumeLumber;
