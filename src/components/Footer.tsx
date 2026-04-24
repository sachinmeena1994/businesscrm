import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-bold mb-4">AB Offshore</h3>
          <p className="text-gray-400">
            Offshore marine logistics and vessel chartering company providing
            reliable maritime services.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Fleet</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Lagos, Nigeria</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+234 811 224 4444</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@aboffshore.ng</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © 2026 AB Offshore Marine Services Limited
      </div>
    </footer>
  );
}