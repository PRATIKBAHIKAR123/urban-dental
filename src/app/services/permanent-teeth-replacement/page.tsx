"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function Page() {


const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Dental Implants",
    description: "Dental implants are considered the gold standard for tooth replacement, providing stability, durability, and a natural look. They replace both the root and crown of a tooth for a long-lasting solution.",
    points: [
      "Strong, secure replacement for missing teeth",
      "Preserves jawbone health and prevents bone loss",
      "Custom crowns designed to blend seamlessly with your smile",
      "Can last decades with proper care"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Dental Bridges",
    description: "If you're missing one or more teeth in a row, a dental bridge can restore your smile without removable dentures. Bridges are anchored to healthy teeth or implants for support.",
    points: [
      "Restores chewing ability and confidence",
      "Blends naturally with existing teeth",
      "Prevents shifting of surrounding teeth",
      "Provides a durable, functional replacement"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Full Arch & All-on-4® Implants",
    description: "For patients missing most or all teeth, full arch dental implants or All-on-4® can provide a permanent alternative to dentures. These restorations restore full function and give you back a complete smile.",
    points: [
      "Secure, fixed replacement for an entire arch of teeth",
      "Eliminates slipping or discomfort from removable dentures",
      "Helps maintain jawbone strength and facial structure",
      "Long-term, natural-looking solution"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Permanent Teeth Replacement in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Lasting Tooth Replacement in Bayonne | Urban Dental & Braces 
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
                src="/Images/services/permanent-teeth-replacement.webp"
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
          <div className='desc-text-subtitle'>Permanent Teeth Replacement</div>
          <h3 className='desc-text-title'>About Permanent Teeth Replacement</h3>
          <p>           
Missing teeth can impact your confidence, ability to eat, and even your oral health. At Urban Dental & Braces in Bayonne, we specialize in permanent teeth replacement solutions designed to restore your smile for life. From dental implants to bridges and full-arch restorations, our treatments are custom-tailored to give you natural-looking, functional results.

          </p>
          <p>
           We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and surrounding communities. If you’re searching for “permanent tooth replacement near me,” our team is here to help you regain your smile and confidence.
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
                          <h2>Top Reasons to Choose Urban Dental & Braces for Teeth Replacement</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Advanced Tooth Replacement Options</li>
                            <li><CheckCircle />Natural-Looking, Long-Lasting Results</li>
                            <li><CheckCircle />Skilled Implant & Restorative Specialists</li>
                            <li><CheckCircle />Flexible Financing & Insurance Accepted</li>
                            <li><CheckCircle />Conveniently Located in Bayonne, NJ</li>
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
                                  Our Permanent Teeth Replacement Services
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we believe every patient deserves a complete, healthy smile. That’s why we offer a variety of solutions to replace missing teeth permanently. Whether you’re missing one tooth or an entire arch, our treatments are designed to restore both function and appearance.
                                </p>
                                <p className='features-description'>
                                  Here’s how we can replace your missing teeth:
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
           <h2 className='faq-heading'>Permanent Teeth Replacement FAQs</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long do dental implants last?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>With proper care, dental implants can last decades, often a lifetime, making them the most durable tooth replacement option.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are dental implants painful?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Most patients report minimal discomfort during the procedure, and recovery is often easier than expected. Local anesthesia and sedation options are available.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What’s the difference between implants and bridges?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Implants replace both the root and crown, while bridges rely on adjacent teeth for support. Implants tend to last longer and protect bone health.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do permanent teeth replacements look natural?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes! Our restorations are designed to match the color, shape, and size of your natural teeth for a seamless smile. 
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover permanent tooth replacement?</h3>  </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Many dental insurance plans, including Medicaid, provide partial coverage for tooth replacement options. We also offer flexible financing to make treatment affordable.
            </p>
          
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Restore Your Smile with Permanent Teeth Replacement in Bayonne
                  </h2>
                  <p className="features-description">
                    At Urban Dental & Braces, we make it possible to enjoy the confidence of a complete, healthy smile again. Whether you need a single implant, a bridge, or a full arch restoration, our team is here to provide lasting results.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}