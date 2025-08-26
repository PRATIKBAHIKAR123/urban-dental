"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function PainlessTreatmentPage() {
const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Painless Fillings",
    description: "Cavities don't have to be a painful experience. Our tooth-colored fillings not only restore your tooth but also blend seamlessly with your natural smile.",
    points: [
      "Tooth-colored, natural-looking fillings",
      "Quick and comfortable procedure",
      "Advanced local anesthesia for a pain-free experience",
      "Restores function and protects teeth from further decay"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Gentle Root Canal Therapy",
    description: "A root canal may sound intimidating, but with today's technology, it's no more uncomfortable than getting a filling. Our focus is on saving your natural tooth while keeping you completely at ease.",
    points: [
      "Eliminates pain while saving your natural tooth",
      "Modern techniques make treatment stress-free",
      "Local anesthesia ensures maximum comfort",
      "Long-lasting results with proper care"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Comfortable Tooth Extractions",
    description: "Sometimes, removing a tooth is the best way to protect your overall oral health. At Urban Dental & Braces, we make extractions as smooth and painless as possible.",
    points: [
      "Safe and painless removal of damaged or impacted teeth",
      "Options for local anesthesia and sedation",
      "Gentle techniques for faster healing",
      "Guidance for tooth replacement solutions if needed"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Painless Dental Treatment in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Gentle, Stress-Free Dentistry | Urban Dental & Braces
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
                src="/Images/services/painless-treatment.webp"
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
          <div className='desc-text-subtitle'>Painless Dentistry</div>
          <h3 className='desc-text-title'>About Painless Dentistry</h3>
          <p>
            At Urban Dental & Braces in Bayonne, we believe visiting the dentist should never be a stressful or painful experience. Thanks to modern techniques, advanced technology, and a compassionate approach, we make dental treatments as comfortable and pain-free as possible. From routine cleanings to complex procedures, our focus is always on ensuring your comfort while providing exceptional care.
          </p>
          <p>
            If you’re searching for a <strong>dentist near me</strong> or need <strong>painless dental treatment in Bayonne</strong>, our skilled team is here to help. We proudly serve patients from Bayonne (07002), Greenville (07305), NJ, and nearby communities. If you’ve been avoiding the dentist due to fear of pain, we’re here to change the way you feel about dental care.
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
                      <h2>Why Choose Urban Dental & Braces for Painless Dentistry?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Modern Pain-Free Techniques  </li>
                        <li><CheckCircle />Gentle and Compassionate Care</li>
                        <li><CheckCircle />Advanced Anesthesia & Sedation Options</li>
                        <li><CheckCircle />Stress-Free Environment</li>
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
                              Our Painless Dental Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, comfort is at the heart of everything we do. Whether you need restorative, cosmetic, or emergency treatment, our painless approach ensures you feel relaxed every step of the way.
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
                <h2 className='faq-heading'>Painless Dentistry FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is dental treatment really painless?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Yes. With today’s advanced techniques and anesthesia, most dental treatments can be performed with little to no discomfort.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What if I have dental anxiety?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        We specialize in treating anxious patients with a caring approach and sedation options to help you feel completely at ease.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are painless treatments safe?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Absolutely. We use proven, safe techniques and equipment to ensure your comfort while maintaining the highest standards of care.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Do children benefit from painless dentistry?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes! Gentle and pain-free dentistry helps kids build a positive attitude toward dental visits and lifelong oral health.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does insurance cover painless treatments?</h3> 
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Most procedures are covered by dental insurance. We also provide flexible payment options to make care affordable.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Ready for a Comfortable Dental Experience?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, our mission is to redefine the way you think about dental visits. Whether you’re searching for a trusted dentist in Bayonne or need “painless dental treatment near me”, our caring team is here for you. With our painless treatment approach, you can finally relax while we take care of your smile. Schedule your appointment today and experience stress-free, comfortable dental care in Bayonne. 
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}