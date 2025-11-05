import DataTransfer from '@/components/DataTransfer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Transfer Converter | Online Scientific Calculator',
  description: 'Convert between bits, bytes, kilobits, kibibytes, megabytes, gibibytes and more.',
};

export default function DataTransferPage() {
  return <DataTransfer />;
}
