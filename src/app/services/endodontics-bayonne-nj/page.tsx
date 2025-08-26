import type { Metadata } from "next";
import EndodonticsClient from "../endodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("endodontics-bayonne-nj", "/Images/services/endodontics.webp");

export default function EndodonticsHarrisburg() {
  return <EndodonticsClient />;
}
