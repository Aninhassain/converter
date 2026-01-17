"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Permeability = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Square Meter", symbol: "m²", factor: 1 },
    { name: "Darcy", symbol: "D", factor: 9.869233e-13 },
    { name: "Millidarcy", symbol: "mD", factor: 9.869233e-16 },
    { name: "Microdarcy", symbol: "μD", factor: 9.869233e-19 },
    { name: "Nanodarcy", symbol: "nD", factor: 9.869233e-22 },
    { name: "Square Centimeter", symbol: "cm²", factor: 1e-4 },
    { name: "Square Millimeter", symbol: "mm²", factor: 1e-6 },
    { name: "Square Micrometer", symbol: "μm²", factor: 1e-12 },
    { name: "Square Foot", symbol: "ft²", factor: 0.092903 },
    { name: "Square Inch", symbol: "in²", factor: 0.00064516 },
  ];

  const quickConversions = [
    { from: "D", to: "mD", conversion: "1 D = 1000 mD" },
    { from: "mD", to: "μD", conversion: "1 mD = 1000 μD" },
    { from: "μD", to: "nD", conversion: "1 μD = 1000 nD" },
    { from: "m²", to: "D", conversion: "1 m² = 1.01e12 D" },
    { from: "m²", to: "cm²", conversion: "1 m² = 10,000 cm²" },
    { from: "ft²", to: "in²", conversion: "1 ft² = 144 in²" },
  ];

  return (
    <ConverterPageLayout
      title="Permeability"
      subtitle="Unit Converter"
      description="Convert between different units of permeability measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All permeability units supported"
    >
      <GenericConverterCard
        title="Permeability Converter"
        description="Convert between different units of permeability measurement."
        icon={Filter}
        units={units}
        defaultFromUnit="D"
        defaultToUnit="m²"
        commonUnits={["D", "mD", "m²"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Permeability;
