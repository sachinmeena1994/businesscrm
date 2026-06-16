import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

export default function FleetPage() {
  const fleet = [
    {
      name: "Line Handling Tug",
      desc: "A specialized vessel designed for towing offshore structures and handling anchors.",
      specs: "High power towing • Anchor handling • Offshore maneuvering",
      image: "/fleet1.jpg",
    },
    {
      name: "Fast Support Intervention Vessel",
      desc: "A high-speed vessel designed for rapid response and emergency offshore support.",
      specs: "Rapid response • Emergency support • Rescue operations",
      image: "/fleet2.jpg",
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-white">
        <img
          src="/fleet-banner.jpg"
          alt="Fleet"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold animate-fade-up">
          Our Fleet
        </h1>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <span className="text-blue-600 font-semibold uppercase text-sm tracking-widest animate-fade-up">
            Our Fleet
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 animate-fade-up [animation-delay:150ms]">
            Precision, Power & Reliability
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 animate-fade-up [animation-delay:300ms]"></div>

          <p className="text-gray-600 text-lg leading-relaxed animate-fade-up [animation-delay:450ms]">
            Embark on a journey with our exceptional fleet designed to support offshore operations with efficiency and safety.
          </p>

        </div>
      </section>

      {/* 🔥 FLEET CARDS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          {fleet.map((v, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md overflow-hidden 
              md:grid md:grid-cols-2 
              hover:shadow-2xl hover:-translate-y-2 
              transition duration-300 
              animate-fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >

              {/* IMAGE */}
              <div className="h-64 md:h-full overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">

                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  {v.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {v.desc}
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  {v.specs}
                </div>

                <button className="self-start px-5 py-2 border border-blue-600 text-blue-600 rounded 
                  hover:bg-blue-600 hover:text-white transition">
                  View Specs
                </button>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4 animate-fade-up">
          Need a Custom Fleet Solution?
        </h2>

        <p className="mb-6 text-blue-100 animate-fade-up [animation-delay:150ms]">
          Contact us to discuss your offshore vessel requirements.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition animate-fade-up [animation-delay:300ms]">
          Contact Us
        </button>
      </section>
<Certifications />
<Footer />
    </div>
  );
}