import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Dentist in Bayonne, NJ | Urban Dental Bayonne | Cosmetic & Family Dentist",
  description: "Trusted family & cosmetic dentistry in Bayonne, NJ. Urban Dental & Braces, Bayonne serves patients from Bayonne, Greenville, NJ and nearby areas. Call +1 (201) 479-2100 or visit 393 Avenue C, Bayonne, NJ 07002.",
};

export default function Home() {
  return (
    <HomePage/>
  );
}
