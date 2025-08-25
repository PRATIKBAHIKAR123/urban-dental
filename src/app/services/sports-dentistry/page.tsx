"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function SportsDentistryPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Custom Athletic Mouthguards",
    description:
      "Professional-grade protection is essential for any contact sport or high-risk activity. Off-the-shelf guards simply can't provide the same level of comfort and protection as a custom-fitted solution.",
    points: [
      "Precision-fitted guards for maximum comfort and protection",
      "Durable materials designed for intense athletic use",
      "Custom colors and team logos available",
      "Superior breathing and communication capabilities",
    ],
  },
  {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Sports Injury Treatment & Restoration",
    description:
      "Quick, expert care can save teeth and minimize long-term damage from athletic injuries. Our team is trained to handle all types of sports-related dental trauma with precision and compassion.",
    points: [
      "Immediate treatment for chipped, cracked, or knocked-out teeth",
      "Advanced restorative techniques for damaged teeth",
      "Soft tissue injury care and repair",
      "Comprehensive follow-up care and monitoring",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Athletic Performance Optimization",
    description:
      "Your oral health directly impacts your overall athletic performance and endurance. We help athletes maintain peak oral health to support their training and competition goals.",
    points: [
      "Specialized cleanings and preventive care for athletes",
      "Nutritional guidance for optimal oral health",
      "Sleep apnea screening and treatment options",
      "TMJ evaluation and management for jaw health",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Sports Dentistry in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Professional Sports Dentistry in Bayonne | Urban Dental & Braces
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
                src="/Images/services/sports-dentistry.webp"
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
          <div className='desc-text-subtitle'>Sports Dentistry</div>
          <h3 className='desc-text-title'>About Sports Dentistry</h3>
          <p>
            Athletic activities can pose significant risks to your teeth, jaw, and mouth - whether it's contact sports like football and hockey or recreational activities like basketball and skateboarding. At Urban Dental & Braces in Bayonne, we specialize in sports dentistry to protect athletes of all ages and skill levels from dental injuries. Our comprehensive approach includes custom mouthguards, preventive care, and emergency treatment for sports-related dental trauma. 
          </p>
          <p>
            We proudly serve athletes from Bayonne (07002), Greenville, NJ (07305), and nearby communities. If you're searching for "sports dentist near me" or "mouthguards near you", our experienced team is here to keep your smile safe during every game and practice.
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
                      <h2>Top Reasons to Choose Urban Dental & Braces for Sports Dentistry</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Custom-Fitted Mouthguards</li>
                        <li><CheckCircle />Comprehensive Athletic Dental Care</li>
                        <li><CheckCircle />Sports Injury Treatment Expertise </li>
                        <li><CheckCircle />Flexible Scheduling for Athletes </li>
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
                              Our Sports Dentistry Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, we understand that athletes need specialized dental care to perform at their best while protecting their oral health. Whether you're a weekend warrior or a competitive athlete, we provide tailored solutions to keep your teeth safe and your performance strong.
                            </p>
                            <p className='features-description'>Here's how we support your athletic lifestyle:
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
                <h2 className='faq-heading'>Sports Dentistry FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Which sports require mouthguards?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        The American Dental Association recommends mouthguards for contact sports like football, hockey, basketball, soccer, and wrestling, as well as activities like skateboarding, mountain biking, and gymnastics. 
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How often should I replace my mouthguard?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Custom mouthguards should be replaced every 1-2 seasons or whenever they show signs of wear, damage, or if your teeth have shifted. Growing children may need more frequent replacements 
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    

                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can I wear braces and still play sports?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Absolutely! Athletes with braces actually need extra protection. We create specialized mouthguards that accommodate orthodontic appliances while providing superior protection.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What should I do if my tooth gets knocked out during a game?</h3>  
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Handle the tooth by the crown only, rinse gently if dirty, and try to reinsert it. If that's not possible, store it in milk or saliva and get to our office immediately for the best chance of saving it.</p>
                      </AccordionContent>
                    </AccordionItem>
<AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does insurance cover custom mouthguards?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Many dental insurance plans provide partial coverage for custom mouthguards, especially when prescribed for medical reasons. We'll help verify your benefits and maximize your coverage.</p>
                      </AccordionContent>
                    </AccordionItem>
                  
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Sports Dentistry in Bayonne?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we're committed to keeping athletes safe and performing at their best. Whether you need a custom mouthguard, sports injury treatment, or specialized athletic dental care, our team has the expertise to protect your winning smile.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}