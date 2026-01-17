"use client";

import { useState } from "react";
import { Sun } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const HeatFluxDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Watt/square meter", symbol: "W/m²", factor: 1 },
    { name: "Kilowatt/square meter", symbol: "kW/m²", factor: 1e3 },
    { name: "Calorie/(second·square centimeter)", symbol: "cal/(s·cm²)", factor: 41840 },
    { name: "BTU/(hour·square foot)", symbol: "BTU/(h·ft²)", factor: 3.15459 },
  ];

  const quickConversions = [
    { from: "kW/m²", to: "W/m²", conversion: "1 kW/m² = 1,000 W/m²" },
    { from: "cal/(s·cm²)", to: "W/m²", conversion: "1 cal/(s·cm²) ≈ 41,840 W/m²" },
    { from: "BTU/(h·ft²)", to: "W/m²", conversion: "1 BTU/(h·ft²) ≈ 3.155 W/m²" },
    { from: "W/m²", to: "kW/m²", conversion: "1,000 W/m² = 1 kW/m²" },
    { from: "kW/m²", to: "BTU/(h·ft²)", conversion: "1 kW/m² ≈ 317 BTU/(h·ft²)" },
    { from: "W/m²", to: "cal/(s·cm²)", conversion: "41,840 W/m² ≈ 1 cal/(s·cm²)" },
  ];

  return (
    <ConverterPageLayout
      title="Heat Flux Density"
      subtitle="Unit Converter"
      description="Convert heat flux density between W/m², kW/m², cal/(s·cm²), and BTU/(h·ft²) with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All heat flux density units supported"
    >
      <GenericConverterCard
        title="Heat Flux Density Converter"
        description="Convert between different units of heat flux density measurement."
        icon={Sun}
        units={units}
        defaultFromUnit="Watt/square meter"
        defaultToUnit="Calorie/(second·square centimeter)"
        commonUnits={["Watt/square meter", "Kilowatt/square meter", "BTU/(hour·square foot)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default HeatFluxDensity;
