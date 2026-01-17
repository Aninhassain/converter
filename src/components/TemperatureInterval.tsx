"use client";

import { useState } from "react";
import { Thermometer } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const TemperatureInterval = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kelvin", symbol: "K", factor: 1 },
    { name: "Celsius Degree", symbol: "°C", factor: 1 },
    { name: "Fahrenheit Degree", symbol: "°F", factor: 1.8 },
    { name: "Rankine", symbol: "°R", factor: 1.8 },
  ];

  const quickConversions = [
    { from: "K", to: "°C", conversion: "1 K = 1 °C (interval)" },
    { from: "K", to: "°F", conversion: "1 K = 1.8 °F (interval)" },
    { from: "°C", to: "°F", conversion: "1 °C = 1.8 °F (interval)" },
    { from: "K", to: "°R", conversion: "1 K = 1.8 °R (interval)" },
    { from: "°F", to: "°R", conversion: "1 °F = 1 °R (interval)" },
    { from: "°C", to: "K", conversion: "1 °C = 1 K (interval)" },
  ];

  return (
    <ConverterPageLayout
      title="Temperature Interval"
      subtitle="Unit Converter"
      description="Convert temperature intervals (differences) between different scales with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All temperature interval units supported"
    >
      <GenericConverterCard
        title="Temperature Interval Converter"
        description="Convert temperature intervals (differences) between different scales."
        icon={Thermometer}
        units={units}
        defaultFromUnit="K"
        defaultToUnit="°C"
        commonUnits={["K", "°C", "°F"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default TemperatureInterval;
