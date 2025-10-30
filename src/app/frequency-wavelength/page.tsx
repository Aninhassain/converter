import type { Metadata } from 'next';
import FrequencyWavelength from '@/components/FrequencyWavelength';

export const metadata: Metadata = {
  title: 'Frequency & Wavelength Converter - Online Calculator',
  description: 'Convert between frequency and wavelength units. Calculate wavelength from frequency and vice versa using the speed of light constant. Free online electromagnetic wave converter.',
  keywords: 'frequency wavelength converter, electromagnetic waves, frequency calculator, wavelength calculator, Hz to nm converter, MHz to wavelength',
};

export default function FrequencyWavelengthPage() {
  return <FrequencyWavelength />;
}