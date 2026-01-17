"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const LinearCurrentDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ampere/meter", symbol: "A/m", factor: 1 },
    { name: "Ampere/centimeter", symbol: "A/cm", factor: 100 },
    { name: "Ampere/millimeter", symbol: "A/mm", factor: 1000 },
    { name: "Milliampere/meter", symbol: "mA/m", factor: 0.001 },
    { name: "Microampere/meter", symbol: "µA/m", factor: 1e-6 },
    { name: "Nanoampere/meter", symbol: "nA/m", factor: 1e-9 },
    { name: "Kiloampere/meter", symbol: "kA/m", factor: 1000 },
    { name: "Abampere/meter", symbol: "abA/m", factor: 10 },
    { name: "Abampere/centimeter", symbol: "abA/cm", factor: 1000 },
    { name: "Statampere/meter", symbol: "statA/m", factor: 3.335641e-10 },
    { name: "Statampere/centimeter", symbol: "statA/cm", factor: 3.335641e-8 },
  ];

  const quickConversions = [
    { from: "A/m", to: "A/cm", conversion: "1 A/m = 0.01 A/cm" },
    { from: "A/m", to: "A/mm", conversion: "1 A/m = 0.001 A/mm" },
    { from: "kA/m", to: "A/m", conversion: "1 kA/m = 1,000 A/m" },
    { from: "abA/m", to: "A/m", conversion: "1 abA/m = 10 A/m" },
    { from: "abA/cm", to: "A/m", conversion: "1 abA/cm = 1,000 A/m" },
    { from: "mA/m", to: "A/m", conversion: "1 mA/m = 0.001 A/m" },
  ];

  return (
    <ConverterPageLayout
      title="Linear Current Density"
      subtitle="Unit Converter"
      description="Convert between different units of linear current density measurement including SI and CGS units."
      quickConversions={quickConversions}
      footerText="Built with precision • All linear current density units supported"
    >
      <GenericConverterCard
        title="Linear Current Density Converter"
        description="Convert between different units of linear current density measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Ampere/meter"
        defaultToUnit="Ampere/centimeter"
        commonUnits={["Ampere/meter", "Ampere/centimeter", "Kiloampere/meter", "Milliampere/meter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default LinearCurrentDensity;
