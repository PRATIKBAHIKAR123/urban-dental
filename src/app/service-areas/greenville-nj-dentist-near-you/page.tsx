import type { Metadata } from "next";
import ClientPage from "../greenville-nj/page";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("greenville-nj-dentist-near-you", "/Images/areas/Modern Dental Care in Greenville.webp");

export default function GreenVillePage() {
  return <ClientPage />;
}
