import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navState, setNavState] = useState({
    isScrolled: false,
    activeSection: null,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const otherDropdownRef = useRef(null);
  const navActiveRef = useRef(null);

  const handleHamburgerToggle = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleWindowScroll = () => {
    setNavState((prevState) => ({
      ...prevState,
      isScrolled: window.scrollY > 0,
    }));
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      otherDropdownRef.current &&
      !otherDropdownRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNavClick = (section) => {
    setNavState((prevState) => ({
      ...prevState,
      activeSection: prevState.activeSection === section ? null : section,
    }));
  };

  function NavbarMobile() {
    return (
      <ul
        className={`bg-[#440b0c] ${
          hamburgerOpen
            ? "flex items-center flex-col translate-y-0 transform py-2"
            : "absolute -translate-y-48 -z-10 w-full"
        }`}
      >
        {["home", "about", "contact"].map((section) => (
          <li
            key={section}
            className={`p-2 ${
              navState.activeSection === section
                ? "border-b-2 transform duration-300"
                : ""
            }`}
            ref={navActiveRef}
          >
            <a href={`#${section}`} onClick={() => handleNavClick(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav
      className={`text-white sticky top-0 z-50 w-full ${
        navState.isScrolled && "shadow-md shadow-black"
      }`}
    >
      <div className="bg-[#440b0c] flex justify-between items-center px-5 h-20">
        <div>
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>
        <ul className="lg:flex md:flex hidden gap-4 ">
          {["home", "about", "contact"].map((section) => (
            <li
              key={section}
              className={`p-2 ${
                navState.activeSection === section
                  ? "border-b-2 transform duration-300"
                  : ""
              }`}
              ref={navActiveRef}
            >
              <a href={`#${section}`} onClick={() => handleNavClick(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        {isMobile && (
          <div
            className="cursor-pointer flex flex-col gap-1"
            onClick={handleHamburgerToggle}
            aria-expanded={hamburgerOpen}
          >
            <div
              className={`w-5 h-1 bg-white transition-transform duration-300 ${
                hamburgerOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 bg-white transition-opacity duration-300 ${
                hamburgerOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 bg-white transition-transform duration-300 ${
                hamburgerOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            ></div>
          </div>
        )}
      </div>
      <NavbarMobile />
    </nav>
  );
}

export default Navbar;
