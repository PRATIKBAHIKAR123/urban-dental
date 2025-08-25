import type { Metadata } from "next";
import EmergencyDentistryClient from "../emergency-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("emergency-dentistry-bayonne-nj", "/Images/services/emergency-dentistry.webp");

export default function EmergencyDentistryHarrisburg() {
  return <EmergencyDentistryClient />;
}
