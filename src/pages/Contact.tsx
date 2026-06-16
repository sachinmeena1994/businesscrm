import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

export default function ContactPage() {
  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">

        <img
          src="/contact.jpg"
          alt="Contact"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center animate-fade-up">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-200">
            Reliable offshore logistics & marine services
          </p>
        </div>

      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6 animate-fade-up">

            <h2 className="text-3xl font-bold text-gray-900">
              Contact Information
            </h2>

            <p className="text-gray-600">
              Reach out to us for business inquiries, partnerships,
              or offshore logistics solutions.
            </p>

            {/* INFO ITEMS */}
            <div className="space-y-4 mt-6">

              <div className="flex items-center gap-4">
                <div className="text-blue-600 text-2xl">📞</div>
                <p className="text-gray-700">+234 811 224 4444</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-blue-600 text-2xl">📧</div>
                <p className="text-gray-700">info@aboffshore.ng</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-blue-600 text-2xl">📍</div>
                <p className="text-gray-700">
                  Offshore Base, Lagos, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-blue-600 text-2xl">⏰</div>
                <p className="text-gray-700">
                  Mon - Sat: 9AM - 6PM
                </p>
              </div>

            </div>

            {/* EXTRA TRUST SECTION */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold mb-3 text-blue-600">
                Why Choose Us?
              </h3>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✔ Trusted offshore marine experts</li>
                <li>✔ 24/7 operational support</li>
                <li>✔ Proven industry experience</li>
                <li>✔ Reliable & efficient services</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">

            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send Message
            </h2>

            <form className="grid gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>

              <button className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">

        <h2 className="text-3xl font-bold mb-4 animate-fade-up">
          Let’s Build Something Great Together
        </h2>

        <p className="mb-6 text-blue-100 animate-fade-up [animation-delay:150ms]">
          Our team is ready to support your offshore operations.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition animate-fade-up [animation-delay:300ms]">
          Contact Now
        </button>

      </section>

    <Certifications />
    <Footer />
    </div>
  );
}