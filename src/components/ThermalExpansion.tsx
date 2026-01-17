"use client";

import { useState } from "react";
import { Thermometer } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ThermalExpansion = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Per Kelvin", symbol: "K⁻¹", factor: 1 },
    { name: "Per Celsius", symbol: "°C⁻¹", factor: 1 },
    { name: "Per Fahrenheit", symbol: "°F⁻¹", factor: 0.555556 },
    { name: "Per Rankine", symbol: "°R⁻¹", factor: 0.555556 },
  ];

  const quickConversions = [
    { from: "K⁻¹", to: "°C⁻¹", conversion: "1 K⁻¹ = 1 °C⁻¹" },
    { from: "K⁻¹", to: "°F⁻¹", conversion: "1 K⁻¹ = 1.8 °F⁻¹" },
    { from: "°C⁻¹", to: "°F⁻¹", conversion: "1 °C⁻¹ = 1.8 °F⁻¹" },
    { from: "°F⁻¹", to: "K⁻¹", conversion: "1 °F⁻¹ = 0.556 K⁻¹" },
    { from: "°F⁻¹", to: "°R⁻¹", conversion: "1 °F⁻¹ = 1 °R⁻¹" },
    { from: "K⁻¹", to: "°R⁻¹", conversion: "1 K⁻¹ = 1.8 °R⁻¹" },
  ];

  return (
    <ConverterPageLayout
      title="Thermal Expansion"
      subtitle="Unit Converter"
      description="Convert thermal expansion coefficients between different temperature units with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All thermal expansion units supported"
    >
      <GenericConverterCard
        title="Thermal Expansion Converter"
        description="Convert thermal expansion coefficients between different temperature units."
        icon={Thermometer}
        units={units}
        defaultFromUnit="K⁻¹"
        defaultToUnit="°C⁻¹"
        commonUnits={["K⁻¹", "°C⁻¹", "°F⁻¹"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ThermalExpansion;
