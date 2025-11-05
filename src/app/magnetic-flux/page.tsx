import MagneticFlux from '@/components/MagneticFlux';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnetic Flux Converter | Online Scientific Calculator',
  description: 'Convert between weber and maxwell.',
};

export default function MagneticFluxPage() {
  return <MagneticFlux />;
}
