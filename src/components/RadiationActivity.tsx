"use client";

import { useState } from "react";
import { Activity } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const RadiationActivity = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Becquerel", symbol: "Bq", factor: 1 },
    { name: "Kilobecquerel", symbol: "kBq", factor: 1e3 },
    { name: "Megabecquerel", symbol: "MBq", factor: 1e6 },
    { name: "Gigabecquerel", symbol: "GBq", factor: 1e9 },
    { name: "Terabecquerel", symbol: "TBq", factor: 1e12 },
    { name: "Curie", symbol: "Ci", factor: 3.7e10 },
    { name: "Millicurie", symbol: "mCi", factor: 3.7e7 },
    { name: "Microcurie", symbol: "uCi", factor: 3.7e4 },
    { name: "Nanocurie", symbol: "nCi", factor: 37 },
    { name: "Picocurie", symbol: "pCi", factor: 0.037 },
    { name: "Rutherford", symbol: "Rd", factor: 1e6 },
    { name: "Disintegrations/second", symbol: "dps", factor: 1 },
    { name: "Disintegrations/minute", symbol: "dpm", factor: 1/60 },
  ];

  const quickConversions = [
    { from: "Bq", to: "Ci", conversion: "1 Bq = 2.7e-11 Ci" },
    { from: "Ci", to: "Bq", conversion: "1 Ci = 3.7e10 Bq" },
    { from: "MBq", to: "mCi", conversion: "1 MBq = 0.027 mCi" },
    { from: "Bq", to: "dps", conversion: "1 Bq = 1 dps" },
    { from: "Rd", to: "MBq", conversion: "1 Rd = 1 MBq" },
    { from: "dpm", to: "Bq", conversion: "1 dpm = 0.0167 Bq" },
  ];

  return (
    <ConverterPageLayout
      title="Radiation Activity"
      subtitle="Unit Converter"
      description="Convert between different radiation activity units including becquerel, curie, and rutherford."
      quickConversions={quickConversions}
      footerText="Built with precision - All radiation activity units supported"
    >
      <GenericConverterCard
        title="Radiation Activity Converter"
        description="Convert between different units of radiation activity measurement."
        icon={Activity}
        units={units}
        defaultFromUnit="Becquerel"
        defaultToUnit="Curie"
        commonUnits={["Becquerel", "Curie", "Megabecquerel", "Millicurie"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default RadiationActivity;
