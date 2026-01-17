"use client";

import { useState, useCallback } from "react";
import { Waves } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const SPEED_OF_LIGHT = 299792458;

const FrequencyWavelength = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [conversionType, setConversionType] = useState<"frequency" | "wavelength">("frequency");

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const frequencyUnits: UnitDefinition[] = [
    { name: "Hertz", symbol: "Hz", factor: 1 },
    { name: "Kilohertz", symbol: "kHz", factor: 1e3 },
    { name: "Megahertz", symbol: "MHz", factor: 1e6 },
    { name: "Gigahertz", symbol: "GHz", factor: 1e9 },
    { name: "Terahertz", symbol: "THz", factor: 1e12 },
  ];

  const wavelengthUnits: UnitDefinition[] = [
    { name: "Meter", symbol: "m", factor: 1 },
    { name: "Centimeter", symbol: "cm", factor: 0.01 },
    { name: "Millimeter", symbol: "mm", factor: 0.001 },
    { name: "Micrometer", symbol: "um", factor: 1e-6 },
    { name: "Nanometer", symbol: "nm", factor: 1e-9 },
    { name: "Angstrom", symbol: "A", factor: 1e-10 },
    { name: "Picometer", symbol: "pm", factor: 1e-12 },
  ];

  const units = conversionType === "frequency" ? frequencyUnits : wavelengthUnits;
  const toUnits = conversionType === "frequency" ? wavelengthUnits : frequencyUnits;

  const customConvert = useCallback((value: number, from: string, to: string): number => {
    if (conversionType === "frequency") {
      const fromUnitData = frequencyUnits.find(unit => unit.name === from);
      const toUnitData = wavelengthUnits.find(unit => unit.name === to);
      if (fromUnitData && toUnitData) {
        const frequencyInHz = value * fromUnitData.factor;
        const wavelengthInMeters = SPEED_OF_LIGHT / frequencyInHz;
        return wavelengthInMeters / toUnitData.factor;
      }
    } else {
      const fromUnitData = wavelengthUnits.find(unit => unit.name === from);
      const toUnitData = frequencyUnits.find(unit => unit.name === to);
      if (fromUnitData && toUnitData) {
        const wavelengthInMeters = value * fromUnitData.factor;
        const frequencyInHz = SPEED_OF_LIGHT / wavelengthInMeters;
        return frequencyInHz / toUnitData.factor;
      }
    }
    return value;
  }, [conversionType]);

  const quickConversions = [
    { from: "1 Hz", to: "Wavelength", conversion: "299,792,458 m" },
    { from: "1 MHz", to: "Wavelength", conversion: "299.79 m" },
    { from: "1 GHz", to: "Wavelength", conversion: "0.3 m" },
    { from: "Visible Light", to: "Wavelength", conversion: "400-700 nm" },
    { from: "Radio Waves", to: "Frequency", conversion: "3 kHz - 300 GHz" },
    { from: "X-rays", to: "Wavelength", conversion: "0.01-10 nm" },
  ];

  return (
    <ConverterPageLayout
      title="Frequency & Wavelength"
      subtitle="Converter"
      description="Convert between frequency and wavelength using the speed of light."
      quickConversions={quickConversions}
      footerText="Built with precision - Speed of light: 299,792,458 m/s"
    >
      <div className="mb-6 flex justify-center gap-4">
        <button
          onClick={() => setConversionType("frequency")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${conversionType === "frequency" ? "bg-primary text-white" : "bg-card/50 text-muted-foreground hover:bg-card/70"}`}
        >
          Frequency to Wavelength
        </button>
        <button
          onClick={() => setConversionType("wavelength")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${conversionType === "wavelength" ? "bg-primary text-white" : "bg-card/50 text-muted-foreground hover:bg-card/70"}`}
        >
          Wavelength to Frequency
        </button>
      </div>
      <GenericConverterCard
        title={conversionType === "frequency" ? "Frequency to Wavelength" : "Wavelength to Frequency"}
        description={"Convert " + conversionType + " to " + (conversionType === "frequency" ? "wavelength" : "frequency") + " using the speed of light."}
        icon={Waves}
        units={[...units, ...toUnits]}
        defaultFromUnit={conversionType === "frequency" ? "Hertz" : "Meter"}
        defaultToUnit={conversionType === "frequency" ? "Meter" : "Hertz"}
        commonUnits={conversionType === "frequency" ? ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"] : ["Meter", "Centimeter", "Nanometer"]}
        onConvert={handleConvert}
        customConvert={customConvert}
      />
    </ConverterPageLayout>
  );
};

export default FrequencyWavelength;
