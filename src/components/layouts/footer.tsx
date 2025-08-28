"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E3E] text-white py-8 px-2 sm:px-4 md:px-8">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Left: Logo & About */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/Images/urban dental.braces - bluewhite.png" alt="urban Dental Logo" width={160} height={100} className="w-32 sm:w-40 md:w-48 h-auto" />
          </div>
          <p className="text-xs sm:text-sm text-gray-200">
            Urban Dental & Braces is your trusted dentist in Bayonne, NJ, delivering personalized family, cosmetic, and restorative dental care. From preventive checkups, cleanings, and fillings to advanced services like teeth whitening, veneers, dental implants, orthodontics, and same-day emergency dentistry, our team is here to keep your smile healthy and confident. Conveniently located at 393 Avenue C, Bayonne, NJ 07002, we proudly care for patients from Bayonne (07002), Greenville (07305), and nearby communities. With modern technology, gentle techniques, and compassionate service, Urban Dental & Braces makes every visit comfortable and stress-free.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image src="/Images/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image src="/Images/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image src="/Images/twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
            </a>
          </div>


        </div>

        {/* Middle: Services Columns */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/services/emergency-dentistry" className="hover:underline">Emergency Dentistry</Link></li>
              <li><Link href="/services/root-canal" className="hover:underline">Root Canal</Link></li>
              <li><Link href="/services/oral-surgery" className="hover:underline">Oral Surgery</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="hover:underline">Cosmetic Dentistry</Link></li>
              <li><Link href="/services/dental-fillings" className="hover:underline">Dental Fillings</Link></li>
              <li><Link href="/services/dental-implants" className="hover:underline">Dental Implants</Link></li>
              {/* <li><Link href="/services/orthodontics" className="hover:underline">Orthodontics</Link></li>
              <li><Link href="/services/crowns-and-bridges" className="hover:underline">Crowns and Bridges</Link></li>
              <li><Link href="/services/dental-emergencies" className="hover:underline">Dental Emergencies</Link></li>
              <li><Link href="/services/tooth-extraction" className="hover:underline">Tooth Extraction</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">Importance</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/about-urban-dental-bayonne-nj" className="hover:underline">About us</Link></li>
              <li><Link href="/dental-blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              {/* <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li> */}
              <li><Link href="/contact-urban-dental-bayonne-nj" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/sitemap" className="hover:underline">Site map</Link></li>

              {/* <li><Link href="/services/endodontics" className="hover:underline">Endodontics</Link></li>
              <li><Link href="/services/same-day-dentistry" className="hover:underline">Same-Day Dentistry</Link></li> 
              <li><Link href="/services/painless-treatment" className="hover:underline">Painless Treatment</Link></li> 
              <li><Link href="/services/perio-protect" className="hover:underline">Perio Protect</Link></li>
              <li><Link href="/services/halitosis" className="hover:underline">Halitosis</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 col-span-1">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Contact Us</h4>
          <div className="text-xs sm:text-sm text-gray-200">
            <a className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-start underline" href="https://www.google.com/maps/place/Urban+Dental+and+Braces/@40.6608403,-74.129413,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2532a5c5f1bc5:0xbf25bfd8f33eafc9!8m2!3d40.6608404!4d-74.1245421!16s%2Fg%2F11yg5dvxh2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"><MapPin size={16} className="mt-0.5" />
              393 Avenue C, Bayonne, NJ 07002</a>
            <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center"><Phone size={16} /> <a href="tel:+1 (201) 479-2100" className="underline">+1 (201) 479-2100</a></p>
            {/* <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center"><Mail size={16} /> <a href="mailto:harrisburg@mapledentalpa.com" className="underline">harrisburg@mapledentalpa.com</a></p> */}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2">
        <div className="flex items-center ">
          {/* <div className="flex items-center"> */}
          <span>&copy; {new Date().getFullYear()} Urban Dental. All rights reserved.</span>
          {/* <span className="hidden md:inline"></span> */}
          {/* <span> */}
        </div>
        <div className="flex items-center">
          <span>
            Designed by{' '}
            <a
              href="https://clearconceptsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Clear Concept Solutions
            </a>
          </span>
        {/* </div> */}
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-end w-full md:w-auto">
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
        <Link href="/accessibility" className="hover:underline">Accessibility</Link>
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
      </div>
    </div>
    </footer >
  );
}
