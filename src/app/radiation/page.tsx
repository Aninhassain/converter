import type { Metadata } from 'next';
import Radiation from '@/components/Radiation';

export const metadata: Metadata = {
  title: 'Radiation Dose Converter - Online Calculator',
  description: 'Convert between different radiation dose units including sievert, rem, gray, rad and more. Free online radiation dose converter with common conversions.',
  keywords: 'radiation converter, sievert converter, rem converter, gray converter, rad converter, radiation dose calculator',
};

export default function RadiationPage() {
  return <Radiation />;
}