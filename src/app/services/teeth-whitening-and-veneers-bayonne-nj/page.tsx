import type { Metadata } from "next";
import WhiteningVeneersClient from "../whitening-&-veneers/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("teeth-whitening-and-veneers-bayonne-nj", "/Images/services/whitening-veneers.webp");

export default function TeethWhiteningAndVeneersHarrisburg() {
  return <WhiteningVeneersClient />;
}
