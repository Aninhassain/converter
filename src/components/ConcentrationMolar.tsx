"use client";

import { useState } from "react";
import { FlaskConical } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ConcentrationMolar = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Mole/cubic meter", symbol: "mol/m³", factor: 1 },
    { name: "Mole/liter", symbol: "mol/L", factor: 1000 },
    { name: "Millimole/liter", symbol: "mmol/L", factor: 1 },
    { name: "Kilomole/cubic meter", symbol: "kmol/m³", factor: 1000 },
  ];

  const quickConversions = [
    { from: "mol/L", to: "mol/m³", conversion: "1 mol/L = 1000 mol/m³" },
    { from: "mmol/L", to: "mol/m³", conversion: "1 mmol/L = 1 mol/m³" },
    { from: "kmol/m³", to: "mol/L", conversion: "1 kmol/m³ = 1 mol/L" },
    { from: "mol/L", to: "mmol/L", conversion: "1 mol/L = 1000 mmol/L" },
    { from: "mol/m³", to: "mmol/L", conversion: "1 mol/m³ = 1 mmol/L" },
    { from: "kmol/m³", to: "mol/m³", conversion: "1 kmol/m³ = 1000 mol/m³" },
  ];

  return (
    <ConverterPageLayout
      title="Concentration (Molar)"
      subtitle="Unit Converter"
      description="Convert molar concentration between mol/m³, mol/L, mmol/L, kmol/m³, and more with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All molar concentration units supported"
    >
      <GenericConverterCard
        title="Molar Concentration Converter"
        description="Convert between different units of molar concentration measurement."
        icon={FlaskConical}
        units={units}
        defaultFromUnit="Mole/cubic meter"
        defaultToUnit="Mole/liter"
        commonUnits={["Mole/liter", "Mole/cubic meter", "Millimole/liter"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ConcentrationMolar;
