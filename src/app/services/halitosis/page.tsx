"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function Page() {

const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Professional Dental Cleaning",
    description: "Plaque, tartar, and bacteria are leading causes of bad breath. Professional cleanings remove buildup that brushing and flossing alone can't reach.",
    points: [
      "Thorough cleaning of teeth and gums",
      "Removal of odor-causing bacteria",
      "Prevents gum disease and decay-related halitosis",
      "Fresh, clean smile after each visit"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Gum Disease Treatment",
    description: "Periodontal infections are a common cause of chronic bad breath. Treating gum disease not only freshens your breath but also protects your overall oral health.",
    points: [
      "Deep cleaning (scaling & root planing) to eliminate bacteria",
      "Antibacterial rinses and therapies",
      "Stops gum bleeding and infection-related odors",
      "Long-term maintenance plans for healthy gums"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Dry Mouth & Lifestyle Solutions",
    description: "Dry mouth, medications, and certain lifestyle habits can lead to halitosis. We offer targeted care to reduce dryness and restore balance.",
    points: [
      "Saliva-boosting solutions and hydration guidance",
      "Custom fluoride treatments for dry mouth relief",
      "Personalized dietary and hygiene recommendations",
      "Long-lasting breath freshness"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Halitosis Treatment in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Fresh Breath Solutions in Bayonne | Urban Dental & Braces
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
                src="/Images/services/halitosis.webp"
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
          <div className='desc-text-subtitle'>Halitosis</div>
          <h3 className='desc-text-title'>About Halitosis</h3>
          <p>
            Halitosis, commonly known as chronic bad breath, is more than just an embarrassing condition - it can also be a sign of underlying dental or medical issues. At Urban Dental & Braces in Bayonne, our experienced team provides comprehensive halitosis treatment to identify the root cause and restore confidence in your smile.
          </p>
          <p>
            If you’ve been searching for a “<b>dentist near me</b>” or need <strong>halitosis treatment in Bayonne</strong>, we proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding areas with advanced dental care and personalized treatment plans.
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
                      <h2>Top Reasons to Choose Urban Dental & Braces for Halitosis Treatment</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Comprehensive Diagnosis </li>
                        <li><CheckCircle />Gentle & Effective Treatments</li>
                        <li><CheckCircle />Focus on Overall Oral Health</li>
                        <li><CheckCircle />Patient-Centered Approach</li>
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
                              Our Halitosis Treatment Options
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, we tailor halitosis treatments based on your unique needs. Whether bad breath is linked to gum disease, plaque buildup, or other oral health concerns, we provide effective solutions to restore fresh breath. If you’re searching for “halitosis treatment near me”, our Bayonne dental team can help.
                            </p>
                            <p className="features-description">
                                Here’s how we help:
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
                <h2 className='faq-heading'>Halitosis FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What causes chronic bad breath?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Persistent bad breath is often caused by poor oral hygiene, gum disease, tooth decay, dry mouth, or bacterial buildup on the tongue. Certain foods, smoking, and medical conditions can also contribute.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can bad breath be permanently cured?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Yes - in many cases, halitosis can be resolved by addressing the underlying cause through professional cleanings, gum therapy, and improved oral hygiene habits.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How can I tell if I have halitosis?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          If you notice constant bad breath despite brushing and flossing, or if others mention it to you, it’s time to visit a dentist for evaluation.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can gum disease cause bad breath?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes, gum infections produce foul-smelling bacteria and toxins, making periodontal disease one of the leading causes of halitosis.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does dental insurance cover halitosis treatment?</h3>  
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Most dental insurance plans cover professional cleanings and periodontal treatments that help with halitosis. We accept most insurance, including Medicaid, and offer flexible payment options.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Halitosis Treatment in Bayonne?
                                </h2>
                                <p className="features-description">
                                  Don’t let bad breath affect your confidence or social life. At Urban Dental & Braces, we provide professional halitosis treatment in Bayonne to restore freshness and improve your oral health. If you’re searching for a trusted “dentist near me” for bad breath solutions, our team is here for you. Serving Bayonne, Greenville, and surrounding communities, we’re here to help you breathe easy and smile with confidence.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}