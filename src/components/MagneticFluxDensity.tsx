"use client";

import { useState } from "react";
import { Magnet } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MagneticFluxDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Tesla", symbol: "T", factor: 1 },
    { name: "Gauss", symbol: "G", factor: 1/10000 },
  ];

  const quickConversions = [
    { from: "T", to: "G", conversion: "1 T = 10,000 G" },
    { from: "G", to: "T", conversion: "1 G = 0.0001 T" },
    { from: "1 mT", to: "Gauss", conversion: "10 G" },
    { from: "100 G", to: "Tesla", conversion: "0.01 T" },
    { from: "Earth field", to: "Tesla", conversion: "25-65 uT" },
    { from: "MRI magnet", to: "Tesla", conversion: "1.5-3 T" },
  ];

  return (
    <ConverterPageLayout
      title="Magnetic Flux Density"
      subtitle="Unit Converter"
      description="Convert between different magnetic flux density units including tesla and gauss."
      quickConversions={quickConversions}
      footerText="Built with precision - All magnetic flux density units supported"
    >
      <GenericConverterCard
        title="Magnetic Flux Density Converter"
        description="Convert between different units of magnetic flux density measurement."
        icon={Magnet}
        units={units}
        defaultFromUnit="Tesla"
        defaultToUnit="Gauss"
        commonUnits={["Tesla", "Gauss"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MagneticFluxDensity;
