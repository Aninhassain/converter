import ElectricFieldStrength from "@/components/ElectricFieldStrength";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Field Strength Converter | Online Scientific Calculator",
  description: "Convert between different units of electric field strength including V/m, N/C, statV/cm, and more. Free online electric field strength conversion calculator.",
};

export default function ElectricFieldStrengthPage() {
  return <ElectricFieldStrength />;
}