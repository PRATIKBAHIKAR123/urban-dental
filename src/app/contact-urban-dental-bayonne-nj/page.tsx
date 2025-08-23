import type { Metadata } from "next";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ContactForm from '../contact-us/components/ContactForm'
import ContactInfo from '../contact-us/components/ContactInfo'
import MapSection from '../contact-us/components/MapSection'
import { generatePageMetadata } from '@/lib/metadata';
// import PartnerLogos from './components/PartnerLogos'
// import NewsletterSection from './components/NewsletterSection'

export const metadata: Metadata = generatePageMetadata("contact-urban-dental-bayonne-nj", "/Images/urban-dental-2048x609.webp");

export default function ContactMapleDentalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="details-page-header-section mb-12">
            
            <Fade delay={200}>
                          <h1>
                            Get in Touch with Urban Dental & Braces in Bayonne, NJ
                          </h1>
                        </Fade>
            <Fade delay={500}>
                          <h2>
                            Your Smile Matters - We’re Here to Help
                          </h2>
                        </Fade>
          </div>
      {/* Contact Us Section */}
      <Fade triggerOnce>
        <section className="max-w-7xl mx-auto px-4 py-16">
          

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Slide direction="left" triggerOnce>
              <ContactForm />
            </Slide>
            <Slide direction="right" triggerOnce>
              <ContactInfo />
            </Slide>
          </div>
        </section>
      </Fade>

      {/* Map Section */}
      <Zoom triggerOnce>
        <MapSection />
      </Zoom>

      {/* Partner Logos */}
      {/* <Slide direction="up" triggerOnce>
        <PartnerLogos />
      </Slide> */}

      {/* Newsletter Section */}
      <Fade direction="up" triggerOnce>
        {/* <NewsletterSection /> */}
      </Fade>

      {/* Floating Scroll to Top Button */}
      
    </div>
  )
}
