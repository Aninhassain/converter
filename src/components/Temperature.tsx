"use client";

import { useState } from "react";
import { Thermometer } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Temperature = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const temperatureUnits: UnitDefinition[] = [
    { name: "celsius", symbol: "°C", factor: 1 },
    { name: "fahrenheit", symbol: "°F", factor: 1 },
    { name: "kelvin", symbol: "K", factor: 1 },
  ];

  const customConvert = (value: number, from: string, to: string): number => {
    if (from === to) return value;

    let celsius: number;

    // Convert to Celsius first
    switch (from) {
      case "celsius":
        celsius = value;
        break;
      case "fahrenheit":
        celsius = ((value - 32) * 5) / 9;
        break;
      case "kelvin":
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to target unit
    switch (to) {
      case "celsius":
        return celsius;
      case "fahrenheit":
        return (celsius * 9) / 5 + 32;
      case "kelvin":
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  const quickConversions = [
    { from: "°C", to: "°F", conversion: "0°C = 32°F (Freezing point)" },
    { from: "°C", to: "°F", conversion: "100°C = 212°F (Boiling point)" },
    { from: "°C", to: "K", conversion: "0°C = 273.15K" },
    { from: "°F", to: "°C", conversion: "°C = (°F - 32) × 5/9" },
    { from: "°C", to: "°F", conversion: "°F = (°C × 9/5) + 32" },
    { from: "K", to: "°C", conversion: "°C = K - 273.15" },
  ];

  return (
    <ConverterPageLayout
      title="Temperature"
      subtitle="Unit Converter"
      description="Precision conversion between Celsius, Fahrenheit, and Kelvin temperature scales"
      quickConversions={quickConversions}
      footerText="Built with precision • All temperature scales supported"
    >
      <GenericConverterCard
        title="Temperature Converter"
        description="Convert between different temperature scales."
        icon={Thermometer}
        units={temperatureUnits}
        defaultFromUnit="celsius"
        defaultToUnit="fahrenheit"
        commonUnits={["celsius", "fahrenheit", "kelvin"]}
        customConvert={customConvert}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Temperature;
