import type { Metadata } from "next";
import ToothExtractionClient from "../tooth-extraction/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("tooth-extraction-bayonne-nj", "/Images/services/tooth-extraction (1).webp");

export default function ToothExtractionHarrisburg() {
  return <ToothExtractionClient />;
}
