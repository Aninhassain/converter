import VolumeLumber from '@/components/VolumeLumber';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumber Volume Converter | Online Scientific Calculator',
  description: 'Convert between board foot, cubic inch, cubic foot and cubic meter for lumber volumes.',
};

export default function VolumeLumberPage() {
  return <VolumeLumber />;
}
