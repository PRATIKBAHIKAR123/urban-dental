import type { Metadata } from "next";
import { generatePageMetadata } from '@/lib/metadata';
import ClientPage from "./dalia-khan-client";

export const metadata: Metadata = generatePageMetadata("dalia-khan-bayonne-nj-dentist", "/Images/Team/Dalia Khan.webp");

export default function Page() {
  return <ClientPage />;
}
