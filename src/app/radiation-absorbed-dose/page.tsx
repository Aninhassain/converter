import type { Metadata } from 'next';
import RadiationAbsorbedDose from '@/components/RadiationAbsorbedDose';

export const metadata: Metadata = {
  title: 'Radiation Absorbed Dose Converter - Online Calculator',
  description: 'Convert between different radiation absorbed dose units including gray, rad, joule per kilogram and more. Free online radiation absorbed dose converter.',
  keywords: 'radiation absorbed dose converter, gray converter, rad converter, joule per kilogram converter',
};

export default function RadiationAbsorbedDosePage() {
  return <RadiationAbsorbedDose />;
}