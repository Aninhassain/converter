"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const MomentOfForce = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Newton Meter", symbol: "N·m", factor: 1 },
    { name: "Kilonewton Meter", symbol: "kN·m", factor: 1000 },
    { name: "Millinewton Meter", symbol: "mN·m", factor: 0.001 },
    { name: "Pound Foot", symbol: "lb·ft", factor: 1.35582 },
    { name: "Pound Inch", symbol: "lb·in", factor: 0.112985 },
    { name: "Dyne Centimeter", symbol: "dyn·cm", factor: 0.00001 },
    { name: "Foot Pound", symbol: "ft·lb", factor: 1.35582 },
    { name: "Kilogram-force Meter", symbol: "kgf·m", factor: 9.80665 },
    { name: "Kilogram-force Centimeter", symbol: "kgf·cm", factor: 0.0980665 },
  ];

  const quickConversions = [
    { from: "N·m", to: "lb·ft", conversion: "1 N·m = 0.738 lb·ft" },
    { from: "N·m", to: "kN·m", conversion: "1 kN·m = 1000 N·m" },
    { from: "lb·ft", to: "lb·in", conversion: "1 lb·ft = 12 lb·in" },
    { from: "N·m", to: "kgf·m", conversion: "1 N·m = 0.102 kgf·m" },
    { from: "N·m", to: "dyn·cm", conversion: "1 N·m = 100,000 dyn·cm" },
    { from: "ft·lb", to: "N·m", conversion: "1 ft·lb = 1.356 N·m" },
  ];

  return (
    <ConverterPageLayout
      title="Moment of Force (Torque)"
      subtitle="Unit Converter"
      description="Convert between different units of torque measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All torque units supported"
    >
      <GenericConverterCard
        title="Torque Converter"
        description="Convert between different units of moment of force (torque) measurement."
        icon={RotateCw}
        units={units}
        defaultFromUnit="N·m"
        defaultToUnit="ft·lb"
        commonUnits={["N·m", "lb·ft", "kgf·m"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default MomentOfForce;
