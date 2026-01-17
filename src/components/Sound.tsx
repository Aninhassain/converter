"use client";

import { useState, useCallback } from "react";
import { Volume2 } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const Sound = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Decibel", symbol: "dB", factor: 1 },
    { name: "Phon", symbol: "phon", factor: 1 },
    { name: "Neper", symbol: "Np", factor: 8.686 },
    { name: "Bel", symbol: "B", factor: 10 },
    { name: "Sound pressure level", symbol: "SPL", factor: 1 },
    { name: "Sound power level", symbol: "SWL", factor: 1 },
    { name: "Sound intensity level", symbol: "SIL", factor: 1 },
    { name: "Pascal", symbol: "Pa", factor: 1 },
    { name: "Micropascal", symbol: "uPa", factor: 0.000001 },
    { name: "Watt/square-meter", symbol: "W/m2", factor: 1 },
    { name: "Milliwatt/square-meter", symbol: "mW/m2", factor: 0.001 },
  ];

  const customConvert = useCallback((value: number, from: string, to: string): number => {
    const p0 = 20e-6;
    
    if ((from === "Pascal" || from === "Micropascal") && 
        (to === "Decibel" || to === "Sound pressure level")) {
      const fromFactor = from === "Micropascal" ? 0.000001 : 1;
      const pressure = value * fromFactor;
      return 20 * Math.log10(pressure / p0);
    } else if ((from === "Decibel" || from === "Sound pressure level") && 
               (to === "Pascal" || to === "Micropascal")) {
      const toFactor = to === "Micropascal" ? 0.000001 : 1;
      return p0 * Math.pow(10, value / 20) / toFactor;
    }

    const fromUnit = units.find(u => u.name === from);
    const toUnit = units.find(u => u.name === to);
    
    if (fromUnit && toUnit) {
      return (value * fromUnit.factor) / toUnit.factor;
    }
    return value;
  }, []);

  const quickConversions = [
    { from: "dB", to: "B", conversion: "1 dB = 0.1 B" },
    { from: "B", to: "dB", conversion: "1 B = 10 dB" },
    { from: "Np", to: "dB", conversion: "1 Np = 8.686 dB" },
    { from: "Whisper", to: "dB", conversion: "~30 dB SPL" },
    { from: "Conversation", to: "dB", conversion: "~60 dB SPL" },
    { from: "Rock concert", to: "dB", conversion: "~110 dB SPL" },
  ];

  return (
    <ConverterPageLayout
      title="Sound"
      subtitle="Unit Converter"
      description="Convert between different sound level units including decibels, phons, and nepers."
      quickConversions={quickConversions}
      footerText="Built with precision - All sound units supported"
    >
      <GenericConverterCard
        title="Sound Level Converter"
        description="Convert between different units of sound measurement."
        icon={Volume2}
        units={units}
        defaultFromUnit="Decibel"
        defaultToUnit="Phon"
        commonUnits={["Decibel", "Phon", "Sound pressure level", "Pascal"]}
        onConvert={handleConvert}
        customConvert={customConvert}
      />
    </ConverterPageLayout>
  );
};

export default Sound;
