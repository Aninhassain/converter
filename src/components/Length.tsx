"use client";

import { useState } from "react";
import { Ruler } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Length = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const lengthUnits: UnitDefinition[] = [
    { name: "meter", symbol: "m", factor: 1 },
    { name: "kilometer", symbol: "km", factor: 1000 },
    { name: "centimeter", symbol: "cm", factor: 0.01 },
    { name: "millimeter", symbol: "mm", factor: 0.001 },
    { name: "micrometer", symbol: "μm", factor: 0.000001 },
    { name: "nanometer", symbol: "nm", factor: 0.000000001 },
    { name: "mile", symbol: "mi", factor: 1609.344 },
    { name: "yard", symbol: "yd", factor: 0.9144 },
    { name: "foot", symbol: "ft", factor: 0.3048 },
    { name: "inch", symbol: "in", factor: 0.0254 },
    { name: "light year", symbol: "ly", factor: 9.461e15 },
  ];

  const quickConversions = [
    { from: "km", to: "mi", conversion: "1 km = 0.621 mi" },
    { from: "m", to: "ft", conversion: "1 m = 3.281 ft" },
    { from: "cm", to: "in", conversion: "1 cm = 0.394 in" },
    { from: "mi", to: "km", conversion: "1 mi = 1.609 km" },
    { from: "ft", to: "m", conversion: "1 ft = 0.305 m" },
    { from: "in", to: "cm", conversion: "1 in = 2.54 cm" },
  ];

  return (
    <ConverterPageLayout
      title="Length"
      subtitle="Unit Converter"
      description="Precision conversion between all standard length and distance units"
      quickConversions={quickConversions}
      footerText="Built with precision • All length units supported"
    >
      <GenericConverterCard
        title="Length Converter"
        description="Convert between different units of length measurement."
        icon={Ruler}
        units={lengthUnits}
        defaultFromUnit="meter"
        defaultToUnit="kilometer"
        commonUnits={["meter", "kilometer", "mile", "foot", "inch"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Length;
