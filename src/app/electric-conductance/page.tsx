import ElectricConductance from '@/components/ElectricConductance';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Conductance Converter | Online Scientific Calculator',
  description: 'Convert between Siemens, millisiemens, microsiemens, and more.',
};

export default function ElectricConductancePage() {
  return <ElectricConductance />;
}
