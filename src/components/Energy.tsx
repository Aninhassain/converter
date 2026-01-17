"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Energy = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const energyUnits: UnitDefinition[] = [
    { name: "joule", symbol: "J", factor: 1 },
    { name: "kilojoule", symbol: "kJ", factor: 1e3 },
    { name: "megajoule", symbol: "MJ", factor: 1e6 },
    { name: "calorie", symbol: "cal", factor: 4.184 },
    { name: "kilocalorie", symbol: "kcal", factor: 4184 },
    { name: "watt-hour", symbol: "Wh", factor: 3600 },
    { name: "kilowatt-hour", symbol: "kWh", factor: 3.6e6 },
    { name: "erg", symbol: "erg", factor: 0.0000001 },
    { name: "electron volt", symbol: "eV", factor: 1.602176634e-19 },
    { name: "BTU", symbol: "BTU", factor: 1055.06 },
  ];

  const quickConversions = [
    { from: "J", to: "cal", conversion: "1 J = 0.239 cal" },
    { from: "kcal", to: "kJ", conversion: "1 kcal = 4.184 kJ" },
    { from: "kWh", to: "MJ", conversion: "1 kWh = 3.6 MJ" },
    { from: "BTU", to: "J", conversion: "1 BTU = 1055 J" },
    { from: "eV", to: "J", conversion: "1 eV = 1.602×10⁻¹⁹ J" },
    { from: "cal", to: "J", conversion: "1 cal = 4.184 J" },
  ];

  return (
    <ConverterPageLayout
      title="Energy"
      subtitle="Unit Converter"
      description="Precision conversion between all standard energy units including joules, calories, and watt-hours"
      quickConversions={quickConversions}
      footerText="Built with precision • All energy units supported"
    >
      <GenericConverterCard
        title="Energy Converter"
        description="Convert between different units of energy measurement."
        icon={Zap}
        units={energyUnits}
        defaultFromUnit="joule"
        defaultToUnit="kilocalorie"
        commonUnits={["joule", "kilojoule", "calorie", "kilocalorie", "kilowatt-hour"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Energy;
