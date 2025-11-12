import FlowMass from '@/components/FlowMass';

export const metadata = {
  title: 'Flow (Mass) Converter | Calculator',
  description: 'Convert mass flow rates between kg/s, kg/h, kg/min, g/s, lb/s, lb/h, and more.',
};

export default function Page() {
  return <FlowMass />;
}
