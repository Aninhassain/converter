"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SpecificHeatCapacity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Joule per Kilogram Kelvin", symbol: "J/(kg·K)", factor: 1 },
    { name: "Joule per Gram Celsius", symbol: "J/(g·°C)", factor: 1000 },
    { name: "Calorie per Gram Celsius", symbol: "cal/(g·°C)", factor: 4.184 },
    { name: "BTU per Pound Fahrenheit", symbol: "BTU/(lb·°F)", factor: 4186.8 },
    { name: "Kilocalorie per Kilogram Kelvin", symbol: "kcal/(kg·K)", factor: 4.184 },
    { name: "Kilojoule per Kilogram Kelvin", symbol: "kJ/(kg·K)", factor: 1000 },
  ];

  const quickConversions = [
    { from: "J/(kg·K)", to: "J/(g·°C)", conversion: "1 J/(g·°C) = 1000 J/(kg·K)" },
    { from: "J/(kg·K)", to: "cal/(g·°C)", conversion: "1 cal/(g·°C) = 4184 J/(kg·K)" },
    { from: "J/(kg·K)", to: "BTU/(lb·°F)", conversion: "1 BTU/(lb·°F) = 4186.8 J/(kg·K)" },
    { from: "cal/(g·°C)", to: "J/(g·°C)", conversion: "1 cal/(g·°C) = 4.184 J/(g·°C)" },
    { from: "kJ/(kg·K)", to: "J/(kg·K)", conversion: "1 kJ/(kg·K) = 1000 J/(kg·K)" },
    { from: "kcal/(kg·K)", to: "cal/(g·°C)", conversion: "1 kcal/(kg·K) = 1 cal/(g·°C)" },
  ];

  return (
    <ConverterPageLayout
      title="Specific Heat Capacity"
      subtitle="Unit Converter"
      description="Convert between different units of specific heat capacity measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All specific heat capacity units supported"
    >
      <GenericConverterCard
        title="Specific Heat Capacity Converter"
        description="Convert between different units of specific heat capacity measurement."
        icon={Flame}
        units={units}
        defaultFromUnit="J/(kg·K)"
        defaultToUnit="cal/(g·°C)"
        commonUnits={["J/(kg·K)", "cal/(g·°C)", "BTU/(lb·°F)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default SpecificHeatCapacity;
