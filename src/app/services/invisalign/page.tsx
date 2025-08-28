"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function InvisilinePage() {


const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "The Invisalign Process",
    description: "Every Invisalign journey begins with a personalized consultation and continues with careful planning to ensure great results.",
    points: [
      "Digital 3D scan for accurate impressions (no messy molds)",
      "Custom aligners created for a perfect, comfortable fit",
      "Regular check-ins to track progress and make adjustments",
      "Predictable treatment timeline for clear expectations"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Benefits of Invisalign",
    description: "Invisalign is more than just clear aligners - it's a lifestyle-friendly orthodontic solution.",
    points: [
      "Nearly invisible, so most people won't notice you're wearing them",
      "Removable, making eating and oral hygiene simple",
      "No food restrictions - enjoy your favorite meals without worry",
      "Smooth, comfortable design with less irritation than braces"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Who Can Benefit from Invisalign?",
    description: "Invisalign works for a wide range of patients - from busy adults to active teens.",
    points: [
      "Ideal for both adults and teens who want a discreet solution",
      "Corrects crowding, gaps, overbites, and underbites",
      "Effective for mild to moderate orthodontic issues",
      "Designed for comfort, flexibility, and everyday convenience"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Invisalign in Bayonne, NJ </h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Straighten Your Smile with Invisalign in Bayonne | Urban Dental & Braces
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
                        src="/Images/services/invisalign.webp"
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
          <div className='desc-text-subtitle'>Invisalign</div>
          <h3 className='desc-text-title'>About Invisalign</h3>
          <p>
           A straighter smile improves more than just your appearance - it boosts confidence, oral health, and overall well-being. At <strong>Urban Dental & Braces in Bayonne</strong>, we offer <strong>Invisalign clear aligners</strong> that gently move your teeth into the right position without the need for brackets or wires. These aligners are <strong>virtually invisible, comfortable, and removable</strong>, making them a convenient choice for both adults and teens. Whether you’re searching for “Invisalign near me” or simply want an alternative to braces, we provide personalized care that fits your lifestyle.
          </p>
          <p>
           We proudly serve patients from <strong>Bayonne (07002), Greenville, NJ (07305)</strong>, and nearby communities.
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
                          <h2>Top Reasons to Choose Urban Dental & Braces for Invisalign</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Discreet, Clear Treatment</li>
                            <li><CheckCircle />Customized to Your Smile</li>
                            <li><CheckCircle />Comfortable & Metal-Free</li>
                            <li><CheckCircle />Flexible Payment Options</li>
                            <li><CheckCircle />Convenient Location</li>
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
                                  Our Invisalign Services
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we believe straightening your teeth should be comfortable, convenient, and tailored to your lifestyle. Invisalign makes orthodontic treatment simple and stress-free, giving you the freedom to enjoy your favorite foods, smile confidently, and maintain easy oral hygiene while your teeth gradually move into alignment. With advanced 3D technology and personalized treatment planning, you can count on precise, predictable results.
                                </p>
                                <p className="features-description">
                                  Here’s how we help you achieve your best smile with Invisalign:
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
           <h2 className='faq-heading'>Invisalign FAQs</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does Invisalign treatment take?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Most cases last between <strong>6–18 months</strong>, depending on your needs.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is Invisalign painful?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Mild pressure is normal when switching aligners, but it’s more comfortable than braces.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can I eat with Invisalign?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Remove your aligners before meals - you can eat whatever you like.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How many hours per day should I wear aligners?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Wear them <strong>20–22 hours daily</strong>, removing only for eating and brushing.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can Invisalign fix complex issues?</h3>  </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes - modern Invisalign technology can treat many cases once only possible with braces.
            </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Ready to Start Your Invisalign Journey?
                  </h2>
                  <p className="features-description">
                    At <strong>Urban Dental & Braces in Bayonne</strong>, we make achieving a straighter smile simple, comfortable, and affordable. From your first consultation to your last aligner, our team is here to guide you every step of the way.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}