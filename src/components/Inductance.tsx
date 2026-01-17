"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Inductance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Henry", symbol: "H", factor: 1 },
    { name: "Millihenry", symbol: "mH", factor: 1e-3 },
    { name: "Microhenry", symbol: "uH", factor: 1e-6 },
    { name: "Nanohenry", symbol: "nH", factor: 1e-9 },
  ];

  const quickConversions = [
    { from: "H", to: "mH", conversion: "1 H = 1000 mH" },
    { from: "mH", to: "uH", conversion: "1 mH = 1000 uH" },
    { from: "uH", to: "nH", conversion: "1 uH = 1000 nH" },
    { from: "H", to: "uH", conversion: "1 H = 1,000,000 uH" },
    { from: "mH", to: "H", conversion: "1 mH = 0.001 H" },
    { from: "nH", to: "uH", conversion: "1 nH = 0.001 uH" },
  ];

  return (
    <ConverterPageLayout
      title="Inductance"
      subtitle="Unit Converter"
      description="Convert between different inductance units including henry, millihenry, microhenry, and nanohenry."
      quickConversions={quickConversions}
      footerText="Built with precision - All inductance units supported"
    >
      <GenericConverterCard
        title="Inductance Converter"
        description="Convert between different units of inductance measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Henry"
        defaultToUnit="Millihenry"
        commonUnits={["Henry", "Millihenry", "Microhenry"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Inductance;
