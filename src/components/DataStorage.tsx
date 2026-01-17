"use client";

import { useState } from "react";
import { HardDrive } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const DataStorage = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Bit", symbol: "b", factor: 1/8 },
    { name: "Nibble", symbol: "nibble", factor: 0.5 },
    { name: "Byte", symbol: "B", factor: 1 },
    { name: "Character", symbol: "char", factor: 1 },
    { name: "Word", symbol: "word", factor: 4 },
    { name: "MAPM-word", symbol: "MAPM-word", factor: 8 },
    { name: "Quadruple-word", symbol: "quad-word", factor: 8 },
    { name: "Block", symbol: "block", factor: 512 },
    { name: "Kilobit", symbol: "kb", factor: 1024/8 },
    { name: "Kilobyte", symbol: "kB", factor: 1024 },
    { name: "Kilobyte (SI)", symbol: "kB (10³)", factor: 1000 },
    { name: "Megabit", symbol: "Mb", factor: 1024*1024/8 },
    { name: "Megabyte", symbol: "MB", factor: 1024*1024 },
    { name: "Megabyte (SI)", symbol: "MB (10⁶)", factor: 1000*1000 },
    { name: "Gigabit", symbol: "Gb", factor: 1024*1024*1024/8 },
    { name: "Gigabyte", symbol: "GB", factor: 1024*1024*1024 },
    { name: "Gigabyte (SI)", symbol: "GB (10⁹)", factor: 1000*1000*1000 },
    { name: "Terabit", symbol: "Tb", factor: 1024*1024*1024*1024/8 },
    { name: "Terabyte", symbol: "TB", factor: 1024*1024*1024*1024 },
    { name: "Terabyte (SI)", symbol: "TB (10¹²)", factor: 1000*1000*1000*1000 },
    { name: "Petabit", symbol: "Pb", factor: 1024*1024*1024*1024*1024/8 },
    { name: "Petabyte", symbol: "PB", factor: 1024*1024*1024*1024*1024 },
    { name: "Petabyte (SI)", symbol: "PB (10¹⁵)", factor: 1000*1000*1000*1000*1000 },
    { name: "Exabit", symbol: "Eb", factor: 1024*1024*1024*1024*1024*1024/8 },
    { name: "Exabyte", symbol: "EB", factor: 1024*1024*1024*1024*1024*1024 },
    { name: "Exabyte (SI)", symbol: "EB (10¹⁸)", factor: 1000*1000*1000*1000*1000*1000 },
    { name: "Floppy (3.5\" DD)", symbol: "3.5\" DD", factor: 737280 },
    { name: "Floppy (3.5\" HD)", symbol: "3.5\" HD", factor: 1474560 },
    { name: "Floppy (3.5\" ED)", symbol: "3.5\" ED", factor: 2880000 },
    { name: "Floppy (5.25\" DD)", symbol: "5.25\" DD", factor: 368640 },
    { name: "Floppy (5.25\" HD)", symbol: "5.25\" HD", factor: 1228800 },
    { name: "Zip 100", symbol: "Zip 100", factor: 100*1024*1024 },
    { name: "Zip 250", symbol: "Zip 250", factor: 250*1024*1024 },
    { name: "Jaz 1GB", symbol: "Jaz 1GB", factor: 1024*1024*1024 },
    { name: "Jaz 2GB", symbol: "Jaz 2GB", factor: 2*1024*1024*1024 },
    { name: "CD (74 min)", symbol: "CD 74min", factor: 650*1024*1024 },
    { name: "CD (80 min)", symbol: "CD 80min", factor: 700*1024*1024 },
    { name: "DVD (1L 1S)", symbol: "DVD 1L1S", factor: 4.7*1024*1024*1024 },
    { name: "DVD (2L 1S)", symbol: "DVD 2L1S", factor: 8.5*1024*1024*1024 },
    { name: "DVD (1L 2S)", symbol: "DVD 1L2S", factor: 9.4*1024*1024*1024 },
    { name: "DVD (2L 2S)", symbol: "DVD 2L2S", factor: 17*1024*1024*1024 },
    { name: "Blu-ray SL", symbol: "BD SL", factor: 25*1024*1024*1024 },
    { name: "Blu-ray DL", symbol: "BD DL", factor: 50*1024*1024*1024 },
  ];

  const quickConversions = [
    { from: "Byte", to: "Bit", conversion: "1 B = 8 b" },
    { from: "Kilobyte", to: "Byte", conversion: "1 KB = 1,024 B" },
    { from: "Megabyte", to: "Kilobyte", conversion: "1 MB = 1,024 KB" },
    { from: "Gigabyte", to: "Megabyte", conversion: "1 GB = 1,024 MB" },
    { from: "Terabyte", to: "Gigabyte", conversion: "1 TB = 1,024 GB" },
    { from: "DVD", to: "Gigabyte", conversion: "1 DVD = 4.7 GB" },
  ];

  return (
    <ConverterPageLayout
      title="Data Storage"
      subtitle="Unit Converter"
      description="Convert between different data storage units including bits, bytes, kilobytes, and various storage media."
      quickConversions={quickConversions}
      footerText="Built with precision • All data storage units supported"
    >
      <GenericConverterCard
        title="Data Storage Converter"
        description="Convert between different units of data storage measurement."
        icon={HardDrive}
        units={units}
        defaultFromUnit="Byte"
        defaultToUnit="Kilobyte"
        commonUnits={["Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default DataStorage;
