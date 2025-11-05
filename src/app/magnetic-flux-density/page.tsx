import MagneticFluxDensity from '@/components/MagneticFluxDensity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnetic Flux Density Converter | Online Scientific Calculator',
  description: 'Convert between tesla and gauss.',
};

export default function MagneticFluxDensityPage() {
  return <MagneticFluxDensity />;
}
