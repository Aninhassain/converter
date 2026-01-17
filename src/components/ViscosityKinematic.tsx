"use client";

import { useState } from "react";
import { Droplets } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ViscosityKinematic = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Square Meter per Second", symbol: "m²/s", factor: 1 },
    { name: "Stokes", symbol: "St", factor: 0.0001 },
    { name: "Centistokes", symbol: "cSt", factor: 0.000001 },
    { name: "Square Foot per Second", symbol: "ft²/s", factor: 0.092903 },
    { name: "Square Millimeter per Second", symbol: "mm²/s", factor: 0.000001 },
    { name: "Square Centimeter per Second", symbol: "cm²/s", factor: 0.0001 },
    { name: "Square Inch per Second", symbol: "in²/s", factor: 0.00064516 },
    { name: "Square Meter per Hour", symbol: "m²/h", factor: 2.777778e-4 },
    { name: "Square Foot per Hour", symbol: "ft²/h", factor: 2.58064e-5 },
    { name: "Microstokes", symbol: "μSt", factor: 1e-10 },
    { name: "Nanostokes", symbol: "nSt", factor: 1e-13 },
  ];

  const quickConversions = [
    { from: "m²/s", to: "St", conversion: "1 m²/s = 10,000 St" },
    { from: "St", to: "cSt", conversion: "1 St = 100 cSt" },
    { from: "m²/s", to: "cSt", conversion: "1 m²/s = 1,000,000 cSt" },
    { from: "cSt", to: "mm²/s", conversion: "1 cSt = 1 mm²/s" },
    { from: "m²/s", to: "ft²/s", conversion: "1 m²/s = 10.76 ft²/s" },
    { from: "St", to: "cm²/s", conversion: "1 St = 1 cm²/s" },
  ];

  return (
    <ConverterPageLayout
      title="Kinematic Viscosity"
      subtitle="Unit Converter"
      description="Convert between different units of kinematic viscosity measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All kinematic viscosity units supported"
    >
      <GenericConverterCard
        title="Kinematic Viscosity Converter"
        description="Convert between different units of kinematic viscosity measurement."
        icon={Droplets}
        units={units}
        defaultFromUnit="m²/s"
        defaultToUnit="St"
        commonUnits={["m²/s", "St", "cSt"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ViscosityKinematic;
