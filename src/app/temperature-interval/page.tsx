import TemperatureInterval from '@/components/TemperatureInterval';

export const metadata = {
  title: 'Temperature Interval Converter | Calculator',
  description: 'Convert temperature intervals between K, °C, °F, and °R.',
};

export default function Page() {
  return <TemperatureInterval />;
}
