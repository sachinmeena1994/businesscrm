export default function Certifications() {
  const logos = [
    { src: "/certs/logo1.png", name: "BIMCO" },
    { src: "/certs/logo2.svg", name: "DUNS" },
    { src: "/certs/logo3.svg", name: "IMCA" },
    { src: "/certs/logo4.png", name: "ISO Certified" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Certifications & Membership
        </h2>

        <p className="text-gray-600 mb-12">
          We are certified and accredited according to all relevant bodies and standards.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            
            <div
              key={index}
              className="group flex flex-col items-center justify-center transition-all duration-300"
            >
              {/* Logo */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 object-contain transition-all duration-300 
                group-hover:scale-110 group-hover:-translate-y-2"
              />

              {/* Name (hidden → visible on hover) */}
              <p className="mt-3 text-sm text-gray-700 opacity-0 
                group-hover:opacity-100 transition duration-300">
                {logo.name}
              </p>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}