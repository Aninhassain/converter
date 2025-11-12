import ThermalResistance from '@/components/ThermalResistance';

export const metadata = {
  title: 'Thermal Resistance Converter | Calculator',
  description: 'Convert thermal resistance between K/W, °C/W, °F/W, and more.',
};

export default function Page() {
  return <ThermalResistance />;
}
