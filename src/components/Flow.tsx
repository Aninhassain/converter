"use client";

import { useState } from "react";
import { Droplets } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Flow = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Cubic meter/second", symbol: "m3/s", factor: 1 },
    { name: "Cubic meter/hour", symbol: "m3/h", factor: 0.000278 },
    { name: "Liter/second", symbol: "L/s", factor: 0.001 },
    { name: "Liter/minute", symbol: "L/min", factor: 0.0000167 },
    { name: "Liter/hour", symbol: "L/h", factor: 2.78e-7 },
    { name: "Cubic foot/second", symbol: "ft3/s", factor: 0.0283168 },
    { name: "Gallon/minute (US)", symbol: "gal/min", factor: 0.0000631 },
  ];

  const quickConversions = [
    { from: "m3/s", to: "L/s", conversion: "1 m3/s = 1000 L/s" },
    { from: "L/min", to: "L/s", conversion: "1 L/min = 0.0167 L/s" },
    { from: "gal/min", to: "L/min", conversion: "1 gal/min = 3.785 L/min" },
    { from: "m3/h", to: "L/h", conversion: "1 m3/h = 1000 L/h" },
    { from: "ft3/s", to: "m3/s", conversion: "1 ft3/s = 0.0283 m3/s" },
    { from: "L/s", to: "gal/min", conversion: "1 L/s = 15.85 gal/min" },
  ];

  return (
    <ConverterPageLayout
      title="Volumetric Flow"
      subtitle="Unit Converter"
      description="Convert between different volumetric flow rate units including m3/s, L/s, and gallons per minute."
      quickConversions={quickConversions}
      footerText="Built with precision - All flow units supported"
    >
      <GenericConverterCard
        title="Volumetric Flow Converter"
        description="Convert between different units of volumetric flow measurement."
        icon={Droplets}
        units={units}
        defaultFromUnit="Cubic meter/second"
        defaultToUnit="Liter/second"
        commonUnits={["Cubic meter/second", "Liter/second", "Liter/minute", "Gallon/minute (US)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Flow;
