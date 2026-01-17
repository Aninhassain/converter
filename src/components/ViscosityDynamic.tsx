"use client";

import { useState } from "react";
import { Droplets } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ViscosityDynamic = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Pascal Second", symbol: "Pa·s", factor: 1 },
    { name: "Poise", symbol: "P", factor: 0.1 },
    { name: "Centipoise", symbol: "cP", factor: 0.001 },
    { name: "Millipascal Second", symbol: "mPa·s", factor: 0.001 },
    { name: "Micropoise", symbol: "μP", factor: 0.0001 },
    { name: "Pound-force Second per Square Inch", symbol: "lbf·s/in²", factor: 6894.757 },
    { name: "Pound per Foot Second", symbol: "lb/(ft·s)", factor: 1.488164 },
    { name: "Pound per Foot Hour", symbol: "lb/(ft·h)", factor: 0.000413379 },
    { name: "Kilogram per Meter Second", symbol: "kg/(m·s)", factor: 1 },
    { name: "Gram per Centimeter Second", symbol: "g/(cm·s)", factor: 0.1 },
    { name: "Newton Second per Square Meter", symbol: "N·s/m²", factor: 1 },
    { name: "Micropascal Second", symbol: "μPa·s", factor: 0.000001 },
    { name: "Millinewton Second per Square Meter", symbol: "mN·s/m²", factor: 0.001 },
  ];

  const quickConversions = [
    { from: "Pa·s", to: "P", conversion: "1 Pa·s = 10 P" },
    { from: "P", to: "cP", conversion: "1 P = 100 cP" },
    { from: "Pa·s", to: "cP", conversion: "1 Pa·s = 1000 cP" },
    { from: "Pa·s", to: "mPa·s", conversion: "1 Pa·s = 1000 mPa·s" },
    { from: "cP", to: "mPa·s", conversion: "1 cP = 1 mPa·s" },
    { from: "Pa·s", to: "lb/(ft·s)", conversion: "1 Pa·s = 0.672 lb/(ft·s)" },
  ];

  return (
    <ConverterPageLayout
      title="Dynamic Viscosity"
      subtitle="Unit Converter"
      description="Convert between different units of dynamic viscosity measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All dynamic viscosity units supported"
    >
      <GenericConverterCard
        title="Dynamic Viscosity Converter"
        description="Convert between different units of dynamic viscosity measurement."
        icon={Droplets}
        units={units}
        defaultFromUnit="Pa·s"
        defaultToUnit="P"
        commonUnits={["Pa·s", "P", "cP"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ViscosityDynamic;
