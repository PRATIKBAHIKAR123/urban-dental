"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function WhiteningVeneersPage() {
const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Professional Teeth Whitening",
    description: "Our whitening treatments brighten your teeth safely and effectively under dentist supervision.",
    points: [
      "In-office whitening for instant, dramatic results",
      "Take-home kits customized for your smile",
      "Safe and gentle on enamel, reducing sensitivity",
      "Removes deep stains from coffee, wine, tea, and smoking"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Dental Veneers",
    description: "Veneers are thin, durable porcelain shells that enhance the shape, color, and overall appearance of your teeth.",
    points: [
      "Corrects chips, cracks, and discoloration",
      "Closes small gaps and reshapes uneven teeth",
      "Long-lasting, natural-looking results",
      "Creates a radiant, balanced smile in just a few visits"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Cosmetic Bonding",
    description: "Bonding is a simple, cost-effective treatment that enhances your smile in a single visit.",
    points: [
      "Repairs minor chips, cracks, or worn edges",
      "Covers small stains or discoloration",
      "Closes gaps and reshapes uneven teeth",
      "Quick, painless, and budget-friendly solution"
    ]
  }
];

    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Teeth Whitening & Veneers in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Smile Enhancements in Bayonne | Urban Dental & Braces
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
                src="/Images/services/whitening-veneers.webp"
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
          <div className='desc-text-subtitle'>Whitening & Veneers</div>
          <h3 className='desc-text-title'>About Whitening & Veneers</h3>
          <p>
            A confident smile can make a lasting impression. At Urban Dental & Braces in Bayonne, we specialize in two of the most popular cosmetic dentistry treatments - professional teeth whitening and dental veneers. Whether you want to brighten stained teeth or completely transform your smile, our expert team uses advanced techniques to deliver safe, natural, and long-lasting results.
          </p>
          <p>
            We proudly serve patients from Bayonne (07002), Greenville (07305), NJ and nearby communities. If you’ve been searching for “whitening and veneers near me,” we’re here to help you achieve the radiant smile you’ve always wanted.
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
                      <h2>Why Choose Whitening & Veneers at Urban Dental?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Professional, Long-Lasting Results</li>
                        <li><CheckCircle />Safe, Dentist-Supervised Treatments</li>
                        <li><CheckCircle /> Natural & Aesthetic Smile Transformations</li>
                        <li><CheckCircle />Comfortable & Stress-Free Experience </li>
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
                              Teeth Whitening & Veneer Services
                            </h2>
                            <p className="features-description">
                              At Urban Dental & Braces, our whitening and veneer treatments are designed to match your unique smile goals. Whether you want a quick brightness boost, a long-lasting transformation, or a minimally invasive fix, we have the right solution for you.
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
                <h2 className='faq-heading'>Whitening & Veneers FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How long does teeth whitening last?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Whitening results can last between 6 months and 2 years depending on diet, lifestyle, and oral hygiene.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are veneers permanent?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Veneers are a long-term solution and typically last 10–15 years with proper care.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can I combine whitening and veneers?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Yes! Many patients whiten their natural teeth first and then place veneers for a seamless, uniform look.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is the procedure painful?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Both treatments are minimally invasive and virtually pain-free, ensuring comfort during the process.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Will insurance cover whitening or veneers?</h3>  
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">These treatments are considered cosmetic, so most insurance plans do not cover them. However, we offer flexible payment and financing options.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Ready to Brighten & Transform Your Smile?
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we’re here to give you a smile that’s as confident as you are. Whether you’re interested in whitening, veneers, or a combination of both, our team will create a treatment plan tailored to your goals.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}