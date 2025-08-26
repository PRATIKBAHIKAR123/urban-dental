import type { Metadata } from "next";
import HalitosisClient from "../halitosis/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("halitosis-bayonne-nj", "/Images/services/halitosis.webp");

export default function HalitosisHarrisburg() {
  return <HalitosisClient />;
}
