import React from 'react';


const TechCompanies = () => {
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

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...tech, ...tech];

  return (
    <section className="w-full bg-gray-50 py-4 md:py-16 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Tech We Are Using
          </h2>
          {/* <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            We want dental care to be stress-free, not stressful. That’s why we accept most dental insurance plans-including Medicaid-and help you maximize your benefits. For patients without insurance, our flexible financing options and budget-friendly specials make it easier to get the treatment you need.
          </p> */}
        </div>

        {/* Auto-scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="scroll-track flex animate-scroll-horizontal">
            {duplicatedLogos.map((insurance, index) => (
              <div
                key={`${insurance.id}-${index}`}
                className="flex-shrink-0 mx-3 md:mx-8 flex items-center justify-center h-16 w-32 md:h-24 md:w-48"
              >
                <img
                  src={insurance.img}
                  alt='Tech Company Logo'
                  className="max-h-16 max-w-full object-contain hover:grayscale-0 transition-all duration-300 hover:opacity-100"
                />


















              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom CSS for animation */}
       <style jsx>{`
         .scroll-track {
      width: fit-content;
    }
      @keyframes scroll-horizontal {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll-horizontal {
      animation: scroll-horizontal 60s linear infinite;
    }

    .animate-scroll-horizontal:hover {
      animation-play-state: paused;
    }
  `}</style>
    </section>
  );
};
export default TechCompanies;