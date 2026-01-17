"use client";

import { useState } from "react";
import { ShieldAlert } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const RadiationAbsorbedDose = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Gray", symbol: "Gy", factor: 1 },
    { name: "Milligray", symbol: "mGy", factor: 0.001 },
    { name: "Microgray", symbol: "uGy", factor: 0.000001 },
    { name: "Rad", symbol: "rad", factor: 0.01 },
    { name: "Millirad", symbol: "mrad", factor: 0.00001 },
    { name: "Microrad", symbol: "urad", factor: 0.00000001 },
    { name: "Joule/kilogram", symbol: "J/kg", factor: 1 },
    { name: "Erg/gram", symbol: "erg/g", factor: 0.0001 },
    { name: "Gray/hour", symbol: "Gy/h", factor: 1 },
    { name: "Gray/minute", symbol: "Gy/min", factor: 0.01667 },
    { name: "Gray/second", symbol: "Gy/s", factor: 0.000278 },
    { name: "Rad/hour", symbol: "rad/h", factor: 0.01 },
  ];

  const quickConversions = [
    { from: "Gy", to: "rad", conversion: "1 Gy = 100 rad" },
    { from: "rad", to: "Gy", conversion: "1 rad = 0.01 Gy" },
    { from: "Gy", to: "J/kg", conversion: "1 Gy = 1 J/kg" },
    { from: "mGy", to: "mrad", conversion: "1 mGy = 100 mrad" },
    { from: "Gy/h", to: "rad/h", conversion: "1 Gy/h = 100 rad/h" },
    { from: "erg/g", to: "Gy", conversion: "100 erg/g = 0.01 Gy" },
  ];

  return (
    <ConverterPageLayout
      title="Radiation Absorbed Dose"
      subtitle="Unit Converter"
      description="Convert between different radiation absorbed dose units including gray, rad, and joule/kilogram."
      quickConversions={quickConversions}
      footerText="Built with precision - All radiation absorbed dose units supported"
    >
      <GenericConverterCard
        title="Radiation Absorbed Dose Converter"
        description="Convert between different units of radiation absorbed dose measurement."
        icon={ShieldAlert}
        units={units}
        defaultFromUnit="Gray"
        defaultToUnit="Rad"
        commonUnits={["Gray", "Rad", "Milligray", "Joule/kilogram"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default RadiationAbsorbedDose;
