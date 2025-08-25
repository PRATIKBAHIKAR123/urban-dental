import type { Metadata } from "next";
import SportsDentistryClient from "../sports-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("sports-dentistry-bayonne-nj", "/Images/services/sports-dentistry.webp");

export default function SportsDentistryHarrisburg() {
  return <SportsDentistryClient />;
}
