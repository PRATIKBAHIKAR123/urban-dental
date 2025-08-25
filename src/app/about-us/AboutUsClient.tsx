"use client";

import React, { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from "next/link";
import BookingModal from "../booking/bookingScreen";

const services = [
  {
    icon: "/Images/icons/implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/tooth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces.png",
    price: "250",
    title: "Braces",
  },
];

const features = [
  {
    icon: "/Images/icons/emergency denstiry.png",
    title: "Experienced & Friendly Team",
    desc: "Our dentists bring years of clinical expertise and treat every patient like family.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "Emergency Dental Care",
    desc: "We provide advanced care for dental emergencies to ensure you're never left in pain",
  },
  {
    icon: "/Images/icons/dental-floss.png",
    title: "Full Range of Treatments",
    desc: "From cosmetic enhancements to restorative work and pediatric care — everything under one roof.",
  },
];

const team = [
  {
    img: "/Images/Team/Hala Elsamna.webp",
    name: "Dr. Hala Elsamna, DMD",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/hala-elsamna-bayonne-nj-dentist",
  },
  {
    img: "/Images/Team/Dalia Khan.webp",
    name: "Dr. Dalia Khan, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/dalia-khan-bayonne-nj-dentist",
  },
    
    {
    img: "/Images/Team/Steven Reff.webp",
    name: "Dr. Steven Reff, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/steven-reff-bayonne-nj-dentist",
  },
];

const testimonials = [
  {
    img: "/Images/dental1.jpg",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

export default function AboutUsClient() {
  const { ref, inView } = useInView();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>Get to Know Urban Dental & Braces</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <h2 className="text-center">
            Building Healthy Smiles Across Bayonne, NJ 
          </h2>
        </Fade>
      </div>
      
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-4 sm:space-y-6 lg:pr-8 order-2 lg:order-1 w-full">
          <Fade delay={200}>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary leading-tight">
              About Us
            </h1>
          </Fade>
          <Fade delay={500}>
            <p>
              Looking for a dentist in Bayonne, NJ? At Urban Dental & Braces, we combine advanced dental care with a compassionate approach to keep your smile healthy and confident. Conveniently located at <b>393 Avenue C, Bayonne, NJ 07002</b>, we proudly serve families and individuals throughout Bayonne (07002), Greenville (07305), and surrounding communities.
            </p>
          </Fade>
          <Fade delay={700}>
            <p>
              From routine exams to advanced smile restorations, our goal is to provide every patient with personalized, stress-free dental care in a comfortable environment.
            </p>
          </Fade>
          <Fade delay={500}>
            <p>
              At Urban Dental & Braces, we believe that great oral health starts with trust and comfort. Our team is dedicated to building long-term relationships with patients by offering care that fits into your lifestyle and budget. We’ve invested in modern dental technology that ensures accurate diagnoses, minimally invasive treatments, and pain-free experiences. Whether you’re here for preventive care, a cosmetic enhancement, or urgent treatment, you’ll always receive gentle and attentive care.
            </p>
          </Fade>
          <Fade delay={500}>
            <p>
              We accept most major insurance plans, including Medicaid, and also offer flexible payment plans so quality dentistry is within everyone’s reach.
            </p>
          </Fade>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 items-start sm:items-center">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-primary text-white hover:bg-secondary/80 w-full sm:w-auto"
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <Slide direction="right">
            <img
              src="/Images/banners/about-us-1.webp"
              alt="Dentists with patient"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </Slide>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Slide direction="right" triggerOnce>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0 order-2 lg:order-1 w-full">
            <img
              src="/Images/banners/about-us.webp"
              alt="Dental procedure"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 lg:pl-12 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary mt-2">What Makes Our Practice Different</h2>
            <p>
              Choosing the right dentist isn’t just about services-it’s about trust, convenience, and comfort. Here’s why families across Bayonne choose Urban Dental & Braces:
            </p>
            <p className="mb-4 sm:mb-6">
              <ul className="list-disc ml-4">
                <li><span className="font-bold">Compassionate Team You Can Trust</span> - We treat patients like family and listen to your concerns.</li>
              <li><span className="font-bold">Same-Day Emergency Relief </span> - Quick appointments available when you need us most.</li>
              <li><span className="font-bold">Complete Dental Care in One Plac</span> - From preventive checkups to advanced cosmetic and restorative solutions.</li>
              <li><span className="font-bold">Stress-Free Visits</span> - Modern technology and gentle techniques make your experience smooth and pain-free.</li>
              </ul>
            </p>
            {/* <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center md:items-start gap-3 sm:gap-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 mt-1 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p>
                      {feature.title === "Emergency Dental Care" ? (
                        <>
                          We provide advanced care for dental emergencies
                          to ensure you're never left in pain
                        </>
                      ) : (
                        feature.desc
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </Slide>

      {/* Team Section */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-10 text-primary">Meet the Team Behind the Smiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-6 lg:gap-4">
            {team.map((member, index) => (
              <Link
                href={`/${member.slug}`}
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-primary"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1">{member.name}</h3>
                {/* <div className="flex gap-1 font-bold items-center text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.707a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.294a1 1 0 00-.364 1.118l1.204 3.707c.3.921-.755 1.688-1.538 1.118l-3.158-2.294a1 1 0 00-1.176 0l-3.158 2.294c-.783.57-1.838-.197-1.538-1.118l1.204-3.707a1 1 0 00-.364-1.118L2.322 9.134c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.204-3.707z" />
                    </svg>
                  ))} {' '}5.0 Rating
                </div> */}
              </Link>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <Fade direction="left" triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:(201) 479-2100" className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-xs text-center sm:text-sm font-medium transition">
              <span className="text-sm sm:text-base">Call Us Today</span>
              (201) 479-2100
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-xs sm:text-sm font-medium transition"
            >
              Book Online
              <span className="text-sm sm:text-base">Schedule Your Appointment Now</span>
            </button>
          </div>
        </section>
      </Fade>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
