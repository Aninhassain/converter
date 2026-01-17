"use client";

import { useState } from "react";
import { Gauge } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Acceleration = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Meter/second squared", symbol: "m/s2", factor: 1 },
    { name: "G-force", symbol: "g", factor: 9.80665 },
    { name: "Foot/second squared", symbol: "ft/s2", factor: 0.3048 },
    { name: "Kilometer/second squared", symbol: "km/s2", factor: 1000 },
  ];

  const quickConversions = [
    { from: "m/s2", to: "g", conversion: "1 m/s2 = 0.102 g" },
    { from: "g", to: "m/s2", conversion: "1 g = 9.807 m/s2" },
    { from: "ft/s2", to: "m/s2", conversion: "1 ft/s2 = 0.305 m/s2" },
    { from: "m/s2", to: "ft/s2", conversion: "1 m/s2 = 3.281 ft/s2" },
    { from: "km/s2", to: "m/s2", conversion: "1 km/s2 = 1000 m/s2" },
    { from: "g", to: "ft/s2", conversion: "1 g = 32.174 ft/s2" },
  ];

  return (
    <ConverterPageLayout
      title="Acceleration"
      subtitle="Unit Converter"
      description="Convert between different acceleration units including m/s2, g-force, and ft/s2."
      quickConversions={quickConversions}
      footerText="Built with precision - All acceleration units supported"
    >
      <GenericConverterCard
        title="Acceleration Converter"
        description="Convert between different units of acceleration measurement."
        icon={Gauge}
        units={units}
        defaultFromUnit="Meter/second squared"
        defaultToUnit="G-force"
        commonUnits={["Meter/second squared", "G-force", "Foot/second squared"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Acceleration;
