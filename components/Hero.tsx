// components/Hero.tsx
export default function Hero() {
    return (
      <section className="bg-nile-blue text-white py-10 px-6 relative overflow-hidden">
        {/* White Circle on the left */}
        <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-blue-400 rounded-full z-0 flex items-center justify-center">
          {/* Title inside the circle with handwriting font */}
          <h1
            className="text-2xl md:text-4xl font-bold text-blue-900 z-10 text-center px-4"
            style={{ fontFamily: "'Wallpoet', cursive" }}
          >
            EMPOWERING COMMUNITIES FOR SUSTAINABLE WELLNESS
          </h1>
        </div>
  
        {/* Content (outside circle) */}
        <div className="relative z-10 text-white mt-[22rem] md:mt-56 py-10 text-center">
          <p className="max-w-xl mx-auto mt-10 mb-6 px-4">
            Transforming healthcare systems and strengthening community resilience in South Sudan.
          </p>
  
          <div className="flex justify-center gap-4 flex-wrap px-4">
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold">
              Learn More
            </button>
            <button className="border border-white px-6 py-2 cursor-pointer rounded-full">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  