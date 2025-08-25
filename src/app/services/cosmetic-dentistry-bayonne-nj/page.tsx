import type { Metadata } from "next";
import CosmeticDentistryClient from "../cosmetic-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("cosmetic-dentistry-bayonne-nj", "/Images/services/cosmetic-dentistry.webp");

export default function CosmeticDentistryHarrisburg() {
  return <CosmeticDentistryClient />;
}
