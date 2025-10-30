import type { Metadata } from 'next';
import ImageResolution from '@/components/ImageResolution';

export const metadata: Metadata = {
  title: 'Digital Image Resolution Converter - Online Calculator',
  description: 'Convert between different digital image resolution units including megapixels, pixels, 4K UHD, Full HD, and more. Free online digital image resolution converter.',
  keywords: 'digital image resolution converter, megapixel converter, pixel converter, 4K UHD, Full HD, resolution calculator, image resolution tool',
};

export default function ImageResolutionPage() {
  return <ImageResolution />;
}