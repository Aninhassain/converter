"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ElectricConductivity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Siemens/meter", symbol: "S/m", factor: 1 },
    { name: "Siemens/centimeter", symbol: "S/cm", factor: 100 },
    { name: "Millisiemens/meter", symbol: "mS/m", factor: 0.001 },
    { name: "Microsiemens/meter", symbol: "µS/m", factor: 1e-6 },
  ];

  const quickConversions = [
    { from: "S/m", to: "S/cm", conversion: "1 S/m = 0.01 S/cm" },
    { from: "S/cm", to: "S/m", conversion: "1 S/cm = 100 S/m" },
    { from: "S/m", to: "mS/m", conversion: "1 S/m = 1000 mS/m" },
    { from: "mS/m", to: "µS/m", conversion: "1 mS/m = 1000 µS/m" },
    { from: "S/m", to: "µS/m", conversion: "1 S/m = 1,000,000 µS/m" },
    { from: "µS/m", to: "S/m", conversion: "1 µS/m = 0.000001 S/m" },
  ];

  return (
    <ConverterPageLayout
      title="Electric Conductivity"
      subtitle="Unit Converter"
      description="Convert between conductivity units including S/m, S/cm, mS/m, and µS/m with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All electric conductivity units supported"
    >
      <GenericConverterCard
        title="Electric Conductivity Converter"
        description="Convert between different units of electric conductivity measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Siemens/meter"
        defaultToUnit="Siemens/centimeter"
        commonUnits={["Siemens/meter", "Siemens/centimeter", "Millisiemens/meter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ElectricConductivity;
