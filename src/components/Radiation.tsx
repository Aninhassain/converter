"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Radiation = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Sievert", symbol: "Sv", factor: 1 },
    { name: "Millisievert", symbol: "mSv", factor: 0.001 },
    { name: "Microsievert", symbol: "uSv", factor: 0.000001 },
    { name: "Rem", symbol: "rem", factor: 0.01 },
    { name: "Millirem", symbol: "mrem", factor: 0.00001 },
    { name: "Microrem", symbol: "urem", factor: 0.00000001 },
    { name: "Roentgen equivalent man", symbol: "REM", factor: 0.01 },
    { name: "Gray", symbol: "Gy", factor: 1 },
    { name: "Milligray", symbol: "mGy", factor: 0.001 },
    { name: "Rad", symbol: "rad", factor: 0.01 },
    { name: "Erg/gram", symbol: "erg/g", factor: 0.0001 },
  ];

  const quickConversions = [
    { from: "Sv", to: "rem", conversion: "1 Sv = 100 rem" },
    { from: "rem", to: "Sv", conversion: "1 rem = 0.01 Sv" },
    { from: "Sv", to: "mSv", conversion: "1 Sv = 1000 mSv" },
    { from: "Gy", to: "Sv", conversion: "1 Gy = 1 Sv (gamma)" },
    { from: "rad", to: "Gy", conversion: "1 rad = 0.01 Gy" },
    { from: "mSv", to: "mrem", conversion: "1 mSv = 100 mrem" },
  ];

  return (
    <ConverterPageLayout
      title="Radiation Dose"
      subtitle="Unit Converter"
      description="Convert between different radiation dose units including sieverts, rem, and gray."
      quickConversions={quickConversions}
      footerText="Built with precision - All radiation dose units supported"
    >
      <GenericConverterCard
        title="Radiation Dose Converter"
        description="Convert between different units of radiation dose measurement."
        icon={AlertTriangle}
        units={units}
        defaultFromUnit="Sievert"
        defaultToUnit="Rem"
        commonUnits={["Sievert", "Millisievert", "Rem", "Gray"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Radiation;
