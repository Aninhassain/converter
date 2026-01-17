"use client";

import { useState } from "react";
import { Gauge } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Speed = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const speedUnits: UnitDefinition[] = [
    { name: "meter per second", symbol: "m/s", factor: 1 },
    { name: "kilometer per hour", symbol: "km/h", factor: 0.277778 },
    { name: "mile per hour", symbol: "mph", factor: 0.44704 },
    { name: "knot", symbol: "kn", factor: 0.51444 },
    { name: "foot per second", symbol: "ft/s", factor: 0.3048 },
    { name: "mach", symbol: "Ma", factor: 340.29 },
    { name: "speed of light", symbol: "c", factor: 299792458 },
  ];

  const quickConversions = [
    { from: "km/h", to: "mph", conversion: "1 km/h = 0.621 mph" },
    { from: "mph", to: "km/h", conversion: "1 mph = 1.609 km/h" },
    { from: "m/s", to: "km/h", conversion: "1 m/s = 3.6 km/h" },
    { from: "kn", to: "km/h", conversion: "1 kn = 1.852 km/h" },
    { from: "ft/s", to: "m/s", conversion: "1 ft/s = 0.305 m/s" },
    { from: "Ma", to: "m/s", conversion: "1 Ma = 340.29 m/s" },
  ];

  return (
    <ConverterPageLayout
      title="Speed"
      subtitle="Unit Converter"
      description="Precision conversion between all standard speed and velocity units"
      quickConversions={quickConversions}
      footerText="Built with precision • All speed units supported"
    >
      <GenericConverterCard
        title="Speed Converter"
        description="Convert between different units of speed measurement."
        icon={Gauge}
        units={speedUnits}
        defaultFromUnit="meter per second"
        defaultToUnit="kilometer per hour"
        commonUnits={["meter per second", "kilometer per hour", "mile per hour", "knot"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Speed;
