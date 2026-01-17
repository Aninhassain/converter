"use client";

import { useState } from "react";
import { Wifi } from "lucide-react";
import ConverterPageLayout from "@/components/ConverterPageLayout";
import GenericConverterCard, { type ConversionHistory, type UnitDefinition } from "@/components/GenericConverterCard";

const DataTransfer = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  const units: UnitDefinition[] = [
    { name: "Bit", symbol: "bit", factor: 1 },
    { name: "Kilobit", symbol: "kbit", factor: 1e3 },
    { name: "Kibibit", symbol: "Kibit", factor: 1024 },
    { name: "Megabit", symbol: "Mbit", factor: 1e6 },
    { name: "Mebibit", symbol: "Mibit", factor: 1024 ** 2 },
    { name: "Gigabit", symbol: "Gbit", factor: 1e9 },
    { name: "Gibibit", symbol: "Gibit", factor: 1024 ** 3 },
    { name: "Byte", symbol: "B", factor: 8 },
    { name: "Kilobyte", symbol: "KB", factor: 8 * 1e3 },
    { name: "Kibibyte", symbol: "KiB", factor: 8 * 1024 },
    { name: "Megabyte", symbol: "MB", factor: 8 * 1e6 },
    { name: "Mebibyte", symbol: "MiB", factor: 8 * 1024 ** 2 },
    { name: "Gigabyte", symbol: "GB", factor: 8 * 1e9 },
    { name: "Gibibyte", symbol: "GiB", factor: 8 * 1024 ** 3 },
  ];

  const quickConversions = [
    { from: "Byte", to: "Bit", conversion: "1 B = 8 bit" },
    { from: "Kilobyte", to: "Kilobit", conversion: "1 KB = 8 kbit" },
    { from: "Megabyte", to: "Megabit", conversion: "1 MB = 8 Mbit" },
    { from: "Gigabyte", to: "Gigabit", conversion: "1 GB = 8 Gbit" },
    { from: "Kibibyte", to: "Kilobyte", conversion: "1 KiB = 1.024 KB" },
    { from: "Mebibyte", to: "Megabyte", conversion: "1 MiB = 1.049 MB" },
  ];

  return (
    <ConverterPageLayout
      title="Data Transfer"
      subtitle="Unit Converter"
      description="Convert between different data transfer rate units including bits, bytes, kilobits, megabytes, and more."
      quickConversions={quickConversions}
      footerText="Built with precision • All data transfer units supported"
    >
      <GenericConverterCard
        title="Data Transfer Converter"
        description="Convert between different units of data transfer measurement."
        icon={Wifi}
        units={units}
        defaultFromUnit="Byte"
        defaultToUnit="Kilobyte"
        commonUnits={["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte"]}
        onConvert={handleConvert}
      />
    </ConverterPageLayout>
  );
};

export default DataTransfer;
