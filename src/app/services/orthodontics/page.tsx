"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function OrthodonticsPage() {


const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Invisalign® Clear Aligners",
    description: "Clear aligners are a popular choice for patients who want a nearly invisible way to straighten teeth. Invisalign® aligners are removable, comfortable, and designed to fit seamlessly into your daily routine.",
    points: [
      "Discreet treatment with clear, removable aligners",
      "Customized for precise and effective tooth movement",
      "No food restrictions or complicated cleaning routines",
      "Ideal for teens and adults seeking flexibility"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Traditional Metal Braces",
    description: "For complex orthodontic issues, traditional braces remain a reliable solution. Modern metal braces are smaller, more comfortable, and more effective than ever before.",
    points: [
      "Corrects overcrowding, spacing, and bite problems",
      "Durable and effective for even the most complex cases",
      "Option for colored bands to make treatment fun for kids",
      "Proven track record of long-lasting results"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Early Orthodontic Treatment for Kids",
    description: "Starting orthodontic care early can prevent more serious issues later. Our team provides evaluations and treatments to guide proper jaw growth and tooth alignment in children.",
    points: [
      "Early detection of bite and alignment concerns",
      "Helps guide permanent teeth into better positions",
      "May reduce need for extensive treatment in the future",
      "Creates a healthy foundation for a confident smile"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Orthodontist in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Advanced Orthodontics in Bayonne | Urban Dental & Braces
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
                        src="/Images/services/orthodontics.webp"
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
          <div className='desc-text-subtitle'>Orthodontic</div>
          <h3 className='desc-text-title'>About Orthodontics</h3>
          <p>
           A straighter smile is not just about appearance-it also improves oral health and overall confidence. At Urban Dental & Braces in Bayonne, we provide modern orthodontic solutions for children, teens, and adults. From traditional braces to clear aligners, our treatments are designed to correct misaligned teeth, bite issues, and spacing problems with comfort and precision.
          </p>
          <p>
           We proudly serve patients from Bayonne (07002), Greenville (07305), NJ and nearby communities. If you’re searching for “orthodontist near me,” our experienced team is here to guide you through every step of your smile journey.
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
                          <h2>Top Reasons to Choose Urban Dental & Braces for Orthodontic Care</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Wide Range of Treatment Options</li>
                            <li><CheckCircle />Personalized Plans for Children & Adults</li>
                            <li><CheckCircle />Experienced Orthodontic Specialists</li>
                            <li><CheckCircle />Flexible Financing & Insurance Options</li>
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
                                  Our Orthodontic Services
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we believe everyone deserves a smile they can feel proud of. Whether you want discreet aligners or traditional braces, our orthodontic services are tailored to meet your needs and lifestyle.
                                </p>
                                <p className='features-description'>
                             Here’s how we help you achieve a straighter, healthier smile:
                                  
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
           <h2 className='faq-heading'>Orthodontics FAQs</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>At what age should my child see an orthodontist?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>The American Association of Orthodontists recommends children have an evaluation by age 7, but treatment can begin at any age.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does orthodontic treatment take?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Treatment length varies, but most patients wear braces or aligners for 12–24 months, depending on their needs.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are clear aligners as effective as braces?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Yes-for mild to moderate cases, Invisalign® can be just as effective as braces. Complex cases may still require braces for best results.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do orthodontic treatments hurt?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                You may feel slight pressure or soreness after adjustments, but discomfort is temporary and manageable.
            </p>
          </AccordionContent>
        </AccordionItem>
          <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover orthodontics?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Many dental insurance plans provide partial coverage for orthodontic care. We also offer financing and flexible payment options.
            </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Looking for an Orthodontist in Bayonne?
                  </h2>
                  <p className="features-description">
                    At Urban Dental & Braces, we make it simple to achieve a straighter, healthier smile. Whether you’re considering Invisalign®, braces, or early treatment for your child, our orthodontic specialists are here to help you every step of the way.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}