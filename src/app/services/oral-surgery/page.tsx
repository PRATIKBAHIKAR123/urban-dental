"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function OralSurgeryPage() {


const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Common Oral Surgery Services We Provide",
    description: "We offer a wide range of oral surgery treatments designed to restore comfort and improve dental health.",
    points: [
      "Tooth Extractions (simple & surgical)",
      "Wisdom Teeth Removal",
      "Bone Grafting for Dental Implants",
      "Treatment of Oral Infections & Abscesses"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Comfort & Sedation Options",
    description: "Your comfort is always our priority. We provide safe sedation and pain-management options to help you feel relaxed and worry-free.",
    points: [
      "Local anesthesia for targeted numbness",
      "Nitrous oxide (laughing gas) for relaxation",
      "Supportive, calm surgical environment",
      "Post-treatment care and recovery guidance"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Oral Surgery Care Focused on Your Needs",
    description: "We go beyond just performing procedures - our approach is built around comfort, safety, and long-term results. Patients choose us for:",
    points: [
      "Detailed consultations before every procedure",
      "Clear explanations and personalized treatment plans",
      "Gentle techniques that reduce discomfort and speed recovery",
      "Ongoing follow-up care to ensure proper healing"
    ]
  }
];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Oral Surgery in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Gentle & Reliable Oral Surgery | Urban Dental & Braces
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
                      src="/Images/services/oral-surgery.webp"
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
                <div className='desc-text-subtitle'>Oral Surgery</div>
                <h3 className='desc-text-title'>About Oral Surgery</h3>
                <p>
                  At Urban Dental & Braces, we make oral surgery safe, gentle, and stress-free. Whether you require a tooth extraction, wisdom teeth removal, or a more advanced procedure, our experienced team ensures your care is delivered with precision and compassion.
                </p>
                <p>
                  Using advanced tools and sedation options, we make each procedure as comfortable as possible. Patients from Bayonne (07002), Greenville, NJ (07305), and nearby communities rely on us for surgical care close to home. If you’re searching for an “oral surgeon near me,” you’ve found a trusted partner in your dental health.
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
                  Why Choose Urban Dental & Braces for Oral Surgery?
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Experienced Dental Surgeons You Can Trust</li>
                    <li><CheckCircle />Modern Technology for Precision & Safety</li>
                    <li><CheckCircle />Comfortable, Patient-Focused Environment</li>
                    <li><CheckCircle />Same-Day Appointments When Urgent Care is Needed</li>
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
                Our Oral Surgery Services
              </h2>
              <p className="features-description">
                Oral surgery doesn’t need to feel overwhelming. At Urban Dental & Braces, our goal is to provide smooth, predictable care from start to finish. We combine gentle techniques with advanced tools to protect your health, relieve discomfort, and support long-term dental wellness.
              </p>
              <p className="features-description">
                Here’s what you can expect when you choose us for your surgical needs:
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
            <h2 className='faq-heading'>Oral Surgery FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>When is oral surgery needed?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Oral surgery may be required for impacted teeth, severe decay, infection, or to prepare for implants. </p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Will oral surgery hurt?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>No. With local anesthesia and sedation options, most patients experience little to no discomfort during treatment. </p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What can I expect after surgery?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Mild swelling or soreness is normal, but recovery usually happens within a few days. We’ll provide aftercare instructions to make healing smooth.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How do I prepare for surgery?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Follow our guidance carefully. If sedation is planned, avoid eating beforehand and arrange transportation home after your visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is oral surgery covered by insurance?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Many procedures are covered by dental insurance. Our team will help confirm your benefits and review payment options.
                    </p>

                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need Oral Surgery in Bayonne, NJ?
              </h2>
              <p className="features-description">
                From tooth extractions to wisdom teeth removal, Urban Dental & Braces provides skilled, compassionate oral surgery right here in Bayonne. Protect your smile and your overall health with expert care close to home.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}