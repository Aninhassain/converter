"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const RadiationExposure = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Coulomb/kg", symbol: "C/kg", factor: 1 },
    { name: "Millicoulomb/kg", symbol: "mC/kg", factor: 0.001 },
    { name: "Microcoulomb/kg", symbol: "uC/kg", factor: 0.000001 },
    { name: "Roentgen", symbol: "R", factor: 0.000258 },
    { name: "Milliroentgen", symbol: "mR", factor: 0.000000258 },
    { name: "Microroentgen", symbol: "uR", factor: 2.58e-10 },
    { name: "Exposure/hour", symbol: "R/h", factor: 0.000258 },
    { name: "Exposure/minute", symbol: "R/min", factor: 0.0000043 },
    { name: "Exposure/second", symbol: "R/s", factor: 7.17e-8 },
  ];

  const quickConversions = [
    { from: "C/kg", to: "R", conversion: "1 C/kg = 3876 R" },
    { from: "R", to: "C/kg", conversion: "1 R = 2.58e-4 C/kg" },
    { from: "mR", to: "R", conversion: "1 mR = 0.001 R" },
    { from: "R/h", to: "C/kg-h", conversion: "1 R/h = 2.58e-4 C/kg-h" },
    { from: "mR", to: "uR", conversion: "1 mR = 1000 uR" },
    { from: "R", to: "mR", conversion: "1 R = 1000 mR" },
  ];

  return (
    <ConverterPageLayout
      title="Radiation Exposure"
      subtitle="Unit Converter"
      description="Convert between different radiation exposure units including C/kg and roentgen."
      quickConversions={quickConversions}
      footerText="Built with precision - All radiation exposure units supported"
    >
      <GenericConverterCard
        title="Radiation Exposure Converter"
        description="Convert between different units of radiation exposure measurement."
        icon={AlertTriangle}
        units={units}
        defaultFromUnit="Coulomb/kg"
        defaultToUnit="Roentgen"
        commonUnits={["Coulomb/kg", "Roentgen", "Milliroentgen"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default RadiationExposure;
