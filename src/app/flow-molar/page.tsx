import FlowMolar from '@/components/FlowMolar';

export const metadata = {
  title: 'Flow (Molar) Converter | Calculator',
  description: 'Convert molar flow rates between mol/s, mol/min, mol/h, kmol/s, and kmol/h.',
};

export default function Page() {
  return <FlowMolar />;
}
