"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const LinearChargeDensity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Coulomb/meter", symbol: "C/m", factor: 1 },
    { name: "Coulomb/centimeter", symbol: "C/cm", factor: 100 },
    { name: "Coulomb/millimeter", symbol: "C/mm", factor: 1000 },
    { name: "Millicoulomb/meter", symbol: "mC/m", factor: 0.001 },
    { name: "Microcoulomb/meter", symbol: "µC/m", factor: 1e-6 },
    { name: "Nanocoulomb/meter", symbol: "nC/m", factor: 1e-9 },
    { name: "Picocoulomb/meter", symbol: "pC/m", factor: 1e-12 },
    { name: "Statcoulomb/meter", symbol: "statC/m", factor: 3.335641e-10 },
    { name: "Statcoulomb/centimeter", symbol: "statC/cm", factor: 3.335641e-8 },
  ];

  const quickConversions = [
    { from: "C/m", to: "C/cm", conversion: "1 C/m = 0.01 C/cm" },
    { from: "C/m", to: "C/mm", conversion: "1 C/m = 0.001 C/mm" },
    { from: "mC/m", to: "C/m", conversion: "1 mC/m = 0.001 C/m" },
    { from: "µC/m", to: "C/m", conversion: "1 µC/m = 0.000001 C/m" },
    { from: "nC/m", to: "pC/m", conversion: "1 nC/m = 1000 pC/m" },
    { from: "statC/m", to: "C/m", conversion: "1 statC/m ≈ 3.336×10⁻¹⁰ C/m" },
  ];

  return (
    <ConverterPageLayout
      title="Linear Charge Density"
      subtitle="Unit Converter"
      description="Convert between different units of linear charge density measurement including SI and CGS units."
      quickConversions={quickConversions}
      footerText="Built with precision • All linear charge density units supported"
    >
      <GenericConverterCard
        title="Linear Charge Density Converter"
        description="Convert between different units of linear charge density measurement."
        icon={Zap}
        units={units}
        defaultFromUnit="Coulomb/meter"
        defaultToUnit="Coulomb/centimeter"
        commonUnits={["Coulomb/meter", "Coulomb/centimeter", "Microcoulomb/meter", "Nanocoulomb/meter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default LinearChargeDensity;
