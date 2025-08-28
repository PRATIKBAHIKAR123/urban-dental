"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function RootCanalClient() {
const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "A Comfortable Step-by-Step Process",
    description: "We take the fear out of root canals with a calm, gentle approach.",
    points: [
      "Local anesthesia to eliminate discomfort",
      "Detailed digital scans for treatment accuracy",
      "Careful cleaning and sealing of the canals",
      "Tooth restoration options for lasting strength"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Focused on Keeping Your Natural Teeth",
    description: "Our top priority is saving your tooth whenever possible.",
    points: [
      "Thorough evaluation of your dental health",
      "Use of durable, high-quality materials",
      "Post-treatment follow-up to ensure recovery",
      "Clear instructions for protecting your tooth long-term"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Root Canal Care Designed Around You",
    description: "Every patient's needs are different, and at Urban Dental & Braces, we personalize root canal treatment so you feel confident every step of the way:",
    points: [
      "Clear explanations before, during, and after treatment so you know what to expect",
      "A calm, supportive environment to ease dental anxiety",
      "Flexible scheduling options to fit busy lifestyles",
      "Long-term preservation strategies to protect your treated tooth for years to come"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Root Canal Treatment in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Gentle & Effective Root Canals in Bayonne | Urban Dental & Braces
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
                src="/Images/services/root-canal.webp"
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
          <div className='desc-text-subtitle'>Root Canal</div>
          <h3 className='desc-text-title'>About Root Canal Therapy</h3>
          <p>
            A toothache that doesn’t go away often signals something more serious than a cavity. When the inner pulp of your tooth becomes infected or damaged, a root canal is the most effective way to relieve pain and protect your natural smile. At <b>Urban Dental & Braces in Bayonne</b>, we provide <b>pain-free root canal treatments</b> that remove infection, restore function, and help you avoid tooth loss.
          </p>
          <p>
            We proudly welcome patients from <b>Bayonne (07002), Greenville, NJ (07305)</b>, and surrounding communities. If you’ve been searching for “root canal near me”, relief is closer than you think.
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
                      <h2>Why Choose Urban Dental & Braces for Root Canal Treatment?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Compassionate Care That Puts You First </li>
                        <li><CheckCircle />State-of-the-Art Diagnostic Tools</li>
                        <li><CheckCircle /> Quick Relief When You Need It</li>
                        <li><CheckCircle /> Affordable Payment Options & Insurance Accepted  </li>
                        <li><CheckCircle />Flexible & Affordable Options</li>
                        <li><CheckCircle /> Trusted Local Bayonne Dentist</li>
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
                              Our Root Canal Services
                            </h2>
                            <p className="features-description">
                              Root canals don’t have to be overwhelming. Our approach is designed to quickly remove infection, preserve your natural tooth, and get you back to a pain-free smile. By treating the problem early, you avoid extractions and more complex dental work later on.
                            </p>
                            <p className="features-description">
                              Here’s how our root canal services stand out:
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
                          <p className='features-description mt-6'>
                            Searching for a “<i>root canal dentist near me</i>”? Urban Dental & Braces is ready to restore your smile.
                          </p>
                        </div>
    <div className='faq-section'>
                <h2 className='faq-heading'>Root Canal FAQs</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                       <h3 className='text-lg'>What exactly does a root canal involve?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        It’s a procedure that removes infected or damaged tissue from inside the tooth, disinfects the area, and seals it to prevent further infection.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                       <h3 className='text-lg'>How do I know if I might need a root canal?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Signs include:
                        <u className='list-disc pl-6 space-y-2'>
                          <li>Ongoing toothache or throbbing pain</li>


<li>Sharp sensitivity to hot or cold</li>


<li>Swelling or tenderness around the gums</li>


<li>Pain while chewing or biting</li>


<li>A tooth that looks darker than the rest</li>

                        </u>
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                       <h3 className='text-lg'> Does a root canal hurt?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Not anymore! With local anesthesia and modern methods, most patients feel little to no pain during the procedure - and many feel instant relief afterward.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                       <h3 className='text-lg'>What happens after treatment?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          In most cases, a crown is placed on the treated tooth to strengthen it and restore full function.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                       <h3 className='text-lg'>Is a root canal better than an extraction?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes - whenever possible, saving your natural tooth is best. Root canals allow you to keep your original tooth and avoid more costly replacements like implants or bridges.</p>
                      </AccordionContent>
                    </AccordionItem>

                   
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need a Root Canal in Bayonne, NJ?
                                </h2>
                                <p className="features-description">
                                  If you’re living with constant tooth pain or swelling, don’t wait for it to get worse. At <strong>Urban Dental & Braces</strong>, we make root canal treatment simple, gentle, and effective so you can return to comfort quickly.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}
