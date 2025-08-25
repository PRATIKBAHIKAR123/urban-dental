import type { Metadata } from "next";
import OralSurgeryClient from "../oral-surgery/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("oral-surgery-bayonne-nj", "/Images/Oral Surgery.webp");

export default function OralSurgeryHarrisburg() {
  return <OralSurgeryClient />;
}
