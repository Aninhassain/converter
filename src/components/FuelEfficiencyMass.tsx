"use client";

import { useState } from "react";
import { Fuel } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const FuelEfficiencyMass = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Kilometer/kilogram", symbol: "km/kg", factor: 1 },
    { name: "Meter/kilogram", symbol: "m/kg", factor: 0.001 },
    { name: "Mile/pound", symbol: "mi/lb", factor: 1.60934 },
    { name: "Nautical mile/kilogram", symbol: "nmi/kg", factor: 1.852 },
  ];

  const quickConversions = [
    { from: "km/kg", to: "m/kg", conversion: "1 km/kg = 1,000 m/kg" },
    { from: "mi/lb", to: "km/kg", conversion: "1 mi/lb ≈ 1.609 km/kg" },
    { from: "nmi/kg", to: "km/kg", conversion: "1 nmi/kg = 1.852 km/kg" },
    { from: "km/kg", to: "mi/lb", conversion: "1 km/kg ≈ 0.621 mi/lb" },
    { from: "m/kg", to: "km/kg", conversion: "1000 m/kg = 1 km/kg" },
    { from: "nmi/kg", to: "mi/lb", conversion: "1 nmi/kg ≈ 1.151 mi/lb" },
  ];

  return (
    <ConverterPageLayout
      title="Fuel Efficiency (Mass)"
      subtitle="Unit Converter"
      description="Convert between km/kg, m/kg, mi/lb, and nautical mile/kg with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All fuel efficiency mass units supported"
    >
      <GenericConverterCard
        title="Fuel Efficiency (Mass) Converter"
        description="Convert between different units of fuel efficiency by mass measurement."
        icon={Fuel}
        units={units}
        defaultFromUnit="Kilometer/kilogram"
        defaultToUnit="Mile/pound"
        commonUnits={["Kilometer/kilogram", "Mile/pound", "Meter/kilogram"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default FuelEfficiencyMass;
