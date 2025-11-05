import ElectricConductivity from '@/components/ElectricConductivity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Conductivity Converter | Online Scientific Calculator',
  description: 'Convert between S/m, S/cm, and other conductivity units.',
};

export default function ElectricConductivityPage() {
  return <ElectricConductivity />;
}
