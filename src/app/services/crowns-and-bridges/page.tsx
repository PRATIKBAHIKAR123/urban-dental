"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function CrownsPage() {


 const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Dental Crowns",
    description: "Crowns, often called \"caps,\" are used to cover and protect weakened, damaged, or misshapen teeth. They restore both strength and beauty, making your tooth look and function like new.",
    points: [
      "Protects cracked or weakened teeth",
      "Restores shape, size, and appearance",
      "Made from durable, tooth-colored materials",
      "Long-lasting solution with proper care"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Dental Bridges",
    description: "Bridges are used to replace one or more missing teeth by anchoring to the natural teeth or implants beside the gap. They not only restore your bite but also prevent surrounding teeth from shifting.",
    points: [
      "Fills gaps caused by missing teeth",
      "Prevents shifting and misalignment",
      "Improves chewing and speaking function",
      "Blends naturally with your existing smile"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Same-Day & Advanced Restorations",
    description: "We use modern techniques and high-quality materials to ensure your crown or bridge is both strong and aesthetically pleasing. In many cases, we can provide same-day restorations for faster results.",
    points: [
      "Advanced digital impressions for precision",
      "Faster turnaround with same-day options",
      "Comfortable, stress-free procedure",
      "Restorations designed for long-term success"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Dental Crowns & Bridges in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Durable, Natural-Looking Restorations | Urban Dental & Braces
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
                src="/Images/services/crown-bridge.webp"
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
          <div className='desc-text-subtitle'>Dental Crowns & Bridges</div>
          <h3 className='desc-text-title'>About Dental Crowns & Bridges</h3>
          <p>
           Damaged or missing teeth can affect both your oral health and your confidence. At Urban Dental & Braces in Bayonne, we offer high-quality dental crowns and bridges designed to restore function, protect your teeth, and give you a natural-looking smile. Our restorations are custom-made to blend seamlessly with your existing teeth, ensuring comfort and durability.

          </p>
          <p>
           We proudly serve patients from Bayonne (07002), Greenville, NJ (07305), and nearby communities. If you’re searching for “dental crowns or bridges near me,” our experienced team is here to help you smile with confidence again.
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
                          <h2>Top Reasons to Choose Urban Dental & Braces for Restorations</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Custom-Fit, Natural Appearance</li>
                            <li><CheckCircle />Strong & Long-Lasting Materials</li>
                            <li><CheckCircle />Comfortable & Painless Procedure</li>
                            <li><CheckCircle />Affordable & Insurance-Friendly Options</li>
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
                                  Our Crowns & Bridges Services
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we believe every smile deserves to be strong, healthy, and beautiful. Whether you need to repair a damaged tooth or replace missing ones, our crowns and bridges are tailored to your unique needs. Here’s how we help restore your smile:
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
           <h2 className='faq-heading'>Crowns & Bridges FAQs</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long do crowns and bridges last?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>With proper care, crowns and bridges can last 10–15 years or more. Regular checkups and good oral hygiene help extend their lifespan. </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are crowns and bridges noticeable?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>No - our restorations are made from high-quality, tooth-colored materials that blend seamlessly with your natural teeth.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do crowns and bridges require special care?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>They can be cared for just like your natural teeth. Regular brushing, flossing, and dental checkups are recommended.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are crowns and bridges covered by insurance?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes - most dental insurance plans provide coverage for restorative treatments like crowns and bridges. Our team will help you understand your benefits.
            </p>
          </AccordionContent>
        </AccordionItem>



      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Restore Your Smile with Crowns & Bridges in Bayonne
                  </h2>
                  <p className="features-description">
                    At Urban Dental & Braces, we specialize in creating durable, natural-looking crowns and bridges that restore your smile and confidence. Whether you’re repairing a damaged tooth or replacing missing ones, our team is here to provide the best care possible.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}