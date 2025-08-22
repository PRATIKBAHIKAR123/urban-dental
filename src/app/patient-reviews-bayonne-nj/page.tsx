"use client";

import Image from "next/image";
import clsx from "clsx";

const reviews = [
  {
    name: "Maria S.",
    date: "Jul 10, 2025",
    rating: 5,
    text: "Dr. Hala Elsamna is absolutely amazing! She took the time to explain my treatment plan and made me feel at ease throughout my visit. The office is clean, modern, and welcoming. I finally found a dentist in Bayonne who truly cares about patients.",
    image: "/Images/836.jpg",
  },
  {
    name: "Thomas K.",
    date: "Apr 30, 2025",
    rating: 5,
    text: "I brought my son in for a checkup with Dr. Dalia Khan, and she was so patient and kind. He usually hates going to the dentist, but she made the experience fun and stress-free. I’m grateful to have found a family-friendly dental office right here in Bayonne.",
    image: "/Images/837.jpg",
  },
  {
    name: "Aisha R.",
    date: "Mar 04, 2025",
    rating: 4,
    text: "Dr. Steven Reff helped me with a dental emergency, and I couldn’t be more thankful. I was in a lot of pain, but he quickly diagnosed the issue and took care of it the same day. The whole team is professional and compassionate.",
    image: "/Images/836.jpg",
  },
  {
    name: "Kevin D.",
    date: "Feb 14, 2025",
    rating: 5,
    text: "From the front desk to the hygienists and doctors, Urban Dental & Braces is top-notch. My cleaning was thorough, and Dr. Elsamna followed up to make sure I was comfortable. You can tell they prioritize patient care and comfort.",
    image: "/Images/837.jpg",
  },
  {
    name: "Stephanie M. ",
    date: "Jan 19, 2025",
    rating: 5,
    text: "I recently got Invisalign with Dr. Khan, and the results are incredible. She explained the process clearly and made the journey so easy. I love my new smile! Highly recommend Urban Dental to anyone in Bayonne or Greenville.",
    image: "/Images/836.jpg",
  },
  {
    name: "Daniel P. ",
    date: "Dec 22, 2024",
    rating: 5,
    text: "The best dental office I’ve ever been to! Dr. Reff is gentle, knowledgeable, and always ensures I understand my options. Whether it’s a simple cleaning or something more advanced, I know I’m in good hands here.",
    image: "/Images/837.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>Patient Experiences at Urban Dental & Braces </h1>
        <h2>
          Why Bayonne Families Trust Our Dentists
        </h2>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">Patient Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm sm:text-base  mb-1 leading-relaxed flex-1 flex ">
                  "{review.text}"
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span> | {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
