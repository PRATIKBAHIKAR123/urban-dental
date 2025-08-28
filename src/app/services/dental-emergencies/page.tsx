"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function DentalEmergencyPage() {


const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Severe Tooth Pain & Infections",
    description: "Toothaches or abscesses should never be ignored, as they can signal deeper issues that require immediate care. Our team provides fast relief and targeted treatment.",
    points: [
      "Same-day evaluation and pain relief",
      "Root canal therapy to save infected teeth",
      "Antibiotics to treat dental infections",
      "Gentle care to ensure long-term comfort"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Broken or Knocked-Out Teeth",
    description: "Accidents and injuries can damage or even knock out teeth. Acting quickly can often save the tooth and prevent complications.",
    points: [
      "Emergency repair of broken or fractured teeth",
      "Restorations such as bonding or crowns",
      "Re-implantation of knocked-out teeth (when possible)",
      "Personalized treatment plans for long-term results"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Damaged or Lost Restorations",
    description: "A broken crown, filling, or denture can cause pain and interfere with daily life. We offer fast solutions to restore function and comfort.",
    points: [
      "Quick repair or replacement of damaged restorations",
      "Temporary fixes to relieve immediate discomfort",
      "Durable, natural-looking restorations",
      "Comfortable results tailored to your smile"
    ]
  }
];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Dental Emergencies in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Same-Day Emergency Dental Care at Urban Dental & Braces
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
                      src="/Images/services/dental-emergencies.webp"
                      alt="Main Banner"
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className='desc-text-section'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Dental Emergencies</div>
                <h3 className='desc-text-title'>About Dental Emergencies</h3>
                <p>
                  A dental emergency can strike at any moment - whether it’s sudden tooth pain, an injury, or a broken restoration. At Urban Dental & Braces, we understand how stressful and painful these situations can be. That’s why we provide same-day emergency care to relieve discomfort quickly and restore your smile.
                </p>
                <p>
                  Our experienced team is here to handle urgent dental problems with skill and compassion. From treating infections to repairing damaged teeth, we ensure you receive the care you need without delay. We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding communities.
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
                  <h2>Top Reasons to Choose Urban Dental & Braces for Emergency Dentistry</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Same-Day Appointments Available</li>
                    <li><CheckCircle />Comprehensive Emergency Treatments</li>
                    <li><CheckCircle />Gentle & Experienced Team</li>
                    <li><CheckCircle />Flexible Payment Options</li>
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
                Our Emergency Dental Services
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we’re prepared to treat all types of urgent dental issues so you can get back to smiling confidently.
              </p>
              <p className="features-description">
                Here’s how we help in different emergency situations:
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
            <h2 className='faq-heading'>Emergency Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What should I do if I knock out a tooth?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Pick up the tooth by the crown (not the root), place it in milk or saline, and get to our office immediately. The sooner you arrive, the better the chance of saving it.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can I go to the ER for a dental emergency?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Hospitals can manage pain or infections but usually don’t provide dental treatment. Visiting a dentist ensures the root cause is addressed properly.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What qualifies as a dental emergency?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Severe pain, swelling, abscesses, knocked-out teeth, broken teeth, or uncontrolled bleeding should all be treated as emergencies.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How quickly can I be seen?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      We offer same-day emergency appointments whenever possible to give you immediate relief.
                    </p>
                  </AccordionContent>
                </AccordionItem>
<AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover emergency dental visits?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Most dental insurance plans, including Medicaid, cover emergency dental care. Our team can help you review your benefits.
                    </p>
                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need an Emergency Dentist in Bayonne?
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we’re here when you need urgent care the most. From toothaches to accidents, our skilled team provides fast, compassionate, and effective treatment to restore your comfort and your smile.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}