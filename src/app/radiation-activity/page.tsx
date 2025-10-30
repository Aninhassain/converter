import type { Metadata } from 'next';
import RadiationActivity from '@/components/RadiationActivity';

export const metadata: Metadata = {
  title: 'Radiation Activity Converter - Online Calculator',
  description: 'Convert between different radiation activity units including becquerel, curie, disintegrations per second and more. Free online radiation activity converter.',
  keywords: 'radiation activity converter, becquerel converter, curie converter, dps converter, radiation calculator',
};

export default function RadiationActivityPage() {
  return <RadiationActivity />;
}