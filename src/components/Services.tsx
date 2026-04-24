import { Ship, Shield, Users, Anchor } from "lucide-react";
import { useHomeData } from "../hooks/useHomeData";

export default function Services() {
  const data = useHomeData();

  if (!data) return null;

  // 🔥 Map titles to icons (important)
  const iconMap: any = {
    "Security Escort": Shield,
    "Crew Boats": Users,
    "Supply Vessels": Ship,
    "Marine Support": Anchor,
  };

  return (
    <section className="py-20 bg-gray-100">
      
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {data.services.map((s: any, i: number) => {
          const Icon = iconMap[s.title] || Ship; // fallback

          return (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow 
              hover:shadow-xl hover:-translate-y-2 
              transition duration-300"
            >
              <Icon size={40} className="text-blue-600 mb-4" />

              <h3 className="text-lg font-semibold">
                {s.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {s.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}