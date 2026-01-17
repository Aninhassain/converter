"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Force = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const forceUnits: UnitDefinition[] = [
    { name: "newton", symbol: "N", factor: 1 },
    { name: "kilonewton", symbol: "kN", factor: 1000 },
    { name: "meganewton", symbol: "MN", factor: 1e6 },
    { name: "millinewton", symbol: "mN", factor: 0.001 },
    { name: "dyne", symbol: "dyn", factor: 0.00001 },
    { name: "kilogram-force", symbol: "kgf", factor: 9.80665 },
    { name: "gram-force", symbol: "gf", factor: 0.00980665 },
    { name: "pound-force", symbol: "lbf", factor: 4.4482216152605 },
    { name: "ounce-force", symbol: "ozf", factor: 0.27801385095378 },
    { name: "poundal", symbol: "pdl", factor: 0.138254954376 },
  ];

  const quickConversions = [
    { from: "kN", to: "N", conversion: "1 kN = 1000 N" },
    { from: "kgf", to: "N", conversion: "1 kgf = 9.807 N" },
    { from: "lbf", to: "N", conversion: "1 lbf = 4.448 N" },
    { from: "N", to: "dyn", conversion: "1 N = 100,000 dyn" },
    { from: "lbf", to: "ozf", conversion: "1 lbf = 16 ozf" },
    { from: "N", to: "kgf", conversion: "1 N = 0.102 kgf" },
  ];

  return (
    <ConverterPageLayout
      title="Force"
      subtitle="Unit Converter"
      description="Precision conversion between all standard force units including newtons and pounds-force"
      quickConversions={quickConversions}
      footerText="Built with precision • All force units supported"
    >
      <GenericConverterCard
        title="Force Converter"
        description="Convert between different units of force measurement."
        icon={Zap}
        units={forceUnits}
        defaultFromUnit="newton"
        defaultToUnit="kilonewton"
        commonUnits={["newton", "kilonewton", "kilogram-force", "pound-force"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Force;
