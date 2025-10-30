import type { Metadata } from 'next';
import RadiationExposure from '@/components/RadiationExposure';

export const metadata: Metadata = {
  title: 'Radiation Exposure Converter - Online Calculator',
  description: 'Convert between different radiation exposure units including coulomb/kg, roentgen, and exposure rates. Free online radiation exposure converter.',
  keywords: 'radiation exposure converter, roentgen converter, coulomb per kg converter, radiation rate converter',
};

export default function RadiationExposurePage() {
  return <RadiationExposure />;
}