import Inductance from '@/components/Inductance';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inductance Converter | Online Scientific Calculator',
  description: 'Convert between henry (H), millihenry (mH), microhenry (µH) and nanohenry (nH).',
};

export default function InductancePage() {
  return <Inductance />;
}
