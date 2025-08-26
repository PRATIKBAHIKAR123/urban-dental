import type { Metadata } from "next";
import PerioProtectClient from "../perio-protect/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("perio-protect-bayonne-nj", "/Images/services/perio-protect.webp");

export default function PerioProtectHarrisburg() {
  return <PerioProtectClient />;
}
