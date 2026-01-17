"use client";

import { useState } from "react";
import { Square } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Area = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const areaUnits: UnitDefinition[] = [
    { name: "square meter", symbol: "m²", factor: 1 },
    { name: "square kilometer", symbol: "km²", factor: 1000000 },
    { name: "square centimeter", symbol: "cm²", factor: 0.0001 },
    { name: "square millimeter", symbol: "mm²", factor: 0.000001 },
    { name: "square micrometer", symbol: "μm²", factor: 0.000000000001 },
    { name: "hectare", symbol: "ha", factor: 10000 },
    { name: "square mile", symbol: "mi²", factor: 2589988.110336 },
    { name: "square yard", symbol: "yd²", factor: 0.83612736 },
    { name: "square foot", symbol: "ft²", factor: 0.09290304 },
    { name: "square inch", symbol: "in²", factor: 0.00064516 },
    { name: "acre", symbol: "ac", factor: 4046.8564224 },
  ];

  const quickConversions = [
    { from: "m²", to: "ft²", conversion: "1 m² = 10.764 ft²" },
    { from: "km²", to: "mi²", conversion: "1 km² = 0.386 mi²" },
    { from: "ha", to: "ac", conversion: "1 ha = 2.471 ac" },
    { from: "ac", to: "m²", conversion: "1 ac = 4,047 m²" },
    { from: "km²", to: "ha", conversion: "1 km² = 100 ha" },
    { from: "ft²", to: "m²", conversion: "1 ft² = 0.093 m²" },
  ];

  return (
    <ConverterPageLayout
      title="Area"
      subtitle="Unit Converter"
      description="Precision conversion between all standard area units including metric and imperial"
      quickConversions={quickConversions}
      footerText="Built with precision • All area units supported"
    >
      <GenericConverterCard
        title="Area Converter"
        description="Convert between different units of area measurement."
        icon={Square}
        units={areaUnits}
        defaultFromUnit="square meter"
        defaultToUnit="square kilometer"
        commonUnits={["square meter", "square kilometer", "hectare", "acre", "square foot"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Area;
