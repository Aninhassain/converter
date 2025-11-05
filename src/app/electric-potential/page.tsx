import ElectricPotential from "@/components/ElectricPotential";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Potential Converter | Online Scientific Calculator",
  description: "Convert between different units of electric potential including volts, kilovolts, statvolts, and more. Free online electric potential conversion calculator.",
};

export default function ElectricPotentialPage() {
  return <ElectricPotential />;
}