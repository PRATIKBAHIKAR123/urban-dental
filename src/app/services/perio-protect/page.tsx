"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function PerioProtectPage() {
const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Customized Perio Protect Trays",
    description: "The treatment starts with the creation of custom-fit trays designed specifically for your mouth. These trays are comfortable and allow medication to reach deep below the gumline where toothbrushes and floss can't.",
    points: [
      "Precision-fit trays tailored to your smile",
      "Deliver medication directly to infected gum tissue",
      "Easy to use at home as part of your daily routine",
      "Enhances results of professional cleanings"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Non-Surgical Gum Disease Therapy",
    description: "For many patients, Perio Protect can reduce or even eliminate the need for invasive gum surgery. This treatment targets harmful bacteria without discomfort or downtime.",
    points: [
      "Effective alternative to traditional surgery",
      "Reduces pocket depths and bleeding gums",
      "Promotes natural healing and gum reattachment",
      "Comfortable, stress-free treatment process"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Whole-Body Health Benefits",
    description: "Treating gum disease isn't just about saving your smile-it also plays a vital role in protecting your overall health. Bacteria from untreated gum disease have been linked to conditions like heart disease and diabetes.",
    points: [
      "Helps lower risk of systemic health issues",
      "Improves oral health and freshens breath",
      "Supports long-term tooth retention",
      "Boosts confidence with a healthier smile"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Perio Protect in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Advanced Gum Disease Treatment | Urban Dental & Braces
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
                src="/Images/services/perio-protect.webp"
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
          <div className='desc-text-subtitle'>Perio Protect</div>
          <h3 className='desc-text-title'>About Perio Protect</h3>
          <p>
            Perio Protect is a revolutionary, non-surgical treatment designed to combat gum disease (periodontitis) comfortably and effectively. Instead of relying solely on deep cleanings or invasive procedures, Perio Protect uses customized trays that deliver antibacterial medication directly to the source of infection-beneath the gums. At Urban Dental & Braces in Bayonne, we specialize in modern periodontal solutions that not only stop disease progression but also help preserve your natural smile.
          </p>
          <p>
            If you’re searching for a dentist in Bayonne or typing perio protect near me for gum health solutions, our team is here to help. We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding communities.
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
                      <h2>Top Reasons to Choose Urban Dental & Braces for Perio Protect</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Customized Perio Trays </li>
                        <li><CheckCircle />Non-Surgical Gum Disease Therapy</li>
                        <li><CheckCircle />Improved Oral & Overall Health</li>
                        <li><CheckCircle />Gentle, Comfortable Approach</li>
                        <li><CheckCircle />Convenient Location in Bayonne</li>
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
                              Our Perio Protect Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, we understand that gum disease is one of the most common yet overlooked oral health issues. With Perio Protect in Bayonne, we provide patients with an easy and effective way to fight infection at home while supporting in-office periodontal care.
                            </p>
                            <p className="features-description">
                              Here’s how Perio Protect helps restore your gum health:
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
                <h2 className='faq-heading'>Perio Protect FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What is Perio Protect?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Perio Protect is a non-invasive gum disease treatment that uses custom trays to deliver medication directly below the gumline, fighting infection at its source.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How often do I need to use the trays?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Most patients wear their trays for just a few minutes each day, as directed by their dentist. Your treatment plan will be customized based on your gum health.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is Perio Protect painful?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          No, Perio Protect is completely painless. The trays are soft, comfortable, and easy to use at home.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can Perio Protect replace professional cleanings?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">No. Perio Protect works best alongside professional dental cleanings. It’s designed to enhance your in-office care and help control bacteria between visits.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does insurance cover Perio Protect?</h3> 
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Some insurance plans may cover part of the treatment. Our team at Urban Dental & Braces will help you explore your coverage and provide flexible payment options if needed.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Perio Protect in Bayonne?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we believe healthy gums are the foundation of a beautiful smile. If you’re struggling with gum disease or want to prevent its progression, our Perio Protect treatment offers a gentle, effective solution. Contact us today to schedule a consultation and take the first step toward restoring your gum health.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}