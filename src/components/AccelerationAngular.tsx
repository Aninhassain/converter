"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const AccelerationAngular = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Radian/second squared", symbol: "rad/s2", factor: 1 },
    { name: "Degree/second squared", symbol: "deg/s2", factor: 57.2958 },
    { name: "Revolution/minute squared", symbol: "rpm2", factor: 91.1 },
  ];

  const quickConversions = [
    { from: "rad/s2", to: "deg/s2", conversion: "1 rad/s2 = 57.296 deg/s2" },
    { from: "deg/s2", to: "rad/s2", conversion: "1 deg/s2 = 0.01745 rad/s2" },
    { from: "rad/s2", to: "rpm2", conversion: "1 rad/s2 = 91.1 rpm2" },
    { from: "rpm2", to: "rad/s2", conversion: "1 rpm2 = 0.01097 rad/s2" },
    { from: "deg/s2", to: "rpm2", conversion: "1 deg/s2 = 1.59 rpm2" },
    { from: "rpm2", to: "deg/s2", conversion: "1 rpm2 = 0.628 deg/s2" },
  ];

  return (
    <ConverterPageLayout
      title="Angular Acceleration"
      subtitle="Unit Converter"
      description="Convert between different angular acceleration units including rad/s2, deg/s2, and rpm2."
      quickConversions={quickConversions}
      footerText="Built with precision - All angular acceleration units supported"
    >
      <GenericConverterCard
        title="Angular Acceleration Converter"
        description="Convert between different units of angular acceleration measurement."
        icon={RotateCcw}
        units={units}
        defaultFromUnit="Radian/second squared"
        defaultToUnit="Degree/second squared"
        commonUnits={["Radian/second squared", "Degree/second squared", "Revolution/minute squared"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default AccelerationAngular;
