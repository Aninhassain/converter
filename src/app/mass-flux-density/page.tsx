import MassFluxDensity from '@/components/MassFluxDensity';

export const metadata = {
  title: 'Mass Flux Density Converter | Calculator',
  description: 'Convert mass flux density between kg/(m²·s), g/(cm²·s), lb/(ft²·s), and more.',
};

export default function Page() {
  return <MassFluxDensity />;
}
