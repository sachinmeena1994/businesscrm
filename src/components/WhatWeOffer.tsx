export default function WhatWeOffer() {
  const features = [
    {
      title: "Proactive Risk Management",
      desc: "We identify and mitigate risks early to ensure smooth offshore operations.",
    },
    {
      title: "24/7 Operational Support",
      desc: "Round-the-clock support ensuring reliability and quick response.",
    },
    {
      title: "Tailored Solutions",
      desc: "Customized maritime solutions for your unique business needs.",
    },
    {
      title: "Cost Efficiency & Transparency",
      desc: "Clear pricing and optimized cost strategies.",
    },
    {
      title: "Cutting-Edge Technology",
      desc: "We use modern maritime tech for efficiency and safety.",
    },
    {
      title: "Continuous Innovation",
      desc: "Constant improvement using latest industry practices.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          What We Offer
        </h2>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            
            <div
              key={index}
              className="group p-6 border rounded-xl bg-white 
              hover:bg-red-600 hover:shadow-xl 
              transition-all duration-300 cursor-pointer"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-blue-600 
                group-hover:text-white transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-200 transition">
                {item.desc}
              </p>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
}