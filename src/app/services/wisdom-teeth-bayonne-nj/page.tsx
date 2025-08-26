import type { Metadata } from "next";
import WisdomTeethClient from "../wisdom-teeth/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("wisdom-teeth-bayonne-nj", "/Images/services/wisdom-teeth.webp");

export default function WisdomTeethHarrisburg() {
  return <WisdomTeethClient />;
}
