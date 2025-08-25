import type { Metadata } from "next";
import DentalImplantsClient from "../dental-implants/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-implants-bayonne-nj", "/Images/services/dental-implants.webp");

export default function DentalImplantsHarrisburg() {
  return <DentalImplantsClient />;
}
