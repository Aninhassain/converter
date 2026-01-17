"use client";

import { useState } from "react";
import { Droplets } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MassFluxDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kilogram per Square Meter Second", symbol: "kg/(m²·s)", factor: 1 },
    { name: "Gram per Square Centimeter Second", symbol: "g/(cm²·s)", factor: 10 },
    { name: "Pound per Square Foot Second", symbol: "lb/(ft²·s)", factor: 0.204816 },
    { name: "Kilogram per Square Meter Hour", symbol: "kg/(m²·h)", factor: 1/3600 },
    { name: "Gram per Square Meter Second", symbol: "g/(m²·s)", factor: 0.001 },
    { name: "Pound per Square Foot Hour", symbol: "lb/(ft²·h)", factor: 0.000056893 },
  ];

  const quickConversions = [
    { from: "kg/(m²·s)", to: "g/(cm²·s)", conversion: "1 kg/(m²·s) = 0.1 g/(cm²·s)" },
    { from: "kg/(m²·s)", to: "lb/(ft²·s)", conversion: "1 kg/(m²·s) = 4.88 lb/(ft²·s)" },
    { from: "kg/(m²·s)", to: "kg/(m²·h)", conversion: "1 kg/(m²·s) = 3600 kg/(m²·h)" },
    { from: "g/(cm²·s)", to: "kg/(m²·s)", conversion: "1 g/(cm²·s) = 10 kg/(m²·s)" },
    { from: "kg/(m²·s)", to: "g/(m²·s)", conversion: "1 kg/(m²·s) = 1000 g/(m²·s)" },
    { from: "lb/(ft²·s)", to: "lb/(ft²·h)", conversion: "1 lb/(ft²·s) = 3600 lb/(ft²·h)" },
  ];

  return (
    <ConverterPageLayout
      title="Mass Flux Density"
      subtitle="Unit Converter"
      description="Convert between different units of mass flux density measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All mass flux density units supported"
    >
      <GenericConverterCard
        title="Mass Flux Density Converter"
        description="Convert between different units of mass flux density measurement."
        icon={Droplets}
        units={units}
        defaultFromUnit="kg/(m²·s)"
        defaultToUnit="g/(cm²·s)"
        commonUnits={["kg/(m²·s)", "g/(cm²·s)", "lb/(ft²·s)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MassFluxDensity;
