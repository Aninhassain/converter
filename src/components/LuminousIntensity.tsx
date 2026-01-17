"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const LuminousIntensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Candela", symbol: "cd", factor: 1 },
    { name: "Candlepower", symbol: "cp", factor: 1 },
    { name: "Hefnerkerze", symbol: "HK", factor: 0.903 },
    { name: "Bougie decimale", symbol: "bd", factor: 1 },
    { name: "Carcel", symbol: "carcel", factor: 9.74 },
    { name: "Pentane candle", symbol: "pc", factor: 1.02 },
    { name: "Decimal candle", symbol: "dc", factor: 1 },
    { name: "Violle", symbol: "v", factor: 20.17 },
    { name: "Kilocandela", symbol: "kcd", factor: 1000 },
    { name: "Millicandela", symbol: "mcd", factor: 0.001 },
  ];

  const quickConversions = [
    { from: "cd", to: "cp", conversion: "1 cd = 1 cp" },
    { from: "cd", to: "HK", conversion: "1 cd = 1.107 HK" },
    { from: "cd", to: "kcd", conversion: "1 cd = 0.001 kcd" },
    { from: "kcd", to: "cd", conversion: "1 kcd = 1000 cd" },
    { from: "carcel", to: "cd", conversion: "1 carcel = 9.74 cd" },
    { from: "cd", to: "mcd", conversion: "1 cd = 1000 mcd" },
  ];

  return (
    <ConverterPageLayout
      title="Luminous Intensity"
      subtitle="Unit Converter"
      description="Convert between different luminous intensity units including candela, candlepower, and carcel."
      quickConversions={quickConversions}
      footerText="Built with precision - All luminous intensity units supported"
    >
      <GenericConverterCard
        title="Luminous Intensity Converter"
        description="Convert between different units of luminous intensity measurement."
        icon={Lightbulb}
        units={units}
        defaultFromUnit="Candela"
        defaultToUnit="Candlepower"
        commonUnits={["Candela", "Candlepower", "Kilocandela"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default LuminousIntensity;
