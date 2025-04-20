import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuView, setMenuView] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isPointingAtTop, setIsPointingAtTop] = useState(false);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Mouse top area hover detection
  useEffect(() => {
    const handleMouseMove = (e) => {
      const topAreaHeight = 50;
      setIsPointingAtTop(e.clientY <= topAreaHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  return (
    <header
      className={`padding-x py-4 fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out shadow-md bg-white/90 backdrop-blur-sm 
      ${scrollDirection === "down" && !isPointingAtTop ? "-translate-y-full" : "translate-y-0"}`}>
      <nav className="max-container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" aria-label="Home">
          <img src={headerLogo} alt="Logo" className="w-[130px] h-auto" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-10 text-lg font-medium text-slate-600">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`hover:text-coral-red transition-colors duration-200 ${
                  activeLink === item.href ? "text-coral-red font-semibold" : ""
                }`}
              >
                {item.label === "Product" ? "Services" : item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
            aria-label="Toggle menu"
          >
            <span className="w-full h-1 bg-slate-600 rounded transform transition-all duration-300 ease-in-out origin-center" />
            <span className="w-full h-1 bg-slate-600 rounded transform transition-all duration-300 ease-in-out origin-center" />
            <span className="w-full h-1 bg-slate-600 rounded transform transition-all duration-300 ease-in-out origin-center" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute right-4 top-[70px] w-48 p-5 rounded-xl bg-white shadow-2xl transition-all duration-300 z-40
          ${menuView ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-slate-600">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                    toggleMenu();
                  }}
                  className={`block transition-colors duration-200 hover:text-coral-red ${
                    activeLink === item.href ? "text-coral-red font-semibold" : ""
                  }`}
                >
                  {item.label === "Product" ? "Services" : item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
