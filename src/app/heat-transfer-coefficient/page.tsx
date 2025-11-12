import HeatTransferCoefficient from '@/components/HeatTransferCoefficient';

export const metadata = {
  title: 'Heat Transfer Coefficient Converter | Calculator',
  description: 'Convert heat transfer coefficient between W/(m²·K), W/(cm²·°C), kcal/(h·m²·°C), and more.',
};

export default function Page() {
  return <HeatTransferCoefficient />;
}
