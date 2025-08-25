import type { Metadata } from "next";
import OrthodonticsClient from "../orthodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("orthodontics-bayonne-nj", "/Images/services/orthodontics.webp");

export default function OrthodonticsHarrisburg() {
  return <OrthodonticsClient />;
}
