"use client";

import { useState } from "react";
import { Image } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const ImageResolution = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Pixels", symbol: "px", factor: 1 },
    { name: "Megapixel", symbol: "MP", factor: 1000000 },
    { name: "Gigapixel", symbol: "GP", factor: 1000000000 },
    { name: "Kilopixel", symbol: "KP", factor: 1000 },
    { name: "4K UHD", symbol: "4K", factor: 8294400 },
    { name: "8K UHD", symbol: "8K", factor: 33177600 },
    { name: "Full HD", symbol: "1080p", factor: 2073600 },
    { name: "HD", symbol: "720p", factor: 921600 },
    { name: "VGA", symbol: "VGA", factor: 307200 },
    { name: "QVGA", symbol: "QVGA", factor: 76800 },
  ];

  const quickConversions = [
    { from: "MP", to: "px", conversion: "1 MP = 1,000,000 px" },
    { from: "4K", to: "MP", conversion: "1 4K UHD ≈ 8.3 MP" },
    { from: "1080p", to: "MP", conversion: "1 Full HD ≈ 2.1 MP" },
    { from: "720p", to: "px", conversion: "1 HD = 921,600 px" },
    { from: "8K", to: "4K", conversion: "1 8K UHD = 4 × 4K UHD" },
    { from: "GP", to: "MP", conversion: "1 GP = 1,000 MP" },
  ];

  return (
    <ConverterPageLayout
      title="Image Resolution"
      subtitle="Unit Converter"
      description="Convert between different digital image resolution units including pixels, megapixels, and standard formats."
      quickConversions={quickConversions}
      footerText="Built with precision • All image resolution units supported"
    >
      <GenericConverterCard
        title="Image Resolution Converter"
        description="Convert between different units of digital image resolution measurement."
        icon={Image}
        units={units}
        defaultFromUnit="Megapixel"
        defaultToUnit="Pixels"
        commonUnits={["Megapixel", "Pixels", "4K UHD", "Full HD"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default ImageResolution;
