import type { Metadata } from "next";
import CrownsAndBridgesClient from "../crowns-and-bridges/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("crowns-and-bridges-bayonne-nj", "/Images/services/crown-bridge.webp");

export default function CrownsAndBridgesHarrisburg() {
  return <CrownsAndBridgesClient />;
}
