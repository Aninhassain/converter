"use client";

import { useState } from "react";
import { Activity } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MagnetomotiveForce = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  // 1 gilbert = 10/(4*pi) ampere-turn = 0.7957747 ampere-turn
  const GILBERT_TO_AT = 10 / (4 * Math.PI);

  const units: UnitDefinition[] = [
    { name: "Ampere-turn", symbol: "A·turn", factor: 1 },
    { name: "Gilbert", symbol: "Gi", factor: GILBERT_TO_AT },
    { name: "Kiloampere-turn", symbol: "kA·turn", factor: 1000 },
    { name: "Milliampere-turn", symbol: "mA·turn", factor: 0.001 },
  ];

  const quickConversions = [
    { from: "A·turn", to: "Gi", conversion: "1 A·turn = 1.257 Gi" },
    { from: "Gi", to: "A·turn", conversion: "1 Gi = 0.7958 A·turn" },
    { from: "kA·turn", to: "A·turn", conversion: "1 kA·turn = 1000 A·turn" },
    { from: "A·turn", to: "mA·turn", conversion: "1 A·turn = 1000 mA·turn" },
    { from: "kA·turn", to: "Gi", conversion: "1 kA·turn = 1257 Gi" },
    { from: "Gi", to: "mA·turn", conversion: "1 Gi = 795.8 mA·turn" },
  ];

  return (
    <ConverterPageLayout
      title="Magnetomotive Force"
      subtitle="Unit Converter"
      description="Convert between different units of magnetomotive force measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All magnetomotive force units supported"
    >
      <GenericConverterCard
        title="Magnetomotive Force Converter"
        description="Convert between different units of magnetomotive force measurement."
        icon={Activity}
        units={units}
        defaultFromUnit="A·turn"
        defaultToUnit="Gi"
        commonUnits={["A·turn", "Gi", "kA·turn"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MagnetomotiveForce;
