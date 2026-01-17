"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Power = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const powerUnits: UnitDefinition[] = [
    { name: "watt", symbol: "W", factor: 1 },
    { name: "kilowatt", symbol: "kW", factor: 1e3 },
    { name: "megawatt", symbol: "MW", factor: 1e6 },
    { name: "gigawatt", symbol: "GW", factor: 1e9 },
    { name: "milliwatt", symbol: "mW", factor: 1e-3 },
    { name: "horsepower", symbol: "hp", factor: 745.7 },
    { name: "BTU per hour", symbol: "BTU/h", factor: 0.293071 },
    { name: "calorie per second", symbol: "cal/s", factor: 4.184 },
  ];

  const quickConversions = [
    { from: "kW", to: "hp", conversion: "1 kW = 1.341 hp" },
    { from: "hp", to: "W", conversion: "1 hp = 745.7 W" },
    { from: "MW", to: "kW", conversion: "1 MW = 1000 kW" },
    { from: "W", to: "BTU/h", conversion: "1 W = 3.412 BTU/h" },
    { from: "kW", to: "W", conversion: "1 kW = 1000 W" },
    { from: "GW", to: "MW", conversion: "1 GW = 1000 MW" },
  ];

  return (
    <ConverterPageLayout
      title="Power"
      subtitle="Unit Converter"
      description="Precision conversion between all standard power units including watts and horsepower"
      quickConversions={quickConversions}
      footerText="Built with precision • All power units supported"
    >
      <GenericConverterCard
        title="Power Converter"
        description="Convert between different units of power measurement."
        icon={Zap}
        units={powerUnits}
        defaultFromUnit="watt"
        defaultToUnit="kilowatt"
        commonUnits={["watt", "kilowatt", "megawatt", "horsepower"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Power;
