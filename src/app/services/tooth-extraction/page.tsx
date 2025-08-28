"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function ToothExtractionPage() {


const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Simple Tooth Extractions",
    description: "Ideal for teeth that are visible and can be removed easily, simple extractions are performed quickly and gently to relieve discomfort and restore oral health.",
    points: [
      "Fast and comfortable removal of damaged teeth",
      "Local anesthesia for a pain-free experience",
      "Protects surrounding teeth and gums",
      "Quick recovery with proper aftercare"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Surgical Extractions",
    description: "When teeth are broken, impacted, or not easily accessible, surgical extraction may be necessary. Our team uses advanced techniques to ensure safe and effective removal.",
    points: [
      "Expert care for impacted or partially erupted teeth",
      "Advanced tools for precision and safety",
      "Sedation options available for comfort",
      "Smooth healing process with guided aftercare"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Wisdom Tooth Removal",
    description: "Wisdom teeth often cause pain, crowding, or infection if left untreated. Our gentle approach to wisdom tooth removal helps prevent future complications.",
    points: [
      "Prevents overcrowding and misalignment",
      "Reduces risk of infection or cyst formation",
      "Personalized treatment plans for each case",
      "Focus on comfort and long-term oral health"
    ]
  }
];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Tooth Extraction in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Gentle, Same-Day Tooth Removal | Urban Dental & Braces
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
                      src="/Images/services/tooth-extraction (1).webp"
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
                <div className='desc-text-subtitle'>Tooth Extractions</div>
                <h3 className='desc-text-title'>About Tooth Extractions</h3>
                <p>
                  Sometimes, saving a tooth is not possible due to severe damage, decay, or infection. In such cases, a tooth extraction may be the best way to protect your oral health and relieve pain. At Urban Dental & Braces in Bayonne, we perform safe and comfortable tooth extractions using advanced techniques to ensure minimal discomfort and quick healing.
                </p>
                <p>
                  We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding communities. If you’re searching for “tooth extraction near me,” trust our experienced team to provide gentle and effective care.
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
                  <h2>Top Reasons to Choose Urban Dental & Braces for Tooth Extractions</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Same-Day Appointments for Pain Relief</li>
                    <li><CheckCircle />Gentle, Stress-Free Treatment</li>
                    <li><CheckCircle />Advanced Technology for Safe Extractions</li>
                    <li><CheckCircle />Affordable & Flexible Payment Options </li>
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
                Our Tooth Extraction Services
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we know the thought of a tooth extraction can feel overwhelming. That’s why our compassionate team focuses on making the process as comfortable and stress-free as possible. From simple removals to more complex cases, we provide the right care for your needs.</p>
                <p className="features-description">
                  Here’s how we help patients with tooth extractions:
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
            <h2 className='faq-heading'>Tooth Extraction FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is a tooth extraction painful?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>No, extractions are performed under local anesthesia, ensuring you don’t feel pain during the procedure. Some mild discomfort afterward is normal and managed with medication.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does it take to heal after a tooth extraction?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Most patients recover within a few days. Following your dentist’s aftercare instructions helps speed up healing and prevent complications.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do I need my wisdom teeth removed?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Not always. Wisdom teeth only need removal if they cause pain, crowding, or risk of infection. Our dentist will assess your case and recommend what’s best.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can I replace a tooth after extraction?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes - options like dental implants, bridges, or dentures can replace missing teeth and restore your smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover tooth extractions?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes, most dental insurance plans - including Medicaid - cover extractions when medically necessary.</p>
                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need a Tooth Extraction in Bayonne?
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we make tooth extractions safe, gentle, and stress-free. Whether you’re dealing with tooth pain, infection, or wisdom teeth issues, our caring team is here to help you get relief and protect your oral health.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}