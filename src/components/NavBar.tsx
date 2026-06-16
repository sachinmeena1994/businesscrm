import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Fleet", path: "/fleet" },
  { name: "Contact", path: "/contact" },
];
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`fixed  left-0 w-full z-50 transition-all duration-300 
  ${scrolled ? "bg-black/70 backdrop-blur-md shadow" : "bg-transparent"}`}
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
<Link to="/" className="text-xl font-bold text-white">
  AB Offshore
</Link>

        {/* Desktop Menu */}
   <ul className="hidden md:flex gap-8 font-medium text-white">
  {navItems.map((item) => (
    <li key={item.name}>
      <Link
        to={item.path}
        className="cursor-pointer hover:text-blue-400 transition"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
{open && (
  <div className="md:hidden bg-black/90 text-white px-6 pb-4">
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="block py-3 border-b border-gray-700 hover:text-blue-400"
        onClick={() => setOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
)}
    </nav>
  );
}