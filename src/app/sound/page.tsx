import type { Metadata } from 'next';
import Sound from '@/components/Sound';

export const metadata: Metadata = {
  title: 'Sound Level Converter - Online Calculator',
  description: 'Convert between different sound measurement units including decibels (dB), phon, neper, sound pressure level (SPL), pascal and more. Free online sound level converter.',
  keywords: 'sound level converter, decibel converter, phon converter, SPL converter, sound pressure level calculator',
};

export default function SoundPage() {
  return <Sound />;
}