import { Ship, Shield, Users, Anchor } from "lucide-react";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";


const services = [
  {
    title: "Guards Embarkation",
    desc: "Highly trained Nigerian Naval security personnel ensuring safety through surveillance and intervention.",
    icon: Shield,
    tag: "Security",
  },
  {
    title: "Security Escort Vessels",
    desc: "Fast and secure vessels providing protection for maritime assets.",
    icon: Ship,
    tag: "Security",
  },
  {
    title: "Tugs & Terminal Support",
    desc: "Ensuring smooth port operations with line handling and supply delivery.",
    icon: Anchor,
    tag: "Logistics",
  },
  {
    title: "Crew Boats",
    desc: "Efficient transportation and logistics support for offshore personnel.",
    icon: Users,
    tag: "Transport",
  },
  {
    title: "Platform Supply Vessels",
    desc: "Advanced logistics vessels supporting offshore platforms.",
    icon: Ship,
    tag: "Logistics",
  },
  {
    title: "Diving Support Vessels",
    desc: "Reliable support base for underwater operations and subsea exploration.",
    icon: Anchor,
    tag: "Support",
  },
];

export default function ServicesPage() {
  return (
    <div>

      {/* 🔥 HERO */}
      <section className="relative h-[40vh] flex items-center justify-center text-white">
        <img
          src="/services.jpg"
          alt="Services"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
      </section>

      {/* 🔥 INTRO */}
 <section className="py-24 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-3xl mx-auto px-6 text-center">

    {/* Tag */}
    <span className="text-blue-600 font-semibold uppercase text-sm tracking-widest 
    animate-fade-up">
      Our Services
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 
    animate-fade-up [animation-delay:150ms]">
      What We Do
    </h2>

    {/* Divider */}
    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 
    animate-fade-up [animation-delay:300ms]"></div>

    {/* Paragraph */}
    <p className="text-gray-600 text-lg leading-relaxed 
    animate-fade-up [animation-delay:450ms]">
      Explore a world of tailored offshore solutions. We deliver excellence
      through innovation, security, and operational efficiency.
    </p>

  </div>
</section>

      {/* 🔥 SERVICES GRID */}
<section className="py-16 bg-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow 
                hover:bg-red-600 hover:text-white 
                hover:-translate-y-2 transition duration-300 relative overflow-hidden"
              >

                {/* TAG */}
                <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded 
                  group-hover:bg-white group-hover:text-red-600 transition">
                  {s.tag}
                </span>

                {/* ICON */}
                <Icon
                  size={40}
                  className="text-blue-600 mb-4 
                  group-hover:text-white transition"
                />

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 group-hover:text-gray-200">
                  {s.desc}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Trusted Expertise
              </h3>
              <p className="text-gray-600">
                Over a decade of offshore experience and proven reliability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Always available to ensure smooth operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Strict adherence to global maritime safety standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 STATS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 text-center gap-8">

          <div>
            <h3 className="text-4xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600">Vessels Managed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need Custom Offshore Solutions?
        </h2>

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
          <Certifications />
          <Footer />
    </div>
  );
}