import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE - INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-8">
            We provide reliable offshore logistics and marine support services.
            Contact us for business inquiries or partnerships.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700">info@aboffshore.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span className="text-gray-700">
                Offshore Base, Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}