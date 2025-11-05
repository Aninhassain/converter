import MagneticFieldStrength from '@/components/MagneticFieldStrength';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnetic Field Strength Converter | Online Scientific Calculator',
  description: 'Convert between ampere-per-meter and oersted.',
};

export default function MagneticFieldStrengthPage() {
  return <MagneticFieldStrength />;
}
