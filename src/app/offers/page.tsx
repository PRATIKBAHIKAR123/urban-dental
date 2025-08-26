"use client";
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import BookingModal from '@/app/booking/bookingScreen';

export default function OffersPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="details-page-header-section flex flex-col items-center justify-center">
                <h1>Professional Teeth Whitening in Bayonne, NJ – Just $299</h1>
                <h2>
                    Limited-Time Whitening Special at Urban Dental & Braces
                </h2>
            </div>

            {/* Welcome Offer Section */}
            <div className="max-w-7xl mx-auto text-center py-10 px-4">
                <h3 className="text-xl font-bold mb-2">Book Your $299 Whitening Appointment in Bayonne Today</h3>
                <p className="mb-2">Want a brighter, whiter smile without the high price tag? For a limited time, Urban Dental & Braces Bayonne is offering <strong>professional teeth whitening for just $299</strong>. This in-office whitening treatment provides safe, noticeable results in one visit—no gimmicks, no hidden costs. Whether you’re preparing for a big event or simply want to boost your confidence, this exclusive whitening special is designed for you.</p>
                <p className="mb-2 p-4">Our dental office proudly serves patients in <strong>Bayonne, Greenville, and Jersey City</strong>. If you’ve been searching for “<strong>teeth whitening near me</strong>,” this is your chance to transform your smile affordably.</p>
                
                <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
                >
                    Claim Your Whitening Special Today!
                </button>
            </div>

            {/* Main Offer Section */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/Images/banners/woman-patient-dentist.jpg" alt="Teeth Whitening" width={400} height={350} className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]" />
                </div>
                <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 ">What’s Included in Your $299 Whitening Visit?</h2>
                        <ul className="space-y-4 text-left">
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">Professional-Grade Whitening Treatment</h3>
                                <div>Unlike drugstore strips or DIY kits, our whitening system is clinically tested to remove deep stains while keeping your teeth and gums safe.</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">Fast, Noticeable Results</h3>
                                <div>Walk out with a smile that’s several shades brighter after just one session—perfect before weddings, photos, or important life moments. </div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                            <h3 className="text-base font-semibold">Personalized Care & Long-Lasting Tips</h3>
                            <div>Our cosmetic dental team customizes your treatment and provides aftercare advice to help your brighter smile last longer.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full details-page-header-section text-left text-white py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Why Choose Urban Dental & Braces for Whitening?</h2>
                    <p className="mb-4">When it comes to cosmetic dentistry, experience and comfort make all the difference. Patients throughout Bayonne and Greenville trust us because:</p>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Experienced and caring cosmetic dentists</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Affordable, transparent pricing with no hidden fees</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Modern office designed for comfort and relaxation</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Flexible scheduling, including evening appointments</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Trusted by families across Bayonne and surrounding areas</li>
                    </ul>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">What to Expect at Your Whitening Appointment</h2>
                <p className="text-center mb-8">From start to finish, your visit at Urban Dental Bayonne is smooth and stress-free. Here’s how it works:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">Friendly check-in at our welcoming front desk</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">Quick consultation to confirm whitening is right for you</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">Professional in-office whitening treatment with immediate results</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">Pro tips from our team to maintain your whiter smile for months</span>
                    </div>
                </div>
                <p className="text-center mt-8">We make sure your teeth whitening experience is comfortable, effective, and confidence-boosting.</p>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
                    >
                        Claim Your Free Exam Today
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
} 