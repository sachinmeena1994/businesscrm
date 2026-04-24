import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhatWeOffer from "../components/WhatWeOffer";
import Fleet from "../components/Fleet";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <WhatWeOffer />
      <Fleet />
      <Certifications/>
      <Contact />
      <Footer />
    </div>
  );
}