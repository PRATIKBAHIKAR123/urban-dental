import type { Metadata } from "next";
import { generatePageMetadata } from '@/lib/metadata';
import ClientPage from "./steven-reff-client";

export const metadata: Metadata = generatePageMetadata("steven-reff-bayonne-nj-dentist", "/Images/Team/Steven Reff.webp");

export default function Page() {
  return <ClientPage />;
}
