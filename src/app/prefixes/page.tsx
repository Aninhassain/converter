import Prefixes from '@/components/Prefixes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SI Prefixes Converter | Online Scientific Calculator',
  description: 'Convert values between SI prefixes (kilo, mega, milli, micro, etc.).',
};

export default function PrefixesPage() {
  return <Prefixes />;
}
