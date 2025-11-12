import SpecificHeatCapacity from '@/components/SpecificHeatCapacity';

export const metadata = {
  title: 'Specific Heat Capacity Converter | Calculator',
  description: 'Convert specific heat capacity between J/(kg·K), cal/(g·°C), BTU/(lb·°F), and more.',
};

export default function Page() {
  return <SpecificHeatCapacity />;
}
