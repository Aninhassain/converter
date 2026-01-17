"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MomentOfInertia = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kilogram Square Meter", symbol: "kg·m²", factor: 1 },
    { name: "Kilogram Square Centimeter", symbol: "kg·cm²", factor: 0.0001 },
    { name: "Kilogram Square Millimeter", symbol: "kg·mm²", factor: 0.000001 },
    { name: "Gram Square Centimeter", symbol: "g·cm²", factor: 0.0000001 },
    { name: "Gram Square Millimeter", symbol: "g·mm²", factor: 0.0000000001 },
    { name: "Kilogram-force Meter Square Second", symbol: "kgf·m·s²", factor: 9.80665 },
    { name: "Kilogram-force Centimeter Square Second", symbol: "kgf·cm·s²", factor: 0.000980665 },
    { name: "Ounce Square Inch", symbol: "oz·in²", factor: 0.000018289536 },
    { name: "Ounce-force Inch Square Second", symbol: "ozf·in·s²", factor: 0.007061551959 },
    { name: "Pound Square Foot", symbol: "lb·ft²", factor: 0.04214011 },
    { name: "Pound-force Foot Square Second", symbol: "lbf·ft·s²", factor: 1.35581794833 },
    { name: "Pound Square Inch", symbol: "lb·in²", factor: 0.00029263965 },
    { name: "Pound-force Inch Square Second", symbol: "lbf·in·s²", factor: 0.009415418891 },
    { name: "Slug Square Foot", symbol: "slug·ft²", factor: 1.35581794833 },
  ];

  const quickConversions = [
    { from: "kg·m²", to: "kg·cm²", conversion: "1 kg·m² = 10,000 kg·cm²" },
    { from: "kg·cm²", to: "kg·mm²", conversion: "1 kg·cm² = 100 kg·mm²" },
    { from: "kg·m²", to: "lb·ft²", conversion: "1 kg·m² = 23.73 lb·ft²" },
    { from: "lb·ft²", to: "lb·in²", conversion: "1 lb·ft² = 144 lb·in²" },
    { from: "kg·m²", to: "slug·ft²", conversion: "1 kg·m² = 0.738 slug·ft²" },
    { from: "slug·ft²", to: "lb·ft²", conversion: "1 slug·ft² = 32.17 lb·ft²" },
  ];

  return (
    <ConverterPageLayout
      title="Moment of Inertia"
      subtitle="Unit Converter"
      description="Convert between different units of moment of inertia measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All moment of inertia units supported"
    >
      <GenericConverterCard
        title="Moment of Inertia Converter"
        description="Convert between different units of moment of inertia measurement."
        icon={Scale}
        units={units}
        defaultFromUnit="kg·m²"
        defaultToUnit="kg·cm²"
        commonUnits={["kg·m²", "kg·cm²", "lb·ft²"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MomentOfInertia;
