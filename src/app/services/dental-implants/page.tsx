import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-implants", "/Images/services/dental-implants.webp");

export default function DentalImplantsPage() {

const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Single Tooth Implants",
    description: "If you're missing just one tooth, a single implant is the most effective way to replace it without affecting neighboring teeth. This permanent solution blends seamlessly with your natural smile.",
    points: [
      "Restores full function and appearance of the missing tooth",
      "Prevents shifting of surrounding teeth",
      "Customized to match the shape and color of your natural teeth",
      "Long-lasting stability with proper care"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Multiple Tooth Implants",
    description: "When several teeth are missing, multiple implants provide a durable alternative to partial dentures. They improve comfort, chewing ability, and overall oral health.",
    points: [
      "Replaces multiple missing teeth with stable support",
      "Prevents jawbone deterioration and facial sagging",
      "Custom implant bridges designed for a natural look",
      "Strong, long-term results compared to removable options"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Full Mouth Implants",
    description: "For patients missing most or all of their teeth, full mouth implants can restore a complete smile with fewer implants and a permanent fixed bridge. This treatment offers maximum stability and a dramatic transformation.",
    points: [
      "Replaces an entire arch of teeth with as few as 4–6 implants",
      "Provides strong bite function similar to natural teeth",
      "Fixed bridge eliminates the need for removable dentures",
      "Restores confidence with a permanent, beautiful smile"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Dental Implants in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Permanent Tooth Replacement in Bayonne | Urban Dental & Braces
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
                src="/Images/services/dental-implants.webp"
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
          <div className='desc-text-subtitle'>Dental Implants</div>
          <h3 className='desc-text-title'>About Dental Implants</h3>
          <p>
            Missing teeth can affect how you eat, speak, and smile-but dental implants provide a permanent, natural-looking solution. At Urban Dental & Braces in Bayonne, our implant treatments replace both the root and crown of a tooth, restoring strength, function, and beauty. Unlike dentures or bridges, implants bond with your jawbone, preventing bone loss and keeping your facial structure intact.
          </p>
          <p>
            We proudly serve patients from Bayonne (07002), Greenville (07305), NJ and nearby communities. If you’ve been searching for “dental implants near me,” our team is here to give you lasting results and renewed confidence.
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
                      <h2>Top Reasons to Choose Urban Dental & Braces for Dental Implants</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Advanced Implant Technology</li>
                        <li><CheckCircle />Personalized Treatment Plans</li>
                        <li><CheckCircle /> Natural-Looking, Long-Lasting Results  </li>
                        <li><CheckCircle /> Affordable Payment & Financing Options</li>
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
                              Our Dental Implant Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, we provide a range of implant options to restore your smile, whether you’re missing one tooth or an entire arch. Our team uses precision technology and modern techniques to ensure comfortable, reliable results that last for years.
                            </p>
                            <p className="features-description">
                              Here’s how we help you replace missing teeth with dental implants:
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
                <h2 className='faq-heading'>Dental Implants FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How long do dental implants last?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        With proper care, dental implants can last 20 years or more-many patients keep them for a lifetime.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are dental implants painful?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Implant procedures are performed with advanced anesthesia for maximum comfort. Most patients report minimal discomfort and a smooth recovery.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can anyone get dental implants?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Most healthy adults are good candidates for implants, but bone density and gum health are important factors. Our team provides evaluations to determine the best plan for you.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How do implants compare to dentures?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Unlike dentures, implants are fixed, stable, and prevent bone loss. They feel and function like natural teeth.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does insurance cover dental implants?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Most insurance plans do not fully cover implants, but Urban Dental & Braces offers financing and flexible payment options to make treatment affordable.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Considering Dental Implants in Bayonne?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we’re here to restore your smile with permanent, natural-looking dental implants. Whether you’re missing one tooth or need a complete smile makeover, our team provides expert care and long-lasting results.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}