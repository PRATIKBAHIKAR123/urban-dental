import type { Metadata } from "next";
import Client from "../bayonne-nj/page";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("bayonne-nj-dentist-near-you", "/Images/areas/Comprehensive Dental Care in Bayonne.webp");

export default function ColonialParkPaDentistNearYou() {
  return <Client />;
}
