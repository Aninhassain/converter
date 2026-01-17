"use client";

import { useState } from "react";
import { Thermometer } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ThermalConductivity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Watt per Meter Kelvin", symbol: "W/(m·K)", factor: 1 },
    { name: "Watt per Centimeter Celsius", symbol: "W/(cm·°C)", factor: 100 },
    { name: "Calorie per Second Centimeter Celsius", symbol: "cal/(s·cm·°C)", factor: 418.4 },
    { name: "BTU per Hour Foot Fahrenheit", symbol: "BTU/(h·ft·°F)", factor: 1.73073 },
    { name: "BTU Inch per Hour Square Foot Fahrenheit", symbol: "BTU·in/(h·ft²·°F)", factor: 0.144228 },
    { name: "Kilowatt per Meter Kelvin", symbol: "kW/(m·K)", factor: 1000 },
  ];

  const quickConversions = [
    { from: "W/(m·K)", to: "W/(cm·°C)", conversion: "1 W/(m·K) = 0.01 W/(cm·°C)" },
    { from: "W/(m·K)", to: "BTU/(h·ft·°F)", conversion: "1 W/(m·K) = 0.578 BTU/(h·ft·°F)" },
    { from: "W/(m·K)", to: "cal/(s·cm·°C)", conversion: "1 W/(m·K) = 0.00239 cal/(s·cm·°C)" },
    { from: "kW/(m·K)", to: "W/(m·K)", conversion: "1 kW/(m·K) = 1000 W/(m·K)" },
    { from: "BTU/(h·ft·°F)", to: "W/(m·K)", conversion: "1 BTU/(h·ft·°F) = 1.731 W/(m·K)" },
    { from: "W/(cm·°C)", to: "W/(m·K)", conversion: "1 W/(cm·°C) = 100 W/(m·K)" },
  ];

  return (
    <ConverterPageLayout
      title="Thermal Conductivity"
      subtitle="Unit Converter"
      description="Convert between different units of thermal conductivity measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All thermal conductivity units supported"
    >
      <GenericConverterCard
        title="Thermal Conductivity Converter"
        description="Convert between different units of thermal conductivity measurement."
        icon={Thermometer}
        units={units}
        defaultFromUnit="W/(m·K)"
        defaultToUnit="BTU/(h·ft·°F)"
        commonUnits={["W/(m·K)", "BTU/(h·ft·°F)", "W/(cm·°C)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ThermalConductivity;
