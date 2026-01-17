"use client";

import { useState } from "react";
import { Box } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const VolumeDry = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Liter", symbol: "L", factor: 1 },
    { name: "Barrel (US)", symbol: "bbl", factor: 119.24 },
    { name: "Bushel (US)", symbol: "bu", factor: 35.2391 },
    { name: "Peck (US)", symbol: "pk", factor: 8.80976 },
    { name: "Gallon Dry (US)", symbol: "gal (dry)", factor: 4.40488 },
    { name: "Quart Dry (US)", symbol: "qt (dry)", factor: 1.10122 },
    { name: "Pint Dry (US)", symbol: "pt (dry)", factor: 0.55061 },
  ];

  const quickConversions = [
    { from: "bu", to: "pk", conversion: "1 bu = 4 pk" },
    { from: "pk", to: "gal (dry)", conversion: "1 pk = 2 gal (dry)" },
    { from: "gal (dry)", to: "qt (dry)", conversion: "1 gal (dry) = 4 qt (dry)" },
    { from: "bu", to: "L", conversion: "1 bu = 35.24 L" },
    { from: "bbl", to: "bu", conversion: "1 bbl = 3.38 bu" },
    { from: "L", to: "gal (dry)", conversion: "1 L = 0.227 gal (dry)" },
  ];

  return (
    <ConverterPageLayout
      title="Volume (Dry)"
      subtitle="Unit Converter"
      description="Convert between different units of dry volume measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All dry volume units supported"
    >
      <GenericConverterCard
        title="Dry Volume Converter"
        description="Convert between different units of dry volume measurement."
        icon={Box}
        units={units}
        defaultFromUnit="L"
        defaultToUnit="bu"
        commonUnits={["L", "bu", "gal (dry)"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default VolumeDry;
