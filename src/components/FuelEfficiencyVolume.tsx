"use client";

import { useState } from "react";
import { Fuel } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const FuelEfficiencyVolume = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kilometer/liter", symbol: "km/L", factor: 1 },
    { name: "Liter/100km", symbol: "L/100km", factor: 100 },
    { name: "Mile/gallon (US)", symbol: "mi/gal US", factor: 0.425144 },
    { name: "Mile/gallon (UK)", symbol: "mi/gal UK", factor: 0.354006 },
  ];

  const quickConversions = [
    { from: "km/L", to: "mi/gal US", conversion: "1 km/L ≈ 2.352 mi/gal US" },
    { from: "mi/gal US", to: "km/L", conversion: "1 mi/gal US ≈ 0.425 km/L" },
    { from: "mi/gal UK", to: "mi/gal US", conversion: "1 mi/gal UK ≈ 0.833 mi/gal US" },
    { from: "km/L", to: "L/100km", conversion: "10 km/L = 10 L/100km" },
    { from: "L/100km", to: "km/L", conversion: "10 L/100km = 10 km/L" },
    { from: "mi/gal US", to: "mi/gal UK", conversion: "1 mi/gal US ≈ 1.201 mi/gal UK" },
  ];

  return (
    <ConverterPageLayout
      title="Fuel Efficiency (Volume)"
      subtitle="Unit Converter"
      description="Convert between km/L, L/100km, mi/gal (US), and mi/gal (UK) with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All fuel efficiency volume units supported"
    >
      <GenericConverterCard
        title="Fuel Efficiency (Volume) Converter"
        description="Convert between different units of fuel efficiency by volume measurement."
        icon={Fuel}
        units={units}
        defaultFromUnit="Kilometer/liter"
        defaultToUnit="Mile/gallon (US)"
        commonUnits={["Kilometer/liter", "Mile/gallon (US)", "Liter/100km"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default FuelEfficiencyVolume;
