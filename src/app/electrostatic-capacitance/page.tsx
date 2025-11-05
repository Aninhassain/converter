import ElectrostaticCapacitance from '@/components/ElectrostaticCapacitance';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrostatic Capacitance Converter | Online Scientific Calculator',
  description: 'Convert between farad, microfarad, nanofarad, picofarad and more.',
};

export default function ElectrostaticCapacitancePage() {
  return <ElectrostaticCapacitance />;
}
