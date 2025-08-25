"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function KidsAndChildrenPage() {


const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Preventive Visits & Cleanings",
    description: "Regular checkups help us track growth, catch small issues early, and keep smiles cavity-free. Gentle cleanings remove plaque your child can't brush away at home, and our team teaches easy, age-appropriate hygiene tips. Prevention now means fewer treatments later.",
    points: [
      "Comprehensive exams and gentle professional cleanings",
      "Fluoride treatments to strengthen developing enamel",
      "Dental sealants to protect cavity-prone molars",
      "Personalized brushing, flossing, and diet guidance"
    ]
  },
  {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "Cavity Prevention & Tooth-Colored Fillings",
    description: "Even with great brushing, kids can get cavities-especially in hard-to-reach grooves. When treatment is needed, we use conservative, tooth-colored materials that blend in naturally. Our calm, kid-first approach keeps little patients comfortable and relaxed.",
    points: [
      "Mercury-free, shade-matched composite fillings",
      "Minimal, conservative tooth preparation",
      "Numbing and gentle techniques for comfort",
      "Restores strength and appearance in one visit"
    ]
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Specialized Pediatric Treatments",
    description: "Some smiles need extra support as they grow. We offer space maintainers to hold room for incoming teeth, custom mouthguards for active kids, and prompt care for dental injuries. Our team coordinates early orthodontic evaluations when appropriate.",
    points: [
      "Space maintainers to guide proper tooth alignment",
      "Sports mouthguards to protect teeth during play",
      "Same-day care for chips, knocks, and dental injuries",
      "Growth monitoring and early ortho referrals as needed"
    ]
  }
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Kids & Children’s Dentistry in Bayonne, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Gentle Pediatric Dentistry in Bayonne | Urban Dental & Braces
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
                src="/Images/services/kids-dentistry.webp"
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
          <div className='desc-text-subtitle'>Children’s Dentistry</div>
          <h3 className='desc-text-title'>About Children’s Dentistry</h3>
          <p>
           Healthy habits start early-and so does a lifetime of confident smiles. At Urban Dental & Braces in Bayonne, our friendly team provides kid-focused dental care that’s gentle, educational, and fun. From first visits to teen checkups, we make appointments comfortable while protecting growing smiles with preventive care and conservative treatments. We proudly serve families from Bayonne (07002), Greenville, NJ (07305), and nearby communities. 
          </p>
          <p>
           If you’re searching for “kids dentist near me” or a “pediatric dentist near you,” our convenient location and flexible scheduling make visits easy for busy families.
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
                          <h2>Top Reasons to Choose Urban Dental & Braces for Children’s Care</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Kid-Friendly, Gentle Approach</li>
                            <li><CheckCircle />Preventive Care Focus (Cleanings, Fluoride, Sealants)</li>
                            <li><CheckCircle />Experienced Team for All Ages-Toddlers to Teens</li>
                            <li><CheckCircle />Insurance-Friendly & Flexible Payment Options</li>
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
                                  Our Children’s Dentistry Services
                                </h2>
                                <p className="features-description">
                                  At Urban Dental & Braces, we make visits positive and stress-free so kids learn to love taking care of their teeth. Our pediatric services are designed to prevent problems early, treat issues gently, and support confident, healthy smiles as your child grows.
                                </p>
                                <p className="features-description">Here’s how we care for your child’s smile:
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
           <h2 className='faq-heading'>Children’s Dentistry FAQs</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>When should my child have their first dental visit?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>By age one, or within six months of the first tooth erupting. Early visits build comfort and allow us to guide healthy habits.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are dental X-rays safe for kids?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Yes. We use low-dose digital X-rays only when necessary and protect your child with lead aprons and thyroid collars.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How often should my child see the dentist?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Every six months for checkups and cleanings-more often if your child has a higher risk of cavities.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What if my child is anxious about the dentist?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Our team uses a gentle, tell-show-do approach, kid-friendly language, and lots of encouragement to create positive experiences.
            </p>
          </AccordionContent>
        </AccordionItem>

       <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does insurance cover children’s dental visits?</h3> </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Most plans-including Medicaid-cover routine pediatric care and necessary treatments. We’re insurance-friendly and offer flexible payment options.
            </p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Need a Kids’ Dentist in Bayonne?
                  </h2>
                  <p className="features-description">
                    At Urban Dental & Braces, we make children’s dentistry easy, gentle, and convenient. From first checkups to teens, our caring team helps growing smiles stay healthy and bright.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}