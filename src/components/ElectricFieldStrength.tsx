"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricFieldStrength = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Volt/meter", symbol: "V/m", factor: 1 },
    { name: "Kilovolt/meter", symbol: "kV/m", factor: 1000 },
    { name: "Volt/centimeter", symbol: "V/cm", factor: 100 },
    { name: "Millivolt/meter", symbol: "mV/m", factor: 0.001 },
    { name: "Microvolt/meter", symbol: "µV/m", factor: 1e-6 },
    { name: "Newton/coulomb", symbol: "N/C", factor: 1 },
    { name: "Dyne/esu", symbol: "dyn/esu", factor: 29979.2458 },
    { name: "Statvolt/centimeter", symbol: "statV/cm", factor: 29979.2458 },
    { name: "Statvolt/meter", symbol: "statV/m", factor: 299.792458 },
    { name: "Abvolt/centimeter", symbol: "abV/cm", factor: 1e-6 },
    { name: "Abvolt/meter", symbol: "abV/m", factor: 1e-8 },
  ];

  const quickConversions = [
    { from: "V/m", to: "V/cm", conversion: "1 V/m = 0.01 V/cm" },
    { from: "kV/m", to: "V/m", conversion: "1 kV/m = 1,000 V/m" },
    { from: "V/m", to: "N/C", conversion: "1 V/m = 1 N/C" },
    { from: "statV/cm", to: "V/m", conversion: "1 statV/cm ≈ 29,979 V/m" },
    { from: "abV/cm", to: "V/m", conversion: "1 abV/cm = 0.000001 V/m" },
    { from: "mV/m", to: "V/m", conversion: "1 mV/m = 0.001 V/m" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Field Strength"
      subtitle="Unit Converter"
      description="Convert between different units of electric field strength measurement including SI, CGS, and derived units."
      quickConversions={quickConversions}
      footerText="Built with precision • All electric field strength units supported"
    >
      <GenericConverterCard
        title="Electric Field Strength Converter"
        description="Convert between different units of electric field strength measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Volt/meter"
        defaultToUnit="Newton/coulomb"
        commonUnits={["Volt/meter", "Kilovolt/meter", "Newton/coulomb", "Volt/centimeter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricFieldStrength;
