"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const HeatTransferCoefficient = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Watt/(square meter·kelvin)", symbol: "W/(m²·K)", factor: 1 },
    { name: "Watt/(square centimeter·celsius)", symbol: "W/(cm²·°C)", factor: 10000 },
    { name: "Kilocalorie/(hour·square meter·celsius)", symbol: "kcal/(h·m²·°C)", factor: 1.163 },
    { name: "BTU/(hour·square foot·fahrenheit)", symbol: "BTU/(h·ft²·°F)", factor: 5.678 },
  ];

  const quickConversions = [
    { from: "W/(cm²·°C)", to: "W/(m²·K)", conversion: "1 W/(cm²·°C) = 10,000 W/(m²·K)" },
    { from: "BTU/(h·ft²·°F)", to: "W/(m²·K)", conversion: "1 BTU/(h·ft²·°F) ≈ 5.678 W/(m²·K)" },
    { from: "kcal/(h·m²·°C)", to: "W/(m²·K)", conversion: "1 kcal/(h·m²·°C) ≈ 1.163 W/(m²·K)" },
    { from: "W/(m²·K)", to: "BTU/(h·ft²·°F)", conversion: "1 W/(m²·K) ≈ 0.176 BTU/(h·ft²·°F)" },
    { from: "W/(m²·K)", to: "kcal/(h·m²·°C)", conversion: "1 W/(m²·K) ≈ 0.86 kcal/(h·m²·°C)" },
    { from: "BTU/(h·ft²·°F)", to: "kcal/(h·m²·°C)", conversion: "1 BTU/(h·ft²·°F) ≈ 4.88 kcal/(h·m²·°C)" },
  ];

  return (
    <ConverterPageLayout
      title="Heat Transfer Coefficient"
      subtitle="Unit Converter"
      description="Convert heat transfer coefficient between W/(m²·K), W/(cm²·°C), kcal/(h·m²·°C), and more."
      quickConversions={quickConversions}
      footerText="Built with precision • All heat transfer coefficient units supported"
    >
      <GenericConverterCard
        title="Heat Transfer Coefficient Converter"
        description="Convert between different units of heat transfer coefficient measurement."
        icon={Flame}
        units={units}
        defaultFromUnit="Watt/(square meter·kelvin)"
        defaultToUnit="BTU/(hour·square foot·fahrenheit)"
        commonUnits={["Watt/(square meter·kelvin)", "BTU/(hour·square foot·fahrenheit)", "Kilocalorie/(hour·square meter·celsius)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default HeatTransferCoefficient;
