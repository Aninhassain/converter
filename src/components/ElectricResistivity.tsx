"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricResistivity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ohm-meter", symbol: "Ω·m", factor: 1 },
    { name: "Ohm-centimeter", symbol: "Ω·cm", factor: 0.01 },
    { name: "Ohm-millimeter", symbol: "Ω·mm", factor: 0.001 },
    { name: "Milliohm-centimeter", symbol: "mΩ·cm", factor: 1e-5 },
    { name: "Microohm-centimeter", symbol: "μΩ·cm", factor: 1e-8 },
    { name: "Microohm-meter", symbol: "μΩ·m", factor: 1e-6 },
  ];

  const quickConversions = [
    { from: "Ω·m", to: "Ω·cm", conversion: "1 Ω·m = 100 Ω·cm" },
    { from: "Ω·cm", to: "Ω·mm", conversion: "1 Ω·cm = 10 Ω·mm" },
    { from: "Ω·m", to: "μΩ·cm", conversion: "1 Ω·m = 10⁸ μΩ·cm" },
    { from: "mΩ·cm", to: "μΩ·cm", conversion: "1 mΩ·cm = 1000 μΩ·cm" },
    { from: "μΩ·m", to: "μΩ·cm", conversion: "1 μΩ·m = 100 μΩ·cm" },
    { from: "Ω·m", to: "μΩ·m", conversion: "1 Ω·m = 10⁶ μΩ·m" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Resistivity"
      subtitle="Unit Converter"
      description="Convert between common electric resistivity units including Ω·m, Ω·cm, μΩ·cm, and more."
      quickConversions={quickConversions}
      footerText="Built with precision • All electric resistivity units supported"
    >
      <GenericConverterCard
        title="Electric Resistivity Converter"
        description="Convert between different units of electric resistivity measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Ohm-meter"
        defaultToUnit="Ohm-centimeter"
        commonUnits={["Ohm-meter", "Ohm-centimeter", "Microohm-centimeter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricResistivity;
