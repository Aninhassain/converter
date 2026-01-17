"use client";

import { useState } from "react";
import { Thermometer } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ThermalResistance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kelvin per Watt", symbol: "K/W", factor: 1 },
    { name: "Celsius per Watt", symbol: "°C/W", factor: 1 },
    { name: "Fahrenheit per Watt", symbol: "°F/W", factor: 0.555556 },
    { name: "Kelvin per Kilowatt", symbol: "K/kW", factor: 0.001 },
    { name: "Celsius per Kilowatt", symbol: "°C/kW", factor: 0.001 },
    { name: "Fahrenheit Hour per BTU", symbol: "°F·h/BTU", factor: 1.8956 },
  ];

  const quickConversions = [
    { from: "K/W", to: "°C/W", conversion: "1 K/W = 1 °C/W" },
    { from: "K/W", to: "°F/W", conversion: "1 K/W = 1.8 °F/W" },
    { from: "K/W", to: "K/kW", conversion: "1 K/W = 1000 K/kW" },
    { from: "°C/W", to: "°F/W", conversion: "1 °C/W = 1.8 °F/W" },
    { from: "K/W", to: "°F·h/BTU", conversion: "1 K/W = 0.528 °F·h/BTU" },
    { from: "°F/W", to: "K/W", conversion: "1 °F/W = 0.556 K/W" },
  ];

  return (
    <ConverterPageLayout
      title="Thermal Resistance"
      subtitle="Unit Converter"
      description="Convert between different units of thermal resistance measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All thermal resistance units supported"
    >
      <GenericConverterCard
        title="Thermal Resistance Converter"
        description="Convert between different units of thermal resistance measurement."
        icon={Thermometer}
        units={units}
        defaultFromUnit="K/W"
        defaultToUnit="°C/W"
        commonUnits={["K/W", "°C/W", "°F/W"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ThermalResistance;
