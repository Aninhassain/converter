import ThermalConductivity from '@/components/ThermalConductivity';

export const metadata = {
  title: 'Thermal Conductivity Converter | Calculator',
  description: 'Convert thermal conductivity between W/(m·K), W/(cm·°C), cal/(s·cm·°C), and more.',
};

export default function Page() {
  return <ThermalConductivity />;
}
