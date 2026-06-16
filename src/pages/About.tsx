import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

export default function AboutPage() {
  return (
    <>
        <div className="bg-white">

      {/* 🔥 HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <img
          src="/about.jpg"
          alt="About"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold">
          About AB Offshore
        </h1>
      </section>

      {/* 💼 COMPANY INFO */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-blue-600 font-semibold uppercase text-sm tracking-widest">
            Who We Are
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Trusted Offshore Marine Experts
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            AB Offshore Marine Services Limited, established in 2008, is a leading
            offshore marine logistics and vessel chartering company supporting oil
            & gas and maritime industries.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            We have built a strong reputation for reliability, safety, and operational
            excellence, delivering tailored solutions across regional and international markets.
          </p>

        </div>
      </section>

      {/* 📊 STATS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div className="group cursor-pointer transition duration-300 hover:-translate-y-2">
            <h3 className="text-5xl font-bold text-blue-400 
              group-hover:scale-110 transition">
              15+
            </h3>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>

          <div className="group cursor-pointer transition duration-300 hover:-translate-y-2">
            <h3 className="text-5xl font-bold text-blue-400 
              group-hover:scale-110 transition">
              100+
            </h3>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="group cursor-pointer transition duration-300 hover:-translate-y-2">
            <h3 className="text-5xl font-bold text-blue-400 
              group-hover:scale-110 transition">
              24/7
            </h3>
            <p className="text-gray-300 mt-2">Operational Support</p>
          </div>

        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="group bg-white p-8 rounded-xl shadow-md border border-gray-100
            hover:shadow-2xl hover:-translate-y-2 
            transition duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600 
              group-hover:text-blue-700">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To deliver reliable, safe, and efficient offshore marine services
              that exceed client expectations and support sustainable growth
              in the maritime industry.
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white p-8 rounded-xl shadow-md border border-gray-100
            hover:shadow-2xl hover:-translate-y-2 
            transition duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600 
              group-hover:text-blue-700">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To be a leading offshore logistics provider recognized globally for
              excellence, innovation, and commitment to safety and performance.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Want to Work With Us?
        </h2>

        <p className="mb-6 text-blue-100">
          Get in touch with our team for offshore logistics and marine solutions.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
    <Certifications/>
    <Footer/>
    </>

  );
}