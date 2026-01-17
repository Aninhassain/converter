"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Time = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const timeUnits: UnitDefinition[] = [
    { name: "millisecond", symbol: "ms", factor: 0.001 },
    { name: "second", symbol: "s", factor: 1 },
    { name: "minute", symbol: "min", factor: 60 },
    { name: "hour", symbol: "h", factor: 3600 },
    { name: "day", symbol: "d", factor: 86400 },
    { name: "week", symbol: "wk", factor: 604800 },
    { name: "month", symbol: "mo", factor: 2629746 },
    { name: "year", symbol: "y", factor: 31556952 },
    { name: "decade", symbol: "dec", factor: 315569520 },
    { name: "century", symbol: "cent", factor: 3155695200 },
    { name: "microsecond", symbol: "μs", factor: 0.000001 },
    { name: "nanosecond", symbol: "ns", factor: 1e-9 },
  ];

  const quickConversions = [
    { from: "h", to: "min", conversion: "1 h = 60 min" },
    { from: "min", to: "s", conversion: "1 min = 60 s" },
    { from: "d", to: "h", conversion: "1 d = 24 h" },
    { from: "wk", to: "d", conversion: "1 wk = 7 d" },
    { from: "y", to: "d", conversion: "1 y = 365.24 d" },
    { from: "mo", to: "d", conversion: "1 mo = 30.44 d" },
  ];

  return (
    <ConverterPageLayout
      title="Time"
      subtitle="Unit Converter"
      description="Precision conversion between all standard time units from nanoseconds to centuries"
      quickConversions={quickConversions}
      footerText="Built with precision • All time units supported"
    >
      <GenericConverterCard
        title="Time Converter"
        description="Convert between different units of time measurement."
        icon={Clock}
        units={timeUnits}
        defaultFromUnit="second"
        defaultToUnit="minute"
        commonUnits={["second", "minute", "hour", "day", "week", "month", "year"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default Time;
