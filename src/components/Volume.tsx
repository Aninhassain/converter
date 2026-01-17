"use client";

import { useState } from "react";
import { Box } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Volume = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const volumeUnits: UnitDefinition[] = [
    { name: "cubic meter", symbol: "m³", factor: 1000 },
    { name: "cubic kilometer", symbol: "km³", factor: 1000000000000 },
    { name: "cubic centimeter", symbol: "cm³", factor: 0.001 },
    { name: "cubic millimeter", symbol: "mm³", factor: 0.000001 },
    { name: "liter", symbol: "L", factor: 1 },
    { name: "milliliter", symbol: "mL", factor: 0.001 },
    { name: "hectoliter", symbol: "hL", factor: 100 },
    { name: "deciliter", symbol: "dL", factor: 0.1 },
    { name: "cubic mile", symbol: "mi³", factor: 4168181825440 },
    { name: "cubic yard", symbol: "yd³", factor: 764.554857984 },
    { name: "cubic foot", symbol: "ft³", factor: 28.316846592 },
    { name: "cubic inch", symbol: "in³", factor: 0.016387064 },
    { name: "imperial gallon", symbol: "imp gal", factor: 4.54609 },
    { name: "imperial quart", symbol: "imp qt", factor: 1.1365225 },
    { name: "imperial pint", symbol: "imp pt", factor: 0.56826125 },
    { name: "imperial fluid ounce", symbol: "imp fl oz", factor: 0.0284130625 },
    { name: "US gallon", symbol: "US gal", factor: 3.785411784 },
    { name: "US quart", symbol: "US qt", factor: 0.946352946 },
    { name: "US pint", symbol: "US pt", factor: 0.473176473 },
    { name: "US cup", symbol: "US cup", factor: 0.2365882365 },
    { name: "US fluid ounce", symbol: "US fl oz", factor: 0.0295735295625 },
    { name: "US tablespoon", symbol: "US tbsp", factor: 0.01478676478125 },
    { name: "US teaspoon", symbol: "US tsp", factor: 0.00492892159375 },
  ];

  const quickConversions = [
    { from: "L", to: "mL", conversion: "1 L = 1,000 mL" },
    { from: "L", to: "US gal", conversion: "1 L = 0.264 US gal" },
    { from: "US gal", to: "L", conversion: "1 US gal = 3.785 L" },
    { from: "m³", to: "L", conversion: "1 m³ = 1,000 L" },
    { from: "ft³", to: "L", conversion: "1 ft³ = 28.317 L" },
    { from: "US cup", to: "mL", conversion: "1 US cup = 236.6 mL" },
  ];

  return (
    <ConverterPageLayout
      title="Volume"
      subtitle="Unit Converter"
      description="Precision conversion between all standard volume units including metric and imperial"
      quickConversions={quickConversions}
      footerText="Built with precision • All volume units supported"
    >
      <GenericConverterCard
        title="Volume Converter"
        description="Convert between different units of volume measurement."
        icon={Box}
        units={volumeUnits}
        defaultFromUnit="liter"
        defaultToUnit="milliliter"
        commonUnits={["liter", "milliliter", "US gallon", "cubic meter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Volume;
