"use client";

import { useState } from "react";
import { Waves } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SurfaceTension = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Newton per Meter", symbol: "N/m", factor: 1 },
    { name: "Dyne per Centimeter", symbol: "dyn/cm", factor: 0.001 },
    { name: "Millinewton per Meter", symbol: "mN/m", factor: 0.001 },
    { name: "Erg per Square Centimeter", symbol: "erg/cm²", factor: 0.001 },
    { name: "Gram-force per Centimeter", symbol: "gf/cm", factor: 0.00980665 },
    { name: "Pound-force per Foot", symbol: "lbf/ft", factor: 0.0146667 },
    { name: "Pound-force per Inch", symbol: "lbf/in", factor: 0.175999 },
    { name: "Kilogram-force per Meter", symbol: "kgf/m", factor: 0.00980665 },
    { name: "Joule per Square Meter", symbol: "J/m²", factor: 1 },
  ];

  const quickConversions = [
    { from: "N/m", to: "dyn/cm", conversion: "1 N/m = 1000 dyn/cm" },
    { from: "N/m", to: "mN/m", conversion: "1 N/m = 1000 mN/m" },
    { from: "dyn/cm", to: "erg/cm²", conversion: "1 dyn/cm = 1 erg/cm²" },
    { from: "N/m", to: "J/m²", conversion: "1 N/m = 1 J/m²" },
    { from: "N/m", to: "gf/cm", conversion: "1 N/m = 101.97 gf/cm" },
    { from: "N/m", to: "lbf/ft", conversion: "1 N/m = 68.52 lbf/ft" },
  ];

  return (
    <ConverterPageLayout
      title="Surface Tension"
      subtitle="Unit Converter"
      description="Convert between different units of surface tension measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All surface tension units supported"
    >
      <GenericConverterCard
        title="Surface Tension Converter"
        description="Convert between different units of surface tension measurement."
        icon={Waves}
        units={units}
        defaultFromUnit="N/m"
        defaultToUnit="dyn/cm"
        commonUnits={["N/m", "dyn/cm", "mN/m"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default SurfaceTension;
