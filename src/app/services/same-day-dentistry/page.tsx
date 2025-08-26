"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function SameDayPage() {
const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Same Day Crowns & Restorations",
    description: "Traditional crowns require multiple visits and temporary restorations, but our advanced technology allows us to create and place permanent crowns in a single appointment. No more waiting weeks with uncomfortable temporaries or scheduling multiple visits.",
    points: [
      "Digital impressions eliminate messy traditional molds",
      "In-office crown fabrication using CAD/CAM technology",
      "Precise fit and natural appearance in just one visit",
      "Immediate functionality with no temporary crown period"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Emergency Same Day Treatments",
    description: "Dental emergencies don't follow your schedule, but our same day approach ensures you get the care you need immediately. From severe pain to broken teeth, we provide comprehensive emergency treatments without the wait.",
    points: [
      "Urgent pain relief and infection treatment",
      "Immediate repair of broken or damaged teeth",
      "Same-day root canal therapy when needed",
      "Quick replacement of lost fillings or crowns"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Cosmetic Improvements in One Visit",
    description: "Transform your smile with cosmetic treatments that can be completed the same day you decide to enhance your appearance. Our efficient processes mean you can walk in with concerns and leave with confidence.",
    points: [
      "Same-day veneers and bonding procedures",
      "Immediate whitening treatments with lasting results",
      "Quick smile makeovers for special occasions",
      "Instant correction of minor imperfections"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Same Day Dentistry in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                             Convenient Same Day Dentistry in Bayonne | Urban Dental & Braces
                        </h2>
                        </Fade>
                        {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
                    </div>
                    <div className='details-page-desc-section'>

      {/* Image Section */}
      <div className='image_section'>
        <div className="image_section-cover">
          <Zoom cascade damping={0.3} duration={800}>
            <div className="main-image">
              <img
                src="/Images/services/same-day-dentistry.webp"
                alt="Main Banner"
              />
            </div>
            {/* <img
              src="/Images/banners/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
          </Zoom>
        </div>
      </div>

      {/* Text Section with Fade-in after delay */}
      <div className='desc-text-section'>
        <Fade cascade direction="up" delay={1000} duration={600}>
          <div className='desc-text-subtitle'>Same-Day Dentistry</div>
          <h3 className='desc-text-title'>About Same Day Dentistry</h3>
          <p>
            Same day dentistry revolutionizes traditional dental care by allowing you to complete treatments in a single visit - whether it's getting a crown, filling, or addressing urgent dental needs without multiple appointments. At Urban Dental & Braces, your trusted dentist in Bayonne, we utilize advanced technology and streamlined processes to provide comprehensive dental treatments that fit your busy schedule. Our modern equipment and skilled team make it possible to design, create, and place restorations on the same day, saving you time while delivering exceptional results.
          </p>
          <p>
            We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and nearby communities. If you're searching for "same day dentist near me" or need immediate dental care, our innovative approach ensures you leave with a complete, beautiful smile in just one visit.
          </p>
        </Fade>
      </div>
    </div>
    <div className='wcu-section'>         
    
                <div className='wcu-text-section'>
                  <Fade cascade direction="up" delay={1000} duration={600}>
                    {/* <div className='wcu-subtitle'>
                      Top Reasons
                    </div> */}
                    <div className='wcu-title'>
                      <h2>Top Reasons to Choose Urban Dental & Braces for Same Day Dentistry</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Single-Visit Treatment Completion  </li>
                        <li><CheckCircle />Advanced Digital Technology </li>
                        <li><CheckCircle />Flexible Same-Day Scheduling  </li>
                        <li><CheckCircle />Time-Saving Convenience </li>
                        <li><CheckCircle />Convenient Bayonne Location</li>
                      </ul>
                    </div>
                  </Fade>
                </div>
                <div className='wcu-img-section'>
                  <Zoom cascade damping={0.3} duration={800}>
                    <img src="/Images/banners/about-us-1.webp" alt="dental" />
                  </Zoom>
                </div>
    
              </div>
              <div className="features-section">
                          <Fade direction="up" duration={1000}>
                            <h2 className="features-heading">
                              Our Same Day Dentistry Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, we understand that your time is valuable and dental problems can't always wait for multiple appointments. That's why our team, your go-to same -day dentist in Bayonne, has invested in cutting-edge technology and efficient treatment protocols that allow us to provide comprehensive dental care in a single visit. Whether you need restorative work, emergency treatment, or cosmetic improvements, we're equipped to deliver outstanding results while respecting your busy lifestyle. 
                            </p>
                            <p className="features-description">
                              Here's how we transform your smile in just one appointment:
                            </p>
                          </Fade>
              
                          <div className="features-grid">
                            {features.map((service, idx) => (
                              <div className="feature-card" key={idx}>
                                <div className="flex flex-col items-start mb-3">
                                  <img src={service.icon} alt={service.title} className="w-12 h-12 mb-2" />
                                  <h3>{service.title}</h3>
                                </div>
                                <p>{service.description}</p>
                                <ul className="feature-list">
                                  {service.points.map((point, i) => (
                                    <li key={i} className="feature-list-item">
                                      <CheckCircle /> {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
    <div className='faq-section'>
                <h2 className='faq-heading'>Same Day Dentistry FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What treatments can be completed in one day?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        We can perform crowns, fillings, bonding, veneers, extractions, root canals, emergency treatments, and many cosmetic procedures in a single visit using our advanced technology and streamlined processes.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How is same day treatment different from traditional dentistry?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Same day dentistry uses digital technology, in-office fabrication, and efficient scheduling to complete treatments that traditionally require multiple appointments, saving you time while maintaining quality.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are same day restorations as durable as traditional ones?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Yes, same day restorations are made from high-quality materials and are just as durable as traditional restorations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can I schedule same day treatment for non-emergency issues?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Absolutely! We offer same day scheduling for both emergency and non-emergency treatments.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does insurance cover same day dental procedures?</h3>   
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">We accept most insurance plans, including Medicaid, and will help verify your coverage and benefits.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Same Day Dentistry in Bayonne?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we make quality dental care convenient and efficient. Whether you have a dental emergency or simply want to complete your treatment in one visit, our “same day dentist near me” services are designed to fit your lifestyle and deliver exceptional results.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}