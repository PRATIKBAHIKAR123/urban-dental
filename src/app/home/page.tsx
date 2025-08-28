'use client';


import React, { useState, useEffect, useRef } from 'react';
import ServicesSection from './services';
import InsuranceSection from './accepted-insurance';
import SpecialOffersSection from './special-offer';
import { Button } from '@/components/ui/button';
import LocationTabs from './addresses';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import FloatingFormButton from '@/components/ui/floatingButton';
import FloatingTextForm from '@/components/ui/floatingButton';
import { InfoIcon, MessageCircle, Phone, Stethoscope, User, Users } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import FloatingPromo from '@/components/ui/promo-popup';
import BookingModal from '../booking/bookingScreen';
import { services as allServices } from '../services/serviceList';
import OurOffers from './our-services';
import TestimonialsSwiper from './testimonials';
import Blogs from './blogs';
import TechCompanies from './tech-comp';



const banners = [
    {
        image: '/Images/banners/banner-1.webp',
        title: 'Welcome to Urban Dental Bayonne',
        subtitle: 'Your Local Dentist in Bayonne, NJ for Healthy & Beautiful Smiles',
        image2: '/Images/Banner1.jpg',
    },
    {
        image: '/Images/banners/banner-2.webp',
        title: 'Emergency Dental Visit - Just $55',
        subtitle: 'Fast relief for toothaches or dental pain - includes exam & X-ray, no insurance needed.',
        image2: '/Images/Emergency Dentistry.jpg',
    },
    {
        image: '/Images/banners/banner-3.webp',
        title: 'New Patient Special - Only $79',
        subtitle: 'Get a full dental exam, professional cleaning, and digital X-rays - perfect for first-time visitors.',
        image2: '/Images/Banner3.webp',
    },
    {
        image: '/Images/banners/banner-4.webp',
        title: 'Professional Teeth Whitening - Only $299',
        subtitle: 'Brighten your smile with our limited-time in-office whitening treatment.',
        image2: '/Images/young-surprised-woman-with-hand-her-face.webp',
    },
];

const services = [
  {
    icon: "/Images/icons/tooth-implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/teeth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces (1).png",
    price: "250/month",
    title: "Braces",
  },
];

  const languages = [
    "English", "Spanish", "Portuguese","Arabic", "Hindi", "Creole", 
  ];

export default function HomePage() {
      const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const { ref, inView } = useInView();
    
    // Touch/swipe functionality for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const bannerRef = useRef<HTMLDivElement>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [current]);

    const handleNavigation = (newIndex: number) => {
        setCurrent(newIndex);
    };

    const handlePrevious = () => {
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent((current + 1) % banners.length);
    };

    // Touch event handlers for mobile swipe
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            // Swipe left - go to next banner
            handleNext();
        } else if (isRightSwipe) {
            // Swipe right - go to previous banner
            handlePrevious();
        }
    };

    return (
        <div>
        <section 
      ref={bannerRef}
      className="relative w-full h-68 md:h-[100vh] min-h-[428px] max-h-[950px] overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-secondary"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Curved Shape */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <svg
            viewBox="0 0 800 600"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M300,0 Q400,100 450,200 Q500,300 480,400 Q460,500 400,600 L800,600 L800,0 Z"
              fill="rgba(59, 130, 246, 0.08)"
            />
            <path
              d="M350,0 Q450,120 500,220 Q550,320 530,420 Q510,520 450,600 L800,600 L800,0 Z"
              fill="rgba(147, 197, 253, 0.05)"
            />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-16 left-12">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-300/40 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Medical Cross */}
        <div className="absolute top-24 left-32 text-blue-300/30 text-4xl font-light">+</div>

        {/* Tooth Icon */}
        <div className="absolute top-32 left-16 text-blue-200/25">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4.5 2 6.5 1 2 2 4.5 2 6.5v1h4v-1c0-2-1-4.5-2-6.5-1-2-2-4-2-6.5 0-3.5 2.5-6 6-6s6 2.5 6 6c0 2.5-1 4.5-2 6.5-1 2-2 4.5-2 6.5v1h4v-1c0-2 1-4.5 2-6.5 1-2 2-4 2-6.5 0-3.5-2.5-6-6-6z" />
          </svg>
        </div>

        {/* Additional decorative dots */}
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 md:w-3 md:h-3 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 left-8 w-2 h-2 md:w-4 md:h-4 bg-blue-300/25 rounded-full"></div>
        <div className="absolute bottom-48 left-40 w-1 h-1 md:w-2 md:h-2 bg-blue-400/35 rounded-full"></div>
      </div>

      {/* Banner Content */}
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Full Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            {/* Professional Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xs"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          </div>

          <div className="container mx-auto px-3 md:px-6 h-full flex items-start pt-12 md:pt-0 md:items-center relative z-10">
            <div className="w-full">

              {/* Content Centered */}
              <div className="max-w-3xl text-white">
                {/* Professional Badge */}
                

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-white">
                    {banner.title}
                  </span>
                </h1>

                {/* Professional Accent Line */}
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>

                <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 mb-6 max-w-2xl">
                  {banner.subtitle}
                </p>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                                <button className="bg-white text-cyan-600 px-8 py-2 md:py-3 rounded-full font-semibold text-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" onClick={()=>setIsBookingOpen(true)}>
                                                    Book Appointment
                                                </button>
                                            </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots - Professional Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex gap-3 bg-black/20 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-white/10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(idx)}
              className={`transition-all duration-300 rounded-full ${idx === current
                  ? 'w-4 md:w-8 h-2 md:h-3 bg-blue-500 shadow-lg shadow-blue-500/50'
                  : 'w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>

    <div className='w-full bg-[#ffffff84] flex items-center justify-center overflow-hidden py-4 md:py-8'>
                <img src="/Images/urban-dental-2048x609.webp" alt="dental-banner" className='w-auto h-16 md:h-32 object-cover' />  

            </div>
            
            {/* Services Strip */}
                <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-8 md:py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}>
        </div>
      </div>
      <OurOffers/>

      <div className="w-full relative mt-4">
        {/* Section Header */}
        <div className="text-center mb-8  mx-auto px-4 md:px-6">
          {/* <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/30 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            Our Services
          </div> */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Comprehensive Dental Services
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Healthy, beautiful smiles start here! Explore our wide range of treatments designed for comfort, precision, and long-lasting results.
          </p> */}
        </div>

        {/* Services Carousel Container */}
        <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg border border-white/20 p-6">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Auto-scrolling services carousel */}
          <div className="scroll-track-services flex animate-scroll-services gap-2">
            {[...allServices, ...allServices].map((service, index) => (
              <a
                key={`${service.name}-${index}`}
                href={service.link}
                className="flex-shrink-0 group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-primary-50/50 border border-blue-100/50 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-blue-300/50">
                  {/* Service Card */}
                  <div className="px-8 py-6 relative">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Service Content */}
                    <div className="relative flex items-center gap-3">
                      {/* Service Icon */}
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary via-primary-500 to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Service Name */}
                      <span className="text-md md:text-2xl font-semibold text-gray-700 group-hover:text-secondary transition-colors duration-300 whitespace-nowrap">
                        {service.name}
                      </span>
                      
                      {/* Arrow Icon */}
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .scroll-track-services {
          width: fit-content;
        }
        @keyframes scroll-services {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-services {
          animation: scroll-services 80s linear infinite;
        }
        .animate-scroll-services:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
            
            
            

            <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-120">
                        <img
                            src="/Images/banners/about-us.webp"
                            alt="dental-banner"
                            className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                                Compassionate Care, Lasting Smiles
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p>
                                At Urban Dental & Braces, we take pride in being a trusted dentist in Bayonne for families and individuals of all ages. Conveniently located at 393 Avenue C, Bayonne, NJ 07002, our practice combines advanced technology with compassionate care to keep your smile healthy, bright, and confident.
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p >
                                Whether you’re searching for a dentist near me for routine checkups, preventive care, cosmetic dentistry, braces, or advanced restorations, our experienced team is here to provide personalized treatment in a comfortable and welcoming environment. We focus on delivering gentle, stress-free dental care that fits your lifestyle and budget.
                            </p>
                        </Fade>

                        
                        <Fade delay={700}>
                            <p >
                                Using the latest dental technology, we ensure precise diagnoses, minimally invasive treatments, and pain-free visits. We proudly serve patients from Bayonne (07002), Greenville (07305), and surrounding neighborhoods, making quality dentistry convenient and accessible.
                            </p>
                        </Fade>

                        
                        {/* <Fade delay={700}>
                            <b >
                                Book your appointment today and experience the Urban Dental difference!
                            </b>
                        </Fade>

                        <Fade delay={800}>
                            <Link
                                href="/about-us"
                                className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
                            >
                                Learn More
                            </Link>
                        </Fade> */}
                    </div>
                </div>

            </section>

            <HomepageSections />

                  <Slide direction="up" triggerOnce>
                <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            // const { ref, inView } = useInView({
                            //   threshold: 0.1,
                            // });

                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />

                                    <div className="text-3xl font-bold text-primary mb-2">
                                        ${inView ? (
                                            service.price.includes('/') ? (
                                                <CountUp
                                                    end={parseInt(service.price.split('/')[0])}
                                                    duration={1.5}
                                                    separator=","
                                                    suffix="/month"
                                                />
                                            ) : (
                                                <CountUp end={parseInt(service.price)} duration={1.5} separator="," />
                                            )
                                        ) : (
                                            service.price.includes('/') ? '0/month' : '0'
                                        )}
                                    </div>

                                    <div className="text-lg font-semibold">
                                        {service.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </Slide>

            {/* <ServicesSection /> */}
            <section className="relative w-full mt-10 mx-auto px-4">
              <Fade delay={200}>
                      <h2 className="text-center text-3xl md:text-5xl font-extrabold my-10">
                        Need Emergency Dental Care in Bayonne?
                      </h2>
                    </Fade>
                    <Fade delay={500}>
                      <h4 className="text-center text-md md:text-2xl mb-5">
                        Severe toothache, cracked tooth, or dental injury? We offer same-day emergency appointments so you can get relief fast.
                      </h4>
                    </Fade>
                    <Fade delay={600}>
                      <div className="text-center">
                        <Button onClick={() => setIsBookingOpen(true)} size={'lg'}>Book Online </Button>
                      </div>
                    </Fade>
            </section>

            <InsuranceSection />
<section className=" bg-primary py-20 overflow-hidden">
  
            <div className="relative max-w-4xl mx-auto px-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-8 border border-white/20">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div> */}
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Staff Speak Multiple Languages
            </h3>
            
            {/* Language Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {languages.map((language, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors duration-200"
                >
                  {language}
                </span>
              ))}
            </div>

            <p className="text-blue-100 text-lg mb-8 text-center">
              We’re here to help you in your preferred language. Call us today to schedule your visit.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:717-745-2700" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] h-[56px]">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button onClick={()=>setIsBookingOpen(true)} className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto min-w-[200px] h-[56px]">
                <Users className="w-5 h-5" />
                Book Online
              </button>
            </div>
          </div>
        </div>
</section>
<section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-80">
                        <img
                            src="/Images/banners/Bayonne.webp"
                            alt="dental-banner"
                            className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                                Special Offers for New & Existing Patients
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p className="text-lg ">
                                To make dentistry accessible for everyone, we proudly offer:
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p className="text-base text-left leading-relaxed">
                                <ul className='list-disc gap-3 mt-2 px-6'>
                                    <li className="list-disc">
                                        <div className="flex gap-2 ">
                                            <Fade delay={800}>
                                                <span><strong>$55 Emergency Exam & X-ray</strong>{' '}</span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1000}>
                                                <span><strong>$79 New Patient Special (Cleaning, Exam & X-rays)</strong>{' '}
                                                </span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1200}>
                                                <span><strong>Interest-Free Financing (Up to 12 Months)</strong>{' '}
                                                  </span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1200}>
                                                <strong>Senior Discounts During Special Hours</strong>
                                            </Fade>
                                        </div>
                                    </li>

                                </ul>
                            </p>
                        </Fade>

                        <Fade delay={800}>
                            <a href="tel:+1 (201) 479-2100">
                                <Button>CALL TODAY</Button>
                            </a>
                        </Fade>

                    </div>
                </div>

            </section>
            {/* <SpecialOffersSection /> */}
            

            <TestimonialsSwiper/>
            <TechCompanies/>
            <Blogs/>
            <LocationTabs />
            <FloatingTextForm />
            <FloatingPromo/>
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
        </div>
    );
}


function HomepageSections() {
    const sections = [
        { label: 'About Us', icon: <InfoIcon />, bg: 'bg-primary', href: '/about-us' },
        { label: 'Our Providers', icon: <User />, bg: 'bg-primary/70', href: '/providers' },
        { label: 'Our Services', icon: <Stethoscope />, bg: 'bg-secondary', href: '/services' },
        { label: 'Contact Us', icon: <MessageCircle />, bg: 'bg-secondary/70', href: '/contact-urban-dental-bayonne-nj' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {sections.map((section, idx) => (
                <Link href={section.href} key={idx}
                    className={`rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-white ${section.bg} flex flex-col items-center justify-center p-3 md:p-6 text-center`}
                >
                    <div className="text-4xl mb-2">{section.icon}</div>
                    <div className="text-md md:text-xl font-semibold">{section.label}</div>
                </Link>
            ))}
        </div>
    );
}
