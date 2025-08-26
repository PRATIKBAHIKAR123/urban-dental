import type { Metadata } from "next";
import PainlessTreatmentClient from "../painless-treatment/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("painless-treatment-bayonne-nj", "/Images/services/painless-treatment.webp");

export default function PainlessTreatmentHarrisburg() {
  return <PainlessTreatmentClient />;
}
