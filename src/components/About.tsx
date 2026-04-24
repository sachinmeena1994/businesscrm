import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative group">
          <img
            src="/about.jpg"
            alt="About"
            className="rounded-xl shadow-xl w-full h-[450px] object-cover"
          />

          {/* Overlay Caption Card */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-sm text-gray-600">
              Since 2008
            </p>
            <h3 className="font-semibold text-gray-800">
              Trusted Offshore Marine Experts
            </h3>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6 leading-tight">
            Delivering Reliable Offshore Marine Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We specialize in offshore marine logistics, providing safe and
            efficient vessel operations, crew transportation, and support
            services tailored for the oil & gas industry.
          </p>

          <p className="text-gray-600 mb-6">
            Our commitment to safety, innovation, and operational excellence
            ensures that every project is executed with precision and reliability.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}