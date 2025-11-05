import ElectricResistance from "@/components/ElectricResistance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Resistance Converter | Online Scientific Calculator",
  description: "Convert between different units of electric resistance including ohm, kiloohm, megaohm, and more. Free online electric resistance conversion calculator.",
};

export default function ElectricResistancePage() {
  return <ElectricResistance />;
}