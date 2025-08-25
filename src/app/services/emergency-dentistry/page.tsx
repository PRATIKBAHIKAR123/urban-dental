import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import { CheckCircle } from 'lucide-react';
import BookCallBtn from '../book-call-btn';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("emergency-dentistry", "/Images/services/emergency-dentistry.webp");

export default function EmergencyDentistryPage() {

  const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Tooth Pain & Infections",
    description: "Severe toothaches or dental abscesses should never be ignored.",
    points: [
      "Same-day evaluation and pain relief",
      "Root canal therapy when necessary",
      "Antibiotic treatment for infections",
      "Gentle, compassionate care for long-term relief",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Broken or Knocked-Out Teeth",
    description:
      "Quick action can save a tooth that’s broken or knocked out.",
    points: [
      "Emergency tooth repair or replacement",
      "Restorations including bonding or crowns",
      "Re-implantation for knocked-out teeth (when possible)",
      "Long-term treatment planning for best results",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Damaged Restorations",
    description:
      "Broken crowns, fillings, or dentures can cause discomfort and disrupt daily life.",
    points: [
      "Fast repairs or replacement of dental work",
      "Temporary solutions to relieve discomfort",
      "Strong, durable restorations for lasting results",
      "Comfortable, natural-looking outcomes",
    ],
  },
];

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <div className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Emergency Dentist in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className='text-center'>
                Same-Day Emergency Dentistry in Bayonne | Urban Dental & Braces
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
                      src="/Images/services/emergency-dentistry.webp"
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
                <div className='desc-text-subtitle'>Emergency Dentistry</div>
                <h3 className='desc-text-title'>About Emergency Dentistry</h3>
                <p>
                  Dental emergencies can happen when you least expect them - whether it’s sudden tooth pain, a knocked-out tooth, or a broken filling. At <strong>Urban Dental & Braces in Bayonne</strong>, we provide <strong>same-day emergency dental care</strong> so you don’t have to wait in pain. Our skilled team is experienced in treating urgent dental issues quickly and effectively, ensuring you get the relief you need right away.
                </p>
                <p>
                  We proudly serve patients from <strong>Bayonne (07002), Greenville, NJ (07305)</strong>, and nearby communities. If you’re searching for “emergency dentist near me”, you can trust us to be here when you need urgent care the most.
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
                  <h2>Top Reasons to Choose Urban Dental & Braces for Emergency Care?</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle /> Immediate Appointments Available</li>
                    <li><CheckCircle /> Comprehensive Emergency Treatments</li>
                    <li><CheckCircle /> Experienced & Compassionate Team</li>
                    <li><CheckCircle /> Flexible Payment Options</li>
                    <li><CheckCircle /> Convenient Bayonne Location</li>
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
                Our Emergency Dentistry Services
              </h2>
              <p className="features-description text-center">
                At <b>Urban Dental & Braces</b>, we know dental emergencies can be stressful and painful. That’s why our team is prepared to provide fast, effective care so you can get back to feeling like yourself. Whether it’s trauma, infection, or sudden damage, we offer urgent treatments tailored to your needs.
              </p>
              <p className="features-description">
                Here’s how we help you during a dental emergency:
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
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                   <h3 className='text-lg'> What should I do if I knock out a tooth?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Handle it gently by the crown (not the root), place it in milk or saline, and bring it to us immediately. The sooner you arrive, the higher the chance of saving it.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                   <h3 className='text-lg'> Can I go to the ER for a dental emergency?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Hospitals can manage pain or infection but typically do not provide dental treatments. Visiting a dentist ensures the underlying issue is treated properly.
                    
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                   <h3 className='text-lg'>What counts as a dental emergency?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className='mb-2'>Severe tooth pain, knocked-out or broken teeth, swelling, abscesses, or uncontrolled bleeding should all be treated as emergencies.</p>                    
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                   <h3 className='text-lg'> How soon can I be seen?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    We offer <b>same-day emergency appointments</b> whenever possible to get you relief fast.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                   <h3 className='text-lg'>Does insurance cover emergency dental visits?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Yes - most dental insurance plans, including Medicaid, provide coverage for emergency care.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}

        </div>
        <div className="features-section">
                        <Fade direction="up" duration={1000}>
                          <h2 className="features-heading">
                            Need an Emergency Dentist in Bayonne?
                          </h2>
                          <p className="features-description">
                            At <strong>Urban Dental & Braces</strong>, we’re here when you need us most. Whether it’s sudden pain, an accident, or urgent dental damage, our team provides fast, reliable care to restore your smile and comfort.
                          </p>
                          <BookCallBtn/>
                        </Fade>
                      </div>
          
      </div>
    </div>
  );
}