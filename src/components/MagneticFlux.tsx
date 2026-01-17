"use client";

import { useState } from "react";
import { Magnet } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MagneticFlux = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Weber", symbol: "Wb", factor: 1 },
    { name: "Maxwell", symbol: "Mx", factor: 1e-8 },
  ];

  const quickConversions = [
    { from: "Wb", to: "Mx", conversion: "1 Wb = 1e8 Mx" },
    { from: "Mx", to: "Wb", conversion: "1 Mx = 1e-8 Wb" },
    { from: "1 Wb", to: "Maxwell", conversion: "100,000,000 Mx" },
    { from: "1000 Mx", to: "Weber", conversion: "0.00001 Wb" },
    { from: "Wb", to: "V-s", conversion: "1 Wb = 1 V-s" },
    { from: "Mx", to: "line", conversion: "1 Mx = 1 line" },
  ];

  return (
    <ConverterPageLayout
      title="Magnetic Flux"
      subtitle="Unit Converter"
      description="Convert between different magnetic flux units including weber and maxwell."
      quickConversions={quickConversions}
      footerText="Built with precision - All magnetic flux units supported"
    >
      <GenericConverterCard
        title="Magnetic Flux Converter"
        description="Convert between different units of magnetic flux measurement."
        icon={Magnet}
        units={units}
        defaultFromUnit="Weber"
        defaultToUnit="Maxwell"
        commonUnits={["Weber", "Maxwell"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MagneticFlux;
