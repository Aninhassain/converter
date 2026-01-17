"use client";

import { useState } from "react";
import { FlaskConical } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const FlowMolar = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Mole/second", symbol: "mol/s", factor: 1 },
    { name: "Mole/minute", symbol: "mol/min", factor: 0.01667 },
    { name: "Mole/hour", symbol: "mol/h", factor: 0.000278 },
    { name: "Kilomole/second", symbol: "kmol/s", factor: 1000 },
    { name: "Kilomole/hour", symbol: "kmol/h", factor: 0.278 },
  ];

  const quickConversions = [
    { from: "mol/s", to: "mol/h", conversion: "1 mol/s = 3600 mol/h" },
    { from: "mol/s", to: "mol/min", conversion: "1 mol/s = 60 mol/min" },
    { from: "kmol/s", to: "mol/s", conversion: "1 kmol/s = 1000 mol/s" },
    { from: "kmol/h", to: "mol/h", conversion: "1 kmol/h = 1000 mol/h" },
    { from: "mol/min", to: "mol/h", conversion: "1 mol/min = 60 mol/h" },
    { from: "kmol/s", to: "kmol/h", conversion: "1 kmol/s = 3600 kmol/h" },
  ];

  return (
    <ConverterPageLayout
      title="Molar Flow"
      subtitle="Unit Converter"
      description="Convert between different molar flow rate units including mol/s, mol/min, and kmol/h."
      quickConversions={quickConversions}
      footerText="Built with precision - All molar flow units supported"
    >
      <GenericConverterCard
        title="Molar Flow Converter"
        description="Convert between different units of molar flow measurement."
        icon={FlaskConical}
        units={units}
        defaultFromUnit="Mole/second"
        defaultToUnit="Mole/hour"
        commonUnits={["Mole/second", "Mole/hour", "Kilomole/second"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default FlowMolar;
