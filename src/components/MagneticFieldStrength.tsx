"use client";

import { useState } from "react";
import { Magnet } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MagneticFieldStrength = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Ampere/meter", symbol: "A/m", factor: 1 },
    { name: "Oersted", symbol: "Oe", factor: 79.57747154594767 },
  ];

  const quickConversions = [
    { from: "A/m", to: "Oe", conversion: "1 A/m = 0.01257 Oe" },
    { from: "Oe", to: "A/m", conversion: "1 Oe = 79.58 A/m" },
    { from: "1000 A/m", to: "Oersted", conversion: "12.57 Oe" },
    { from: "100 Oe", to: "A/m", conversion: "7958 A/m" },
    { from: "kA/m", to: "Oe", conversion: "1 kA/m = 12.57 Oe" },
    { from: "A/m", to: "SI", conversion: "A/m is SI unit" },
  ];

  return (
    <ConverterPageLayout
      title="Magnetic Field Strength"
      subtitle="Unit Converter"
      description="Convert between different magnetic field strength units including A/m and oersted."
      quickConversions={quickConversions}
      footerText="Built with precision - All magnetic field strength units supported"
    >
      <GenericConverterCard
        title="Magnetic Field Strength Converter"
        description="Convert between different units of magnetic field strength measurement."
        icon={Magnet}
        units={units}
        defaultFromUnit="Ampere/meter"
        defaultToUnit="Oersted"
        commonUnits={["Ampere/meter", "Oersted"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MagneticFieldStrength;
