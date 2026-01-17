"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Angle = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Degree", symbol: "°", factor: 1 },
    { name: "Radian", symbol: "rad", factor: 180 / Math.PI },
    { name: "Grad", symbol: "^g", factor: 0.9 },
    { name: "Minute", symbol: "'", factor: 1/60 },
    { name: "Second", symbol: "\"", factor: 1/3600 },
    { name: "Gon", symbol: "gon", factor: 0.9 },
    { name: "Sign", symbol: "sign", factor: 30 },
    { name: "Mil", symbol: "mil", factor: 0.05625 },
    { name: "Revolution", symbol: "r", factor: 360 },
    { name: "Circle", symbol: "circle", factor: 360 },
    { name: "Turn", symbol: "turn", factor: 360 },
    { name: "Quadrant", symbol: "quadrant", factor: 90 },
    { name: "Right Angle", symbol: "right angle", factor: 90 },
    { name: "Sextant", symbol: "sextant", factor: 60 },
  ];

  const quickConversions = [
    { from: "Degree", to: "Radian", conversion: "1° = 0.01745 rad" },
    { from: "Radian", to: "Degree", conversion: "1 rad = 57.296°" },
    { from: "Degree", to: "Grad", conversion: "1° = 1.111 grad" },
    { from: "Revolution", to: "Degree", conversion: "1 r = 360°" },
    { from: "Degree", to: "Minute", conversion: "1° = 60'" },
    { from: "Minute", to: "Second", conversion: "1' = 60\"" },
  ];

  return (
    <ConverterPageLayout
      title="Angle"
      subtitle="Unit Converter"
      description="Convert between different angle measurement units including degrees, radians, gradians, and more."
      quickConversions={quickConversions}
      footerText="Built with precision • All angle units supported"
    >
      <GenericConverterCard
        title="Angle Converter"
        description="Convert between different units of angle measurement."
        icon={RotateCcw}
        units={units}
        defaultFromUnit="Degree"
        defaultToUnit="Radian"
        commonUnits={["Degree", "Radian", "Grad"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Angle;
