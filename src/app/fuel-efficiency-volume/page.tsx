import FuelEfficiencyVolume from '@/components/FuelEfficiencyVolume';

export const metadata = {
  title: 'Fuel Efficiency (Volume) Converter | Calculator',
  description: 'Convert between km/L, L/100km, mi/gal, and more volume-based fuel efficiency units.',
};

export default function Page() {
  return <FuelEfficiencyVolume />;
}
