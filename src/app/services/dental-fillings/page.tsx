"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function DentalFillingPage() {



const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Tooth-Colored Fillings",
    description: "Our composite fillings are designed to match your natural tooth color, so no one can tell you've had dental work done. They're safe, durable, and perfect for small to medium cavities.",
    points: [
      "Blends seamlessly with natural teeth",
      "Restores strength and function",
      "Mercury-free, safe material",
      "Long-lasting results with proper care"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Repairing Cracked or Chipped Teeth",
    description: "Accidents, grinding, or biting hard foods can cause chips or cracks. Fillings can repair this damage, preventing further problems and restoring your smile.",
    points: [
      "Quick, effective repair in a single visit",
      "Protects against further decay or damage",
      "Restores natural tooth shape and appearance",
      "Provides strength and durability"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Replacing Old or Broken Fillings",
    description: "Old fillings can wear out or fall out over time. We replace outdated silver or damaged fillings with strong, natural-looking alternatives.",
    points: [
      "Safe removal of old metal fillings",
      "Tooth-colored replacements for a natural look",
      "Prevents sensitivity and further decay",
      "Strengthens and protects the tooth"
    ]
  }
];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Dental Fillings in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Tooth Repair & Cavity Treatment in Bayonne | Urban Dental & Braces
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
                      src="/Images/services/dental-fillings.webp"
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
                <div className='desc-text-subtitle'>Dental Fillings</div>
                <h3 className='desc-text-title'>About Dental Fillings</h3>
                <p>
                  Cavities and tooth damage are common issues that can compromise both your oral health and your confidence. At Urban Dental & Braces, we offer high-quality, tooth-colored fillings that restore strength, function, and appearance. Unlike outdated silver fillings, our modern composite materials blend seamlessly with your natural teeth, giving you a healthier and more attractive smile.
                </p>
                <p>
                  We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding areas. Whether you’re dealing with a new cavity, a cracked tooth, or a broken filling, our team is here to provide gentle, effective care.
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
                  <h2>Same-Day Appointments</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Durable, Natural-Looking Restorations</li>
                    <li><CheckCircle />Restores strength and function</li>
                    <li><CheckCircle />Mercury-free, safe material</li>
                    <li><CheckCircle />Long-lasting results with proper care</li>
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
                Our Dental Filling Services
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we know cavities and broken teeth can be uncomfortable and concerning. That’s why we provide precise, painless filling treatments that restore your smile quickly and effectively.
              </p>
              <p className="features-description">
                Here’s how we help repair and protect your teeth:
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
            <h2 className='faq-heading'>Dental Fillings FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How do I know if I need a filling??</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Signs you may need a filling include tooth sensitivity, visible holes, dark spots, or pain when chewing. A dental exam and X-ray can confirm if you need one.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are dental fillings painful? </h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      No - we use gentle techniques and local anesthesia to keep you comfortable throughout the procedure. Most patients report little to no discomfort.
                    </p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long do dental fillings last?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Composite fillings can last 7–15 years with proper care, though this depends on factors like oral hygiene and daily habits.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can old metal fillings be replaced?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Yes, we can safely remove silver (amalgam) fillings and replace them with tooth-colored composite fillings for a more natural and healthier smile.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Will insurance cover dental fillings?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Most dental insurance plans, including Medicaid, provide coverage for fillings as a basic restorative procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>




              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need a Dental Filling in Bayonne?
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we’re here to restore your smile with strong, natural-looking fillings. Whether it’s a cavity, a cracked tooth, or replacing an old filling, we provide fast and effective treatment you can trust.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}