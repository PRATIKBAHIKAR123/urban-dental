import type { Metadata } from "next";
import { generatePageMetadata } from '@/lib/metadata';
import ClientPage from "./hala-elsamna-client";

export const metadata: Metadata = generatePageMetadata("hala-elsamna-bayonne-nj-dentist", "/Images/Team/Hala Elsamna.webp");

export default function Page() {
  return <ClientPage />;
}
