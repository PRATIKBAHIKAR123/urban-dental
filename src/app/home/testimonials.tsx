// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   content: string;
//   rating?: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Emma's mom",
//     content: "My daughter was really anxious about her first dental visit, but the team at Urban Dental was incredible! They made her feel safe, showed her all the tools, and even let her 'help' with the exam. Now she actually looks forward to her check-ups!",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Leslie J.",
//     content: "I just finished my aligners treatment, and I can't stop smiling! The trays were easy to wear, and my teeth straightened so much faster than I expected. The team was always supportive, answering all my questions and making sure I stayed on track.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Michelle D.",
//     content: "I've always been self-conscious about my stained teeth, but after a professional whitening session at Urban Dental, I feel so much more confident. The results were instant, and my smile looks amazing!",
//     rating: 5
//   },
//   {
//     id: 4,
//     name: "David R.",
//     content: "The entire staff is professional and caring. They explained every procedure clearly and made sure I was comfortable throughout my visit. Highly recommend Urban Dental for anyone looking for quality dental care.",
//     rating: 5
//   },
//   {
//     id: 5,
//     name: "Sarah M.",
//     content: "Outstanding service from start to finish. The modern equipment and gentle approach made my root canal procedure much easier than I anticipated. Thank you for taking such great care of me!",
//     rating: 5
//   }
// ];

// const TestimonialsSwiper: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   }, []);

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, nextSlide]);

//   // Touch handlers for mobile swiping
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//     setIsAutoPlaying(false);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }

//     // Resume auto-play after a delay
//     setTimeout(() => setIsAutoPlaying(true), 3000);
//   };

//   // Mouse handlers for desktop dragging
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState(0);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setDragStart(e.clientX);
//     setIsAutoPlaying(false);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     e.preventDefault();
//   };

//   const handleMouseUp = (e: React.MouseEvent) => {
//     if (!isDragging) return;
    
//     setIsDragging(false);
//     const dragEnd = e.clientX;
//     const distance = dragStart - dragEnd;
    
//     if (distance > 50) {
//       nextSlide();
//     } else if (distance < -50) {
//       prevSlide();
//     }

//     setTimeout(() => setIsAutoPlaying(true), 3000);
//   };

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <svg
//         key={i}
//         className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ));
//   };

//   return (
//     <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             What they say about us
//           </h2>
//           <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
//         </div>

//         <div 
//           className="relative overflow-hidden"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={() => {
//             setIsDragging(false);
//             setTimeout(() => setIsAutoPlaying(true), 1000);
//           }}
//         >
//           {/* Testimonials Container */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="w-full flex-shrink-0 px-4"
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-4xl relative hover:shadow-2xl transition-all duration-300">
//                   {/* Quote Icon */}
//                   <div className="absolute top-2 left-8">
//                     <div className="bg-primary rounded-full p-3 shadow-lg">
//                       <Quote className="w-6 h-6 text-white" />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="pt-8">
//                     <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
//                       "{testimonial.content}"
//                     </p>
                    
//                     {/* Rating */}
//                     {testimonial.rating && (
//                       <div className="flex justify-center mb-4">
//                         <div className="flex space-x-1">
//                           {renderStars(testimonial.rating)}
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Name */}
//                     <div className="text-center">
//                       <h4 className="text-xl font-bold text-gray-900">
//                         {testimonial.name}
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={() => {
//               prevSlide();
//               setIsAutoPlaying(false);
//               setTimeout(() => setIsAutoPlaying(true), 3000);
//             }}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl z-10 group"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary" />
//           </button>

//           <button
//             onClick={() => {
//               nextSlide();
//               setIsAutoPlaying(false);
//               setTimeout(() => setIsAutoPlaying(true), 3000);
//             }}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl z-10 group"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 goToSlide(index);
//                 setIsAutoPlaying(false);
//                 setTimeout(() => setIsAutoPlaying(true), 3000);
//               }}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? 'bg-primary scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestimonialsSwiper;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  companyLogos?: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria S.",
    title: "Parent",
    company: "Urban Dental Patient",
    content: "Dr. Hala Elsamna is absolutely amazing! She took the time to explain my treatment plan and made me feel at ease throughout my visit. The office is clean, modern, and welcoming. I finally found a dentist in Bayonne who truly cares about patients.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogos: ["/Images/tech-companies/123577.png", "/Images/tech-companies/12357910.png", "/api/placeholder/120/60"]
  },
  {
    id: 2,
    name: "Thomas K.",
    title: "Orthodontic Patient",
    company: "Urban Dental",
    content: "I brought my son in for a checkup with Dr. Dalia Khan, and she was so patient and kind. He usually hates going to the dentist, but she made the experience fun and stress-free. I’m grateful to have found a family-friendly dental office right here in Bayonne.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogos: ["/api/placeholder/120/60", "/api/placeholder/120/60", "/api/placeholder/120/60"]
  },
  {
    id: 3,
    name: "Aisha R.",
    title: "Whitening Patient",
    company: "Urban Dental",
    content: "Dr. Steven Reff helped me with a dental emergency, and I couldn’t be more thankful. I was in a lot of pain, but he quickly diagnosed the issue and took care of it the same day. The whole team is professional and compassionate.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogos: ["/api/placeholder/120/60", "/api/placeholder/120/60", "/api/placeholder/120/60"]
  },
  {
    id: 4,
    name: "Kevin D.",
    title: "General Patient",
    company: "Urban Dental",
    content: "From the front desk to the hygienists and doctors, Urban Dental & Braces is top-notch. My cleaning was thorough, and Dr. Elsamna followed up to make sure I was comfortable. You can tell they prioritize patient care and comfort.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogos: ["/api/placeholder/120/60", "/api/placeholder/120/60", "/api/placeholder/120/60"]
  },
  {
    id: 5,
    name: "Stephanie M. ",
    title: "Surgical Patient",
    company: "Urban Dental",
    content: "I recently got Invisalign with Dr. Khan, and the results are incredible. She explained the process clearly and made the journey so easy. I love my new smile! Highly recommend Urban Dental to anyone in Bayonne or Greenville.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogos: ["/api/placeholder/120/60", "/api/placeholder/120/60", "/api/placeholder/120/60"]
  }
];

const tech = [
    {   id:1,
        img:'/Images/tech-companies/123577.png'
    },
    {   id:2,
        img:'/Images/tech-companies/12357910.png'
    },
    {   id:3,
        img:'/Images/tech-companies/tech-01.webp'
    },
    {   id:4,
        img:'/Images/tech-companies/tech-02.webp'
    },
    {   id:5,
        img:'/Images/tech-companies/tech-03.webp'
    },
    {   id:6,
        img:'/Images/tech-companies/tech-04.webp'
    },
    {   id:7,
        img:'/Images/tech-companies/tech-05.webp'
    },
    {
        id:8,
        img:'/Images/tech-companies/tech-07.webp'
    },
        {
        id:9,
        img:'/Images/tech-companies/tech-08.webp'
    }
]

const ModernTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
    const carouselRef = useRef<any>(null);
      const [api, setApi] = React.useState<any>(null)

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 2500); // every 2.5s
    return () => clearInterval(interval);
  }, []);

    const chunkArray = (arr:any, size:any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const techChunks = chunkArray(tech, 6);

  return (
    <section className="relative w-full py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full -translate-x-24 translate-y-24"></div>

          <div className="flex items-center relative z-10">
            {/* Left Side - Testimonial Content */}
            <div className='w-full space-y-6'>
              <div className="flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold ">
                  Patient Feedback
                </h2>
                
                
              </div>
              <div className='flex items-start flex-col md:flex-row gap-2 justify-between'>
                <div className='w-full '>
              {/* Client Info */}
              <div className="flex items-center space-x-2">
                <div>
                  <h3 className="text-xl font-bold">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-secondary text-sm">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-secondary text-sm font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
                <span className="text-emerald-300 text-sm font-medium">
                  {currentTestimonial.rating}.0 / 5.0
                </span>
              </div>
</div>
              {/* Testimonial Text */}
              <div className='w-auto'>
              <blockquote className=" text-lg leading-relaxed font-medium relative">
                
                <span className="relative z-10">{currentTestimonial.content}</span>
              </blockquote>
              </div>
</div>
              {/* Bottom Navigation Arrows - Mobile */}
              <div className="flex justify-center space-x-3 mt-8">
                <button
                  onClick={() => handleNavigation('prev')}
                  className="w-12 h-12 bg-white hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 border border-primary"
                >
                  <ChevronLeft className="w-5 h-5 text-primary " />
                </button>
                <button
                  onClick={() => handleNavigation('next')}
                  className="w-12 h-12 bg-white hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 border border-primary"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Right Side - Client Details */}
            {/* <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Tech We are Using
        </h2>
        <div className="hidden lg:flex space-x-3">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-12 h-12 bg-emerald-500 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="w-12 h-12 bg-emerald-500 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600">
         <Carousel
          setApi={setApi}
      ref={carouselRef}
      plugins={[autoplay]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {techChunks.map((chunk, chunkIndex) => (
          <CarouselItem key={chunkIndex}>
            <div className="grid grid-cols-3 gap-4">
              {chunk.map((item:any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-2 flex items-center justify-center aspect-video hover:scale-105 transition-transform duration-300 shadow"
                >
                  <img
                    src={item.img}
                    alt={`Tech ${item.id}`}
                    className="max-h-24 h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
      </div>
    </div> */}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-secondary scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          {/* <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-emerald-500 text-white hover:bg-secondary'
                  : 'bg-slate-600 text-emerald-300 hover:bg-slate-500'
              }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonialsSection;