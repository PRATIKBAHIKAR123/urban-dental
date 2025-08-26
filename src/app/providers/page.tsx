"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Meet Our Dental Providers | Maple Dental Harrisburg, PA",
//     description: "Get to know the experienced dental providers at Maple Dental in Harrisburg, PA. Our team is committed to your family's oral health.",
// };

const providers = [
    {
        name: "Dr. Hala Elsamna, DMD",
        image: "/Images/Team/Hala Elsamna.webp",
        link: "/providers/hala-elsamna-bayonne-nj-dentist",
    },
        {
        name: "Dr. Dalia Khan, DDS",
        image: "/Images/Team/Dalia Khan.webp",
        link: "/providers/dalia-khan-bayonne-nj-dentist",
    },
            {
        name: "Dr. Steven Reff, DDS",
        image: "/Images/Team/Steven Reff.webp",
        link: "/providers/steven-reff-bayonne-nj-dentist",
    },
];

export default function ProvidersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
            {/* Header Section with blue background */}
            <div className="details-page-header-section">
                <h1 >Meet the Expert Dentists at Urban Dental Bayonne </h1>
                <h2>Dedicated Professionals Committed to Your Smile</h2>
            </div>
            <div className="max-w-7xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
                <div
                    className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-3 "
                >
                    {providers.map((provider, idx) => (
                        <div
                            key={provider.name}
                            className={clsx(
                                "relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100",
                                
                            )}
                        >
                            <div className="w-full h-1/3 relative min-h-[260px]">
                                <Image
                                    src={provider.image}
                                    alt={provider.name}
                                    fill
                                    className="object-contain object-center rounded-t-xl"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                                    priority={idx < 3}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                            </div>
                            <div className="flex-1 flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-2 text-center leading-tight">
                                    {provider.name}
                                </h2>
                                <Link
                                    href={provider.link}
                                    className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-secondary text-sm font-medium mb-2 transition"
                                >
                                    Learn More 
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 