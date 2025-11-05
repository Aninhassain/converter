import MagnetomotiveForce from '@/components/MagnetomotiveForce';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnetomotive Force Converter | Online Scientific Calculator',
  description: 'Convert between ampere-turn and gilbert.',
};

export default function MagnetomotiveForcePage() {
  return <MagnetomotiveForce />;
}
