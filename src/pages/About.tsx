export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        
        <img
          src="/about.jpg"
          alt="About Banner"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold">
          About AB Offshore
        </h1>
      </section>

      {/* 💼 COMPANY INFO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          AB Offshore Marine Services Limited, established in 2008, is a leading
          offshore marine logistics and vessel chartering company. We provide
          specialized support services for offshore operations in the oil and gas
          and maritime industries.
        </p>

        <p className="text-gray-600 leading-relaxed">
          With a strong reputation for reliability, safety, and operational
          excellence, we deliver tailored solutions that meet the evolving needs
          of our clients across the maritime sector.
        </p>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          
          <div>
            <h3 className="text-4xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 mt-2">Operational Support</p>
          </div>

        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed">
            To deliver reliable, safe, and efficient offshore marine services
            that exceed client expectations and support sustainable growth in
            the maritime industry.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our Vision
          </h3>

          <p className="text-gray-600 leading-relaxed">
            To be a leading offshore logistics provider recognized globally for
            excellence, innovation, and commitment to safety and performance.
          </p>
        </div>

      </section>

    </div>
  );
}