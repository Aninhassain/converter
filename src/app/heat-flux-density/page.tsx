import HeatFluxDensity from '@/components/HeatFluxDensity';

export const metadata = {
  title: 'Heat Flux Density Converter | Calculator',
  description: 'Convert heat flux density between W/m², kW/m², cal/(s·cm²), and BTU/(h·ft²).',
};

export default function Page() {
  return <HeatFluxDensity />;
}
