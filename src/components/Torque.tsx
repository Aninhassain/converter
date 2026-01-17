"use client";

import { useState } from "react";
import { Wrench } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Torque = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Newton Meter", symbol: "N·m", factor: 1 },
    { name: "Newton Centimeter", symbol: "N·cm", factor: 0.01 },
    { name: "Newton Millimeter", symbol: "N·mm", factor: 0.001 },
    { name: "Kilonewton Meter", symbol: "kN·m", factor: 1000 },
    { name: "Dyne Meter", symbol: "dyn·m", factor: 0.00001 },
    { name: "Dyne Centimeter", symbol: "dyn·cm", factor: 0.0000001 },
    { name: "Dyne Millimeter", symbol: "dyn·mm", factor: 0.00000001 },
    { name: "Kilogram-force Meter", symbol: "kgf·m", factor: 9.80665 },
    { name: "Kilogram-force Centimeter", symbol: "kgf·cm", factor: 0.0980665 },
    { name: "Kilogram-force Millimeter", symbol: "kgf·mm", factor: 0.00980665 },
    { name: "Gram-force Meter", symbol: "gf·m", factor: 0.00980665 },
    { name: "Gram-force Centimeter", symbol: "gf·cm", factor: 0.0000980665 },
    { name: "Gram-force Millimeter", symbol: "gf·mm", factor: 0.00000980665 },
    { name: "Pound-force Foot", symbol: "lbf·ft", factor: 1.3558179483314004 },
    { name: "Pound-force Inch", symbol: "lbf·in", factor: 0.1129848290276167 },
    { name: "Ounce-force Foot", symbol: "ozf·ft", factor: 0.084738624 },
    { name: "Ounce-force Inch", symbol: "ozf·in", factor: 0.007061552 },
  ];

  const quickConversions = [
    { from: "N·m", to: "N·cm", conversion: "1 N·m = 100 N·cm" },
    { from: "N·m", to: "lbf·ft", conversion: "1 N·m = 0.7376 lbf·ft" },
    { from: "lbf·ft", to: "N·m", conversion: "1 lbf·ft = 1.3558 N·m" },
    { from: "kgf·m", to: "N·m", conversion: "1 kgf·m = 9.807 N·m" },
    { from: "lbf·ft", to: "lbf·in", conversion: "1 lbf·ft = 12 lbf·in" },
    { from: "kN·m", to: "N·m", conversion: "1 kN·m = 1,000 N·m" },
  ];

  return (
    <ConverterPageLayout
      title="Torque"
      subtitle="Unit Converter"
      description="Convert between different torque units including Newton meters, pound-force feet, and kilogram-force meters."
      quickConversions={quickConversions}
      footerText="Built with precision • All torque units supported"
    >
      <GenericConverterCard
        title="Torque Converter"
        description="Convert between different units of torque measurement."
        icon={Wrench}
        units={units}
        defaultFromUnit="Newton Meter"
        defaultToUnit="Newton Centimeter"
        commonUnits={["Newton Meter", "Pound-force Foot", "Kilogram-force Meter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Torque;
