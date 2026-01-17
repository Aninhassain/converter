"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Illumination = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Lux", symbol: "lx", factor: 1 },
    { name: "Foot-candle", symbol: "fc", factor: 10.7639 },
    { name: "Phot", symbol: "ph", factor: 10000 },
    { name: "Nox", symbol: "nx", factor: 0.001 },
    { name: "Watt/square-centimeter", symbol: "W/cm2", factor: 6.83e7 },
    { name: "Watt/square-meter", symbol: "W/m2", factor: 683 },
    { name: "Kilolux", symbol: "klx", factor: 1000 },
    { name: "Millilux", symbol: "mlx", factor: 0.001 },
    { name: "Microlux", symbol: "ulx", factor: 0.000001 },
    { name: "Lumen/square-foot", symbol: "lm/ft2", factor: 10.7639 },
    { name: "Lumen/square-meter", symbol: "lm/m2", factor: 1 },
    { name: "Lumen/square-centimeter", symbol: "lm/cm2", factor: 10000 },
  ];

  const quickConversions = [
    { from: "lx", to: "fc", conversion: "1 lx = 0.0929 fc" },
    { from: "fc", to: "lx", conversion: "1 fc = 10.764 lx" },
    { from: "lx", to: "ph", conversion: "1 lx = 0.0001 ph" },
    { from: "Sunlight", to: "lx", conversion: "~100,000 lx" },
    { from: "Office light", to: "lx", conversion: "~500 lx" },
    { from: "Full moon", to: "lx", conversion: "~0.1 lx" },
  ];

  return (
    <ConverterPageLayout
      title="Illumination"
      subtitle="Unit Converter"
      description="Convert between different illumination units including lux, foot-candle, and phot."
      quickConversions={quickConversions}
      footerText="Built with precision - All illumination units supported"
    >
      <GenericConverterCard
        title="Illumination Converter"
        description="Convert between different units of illumination measurement."
        icon={Lightbulb}
        units={units}
        defaultFromUnit="Lux"
        defaultToUnit="Foot-candle"
        commonUnits={["Lux", "Foot-candle", "Phot"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Illumination;
