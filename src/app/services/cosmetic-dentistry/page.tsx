import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("cosmetic-dentistry", "/Images/services/cosmetic-dentistry.webp");

export default function CosmeticDentistryPage() {


const features = [
  {
    icon: "/Images/icons/medicine.png",
    title: "Teeth Whitening",
    description: "At Urban Dental & Braces, we use safe, dentist-supervised whitening solutions that deliver noticeable results without sensitivity or damage to enamel.",
    points: [
      "In-office whitening for fast, dramatic results",
      "Customized take-home kits for long-lasting brightness",
      "Safe and effective solutions designed to protect your teeth",
      "Removes stains caused by coffee, tea, wine, or smoking"
    ]
  },
  {
    icon: "/Images/icons/dental-drill.png",
    title: "Dental Veneers",
    description: "Whether your concern is discoloration, unevenness, or small gaps, veneers can create a balanced and radiant smile.",
    points: [
      "Corrects chips, cracks, stains, and gaps in teeth",
      "Provides natural-looking results that blend seamlessly",
      "Durable solution that can last over a decade with proper care",
      "Creates a brighter, more symmetrical smile in just a few visits"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Dental Bonding",
    description: "Bonding is minimally invasive and requires little to no enamel removal, making it an excellent option for patients who want immediate results.",
    points: [
      "Repairs minor chips and cracks in just one visit",
      "Closes small gaps and reshapes uneven teeth",
      "Affordable cosmetic solution compared to other treatments",
      "Provides natural-looking, seamless results"
    ]
  }
];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Cosmetic Dentist in Bayonne, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Smile Transformations in Bayonne | Urban Dental & Braces
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
                      src="/Images/services/cosmetic-dentistry.webp"
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
                <div className='desc-text-subtitle'>Cosmetic Dentistry</div>
                <h3 className='desc-text-title'>About Cosmetic Dentistry</h3>
                <p>
                  A beautiful smile has the power to boost your confidence and leave a lasting impression. At Urban Dental & Braces in Bayonne, we specialize in cosmetic dentistry designed to enhance the appearance of your teeth while maintaining natural function. Whether you’re dealing with stained, chipped, misaligned, or uneven teeth, our skilled team uses advanced treatments to deliver results that look and feel amazing.
                </p>
                <p>
                  We proudly serve patients from Bayonne (07002), Greenville (07305), NJ and nearby communities. If you’ve been searching for “cosmetic dentist near me,” we’re here to help you achieve the smile you’ve always wanted.
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
                  <h2>Why Choose Urban Dental & Braces for Cosmetic Dentistry?</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Customized Smile Makeovers</li>
                    <li><CheckCircle />Advanced Technology & Techniques</li>
                    <li><CheckCircle />Comfortable & Stress-Free Visits</li>
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
                Our Cosmetic Dentistry Services
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, we believe cosmetic dentistry is more than just improving how your smile looks-it’s about boosting your self-esteem and making sure your teeth function at their best. Whether you’re preparing for a big life event or simply want to feel more confident every day, our cosmetic treatments are designed to fit your needs.
              </p>
              <p className="features-description">
                Here’s few of the popular services in Cosmetic Dentistry that we offer at Urban Dental:
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
            <h2 className='faq-heading'>Cosmetic Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does teeth whitening last?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Professional whitening results can last from 6 months to 2 years, depending on your diet and oral habits.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are veneers permanent?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Veneers are a long-term solution, lasting 10–15 years with proper care.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is cosmetic dentistry painful?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Most procedures are minimally invasive and pain-free, thanks to modern dental technology and techniques.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can I combine cosmetic treatments?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes! Many patients opt for a smile makeover that includes veneers, whitening, and alignment for the best results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover cosmetic dentistry?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Most cosmetic procedures are considered elective and not covered by insurance. However, we provide affordable payment plans and financing options.
                    </p>

                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Transform Your Smile? 
              </h2>
              <p className="features-description">
                At Urban Dental & Braces, our goal is to give you the confident, radiant smile you deserve. Whether you want a brighter, straighter, or more balanced smile, our cosmetic dentistry services are here to help.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}