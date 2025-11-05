import Typography from '@/components/Typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Typography Units Converter | Online Scientific Calculator',
  description: 'Convert font sizes between px, em, rem, pt and percent (assumes 16px base).',
};

export default function TypographyPage() {
  return <Typography />;
}
