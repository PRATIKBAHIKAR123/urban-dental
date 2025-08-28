import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import LoaderProvider from "@/components/ui/loader";
import FloatingTextForm from "@/components/ui/floatingButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import DynamicMetadata from "../../DynamicMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional: define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentist in Bayonne, NJ | Urban Dental Bayonne | Cosmetic & Family Dentist",
  description: "Trusted family & cosmetic dentistry in Bayonne, NJ. Urban Dental & Braces, Bayonne serves patients from Bayonne, Greenville, NJ and nearby areas. Call +1 (201) 479-2100 or visit 393 Avenue C, Bayonne, NJ 07002.",
  keywords: "dentist harrisburg pa, cosmetic dentist harrisburg, family dentist harrisburg, dental implants harrisburg, root canal harrisburg, emergency dentist harrisburg",
  authors: [{ name: "Urban Dental Bayonne" }],
  creator: "Urban Dental Bayonne",
  publisher: "Urban Dental Bayonne",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mapledentalharrisburg.com",
    siteName: "Urban Dental Bayonne",
    title: "Urban Dental Bayonne | Dentist in Bayonne, NJ | Cosmetic & Family Dentist",
    description: "Top-rated cosmetic & family dentist in Harrisburg, PA. Serving patients from Colonial Park, Linglestown, Paxtang, and nearby. Call 717-745-2700 or visit us at 2017 Eg Drive, Suite 200, Harrisburg, PA 17110.",
    images: [
      {
        url: "/Images/Maple-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Urban Dental Bayonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Dental Bayonne | Dentist in Harrisburg, PA | Cosmetic & Family Dentist",
    description: "Top-rated cosmetic & family dentist in Harrisburg, PA. Serving patients from Colonial Park, Linglestown, Paxtang, and nearby. Call 717-745-2700 or visit us at 2017 Eg Drive, Suite 200, Harrisburg, PA 17110.",
    images: ["/Images/Maple-logo.jpeg"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href="https://mapledentalharrisburg.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Images/Maple-logo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased pt-18 md:pt-20`}
      >
        <GoogleTagManager />
        <DynamicMetadata />
        <Header/>
        <LoaderProvider>{children}</LoaderProvider>
        <Footer />
        <FloatingTextForm />
      </body>
    </html>
  );
}
