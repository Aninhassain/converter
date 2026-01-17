"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const VelocityAngular = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Radian per Second", symbol: "rad/s", factor: 1 },
    { name: "Degree per Second", symbol: "°/s", factor: 57.2958 },
    { name: "Revolution per Minute", symbol: "rpm", factor: 9.5493 },
    { name: "Revolution per Second", symbol: "rps", factor: 6.2832 },
    { name: "Degree per Minute", symbol: "°/min", factor: 3437.75 },
    { name: "Radian per Minute", symbol: "rad/min", factor: 60 },
  ];

  const quickConversions = [
    { from: "rad/s", to: "°/s", conversion: "1 rad/s = 57.3 °/s" },
    { from: "rad/s", to: "rpm", conversion: "1 rad/s = 9.55 rpm" },
    { from: "rpm", to: "rps", conversion: "1 rpm = 0.0167 rps" },
    { from: "rps", to: "rad/s", conversion: "1 rps = 6.28 rad/s" },
    { from: "°/s", to: "rad/s", conversion: "1 °/s = 0.0175 rad/s" },
    { from: "rpm", to: "°/s", conversion: "1 rpm = 6 °/s" },
  ];

  return (
    <ConverterPageLayout
      title="Angular Velocity"
      subtitle="Unit Converter"
      description="Convert between different units of angular velocity measurement with precision."
      quickConversions={quickConversions}
      footerText="Built with precision • All angular velocity units supported"
    >
      <GenericConverterCard
        title="Angular Velocity Converter"
        description="Convert between different units of angular velocity measurement."
        icon={RotateCcw}
        units={units}
        defaultFromUnit="rad/s"
        defaultToUnit="°/s"
        commonUnits={["rad/s", "rpm", "°/s"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default VelocityAngular;
