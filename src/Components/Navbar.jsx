import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [windowSroll, setWindowSroll] = useState(false);
  const [navBgActive, setNavBgActive] = useState(null);
  const otherDropdownRef = useRef(null);
  const navActiveRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [humburger, setHumburger] = useState(false);

  const handleHumburger = () => {
    setHumburger(!humburger);
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 0) {
      setWindowSroll(true);
    } else {
      setWindowSroll(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function NavbarMobile() {
    return (
      <ul
        className={` ${
          humburger
            ? "flex items-center flex-col  translate-y-0 transform py-2"
            : "flex items-center flex-col absolute -translate-y-48 -z-10 w-full"
        } ${windowSroll ? "text-[#440b0c]" : "text-white"}`}
      >
        <li
          className={
            navBgActive === "home"
              ? "border-b-2 transform duration-300 p-2"
              : "p-2"
          }
          ref={navActiveRef}
        >
          <a href="#home" onClick={() => handleNavClick("home")}>
            Home
          </a>
        </li>
        <li
          className={
            navBgActive === "about"
              ? "border-b-2 transform duration-300 p-2"
              : "p-2"
          }
          ref={navActiveRef}
        >
          <a href="#about" onClick={() => handleNavClick("about")}>
            About
          </a>
        </li>
        <li
          className={
            navBgActive === "contact"
              ? "border-b-2 transform duration-300 p-2"
              : "p-2"
          }
        >
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="cursor-pointer"
            ref={navActiveRef}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        otherDropdownRef.current &&
        !otherDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNavClick = (section) => {
    setNavBgActive((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <nav
      className={`text-white sticky top-0 z-50 w-full ${
        windowSroll ? "shadow-md shadow-black bg-[#ffffffde]" : "bg-[#440b0c]"
      }`}
    >
      <div className=" flex justify-between items-center px-5 h-20">
        <a href="/">
          {windowSroll ? (
            <img
              src="/logo-warna.png"
              alt="logo"
              className="h-10 drop-shadow-md"
            />
          ) : (
            <img src="/logo.png" alt="logo" className="h-10 drop-shadow-md" />
          )}
        </a>
        <ul className="lg:flex md:flex hidden gap-4 ">
          <li
            className={
              navBgActive === "home"
                ? "border-b-2 transform duration-300 p-2"
                : "p-2"
            }
            ref={navActiveRef}
          >
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
          </li>
          <li
            className={
              navBgActive === "about"
                ? "border-b-2 transform duration-300 p-2"
                : "p-2"
            }
            ref={navActiveRef}
          >
            <a href="#about" onClick={() => handleNavClick("about")}>
              About
            </a>
          </li>
          <li
            className={
              navBgActive === "contact"
                ? "border-b-2 transform duration-300 p-2"
                : "p-2"
            }
          >
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer"
              ref={navActiveRef}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* humburger */}
        {isMobile && (
          <div
            className={`cursor-pointer ${
              humburger ? "" : "gap-1 flex flex-col"
            }`}
            onClick={handleHumburger}
          >
            <div
              className={`w-5 h-1 ${
                windowSroll ? "bg-[#440b0c]" : "bg-white"
              }  transition-transform duration-300 ${
                humburger ? "rotate-45 translate-y-[5px]" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 ${
                windowSroll ? "bg-[#ef5023]" : "bg-white"
              } transition-transform duration-300 ${
                humburger ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 ${
                windowSroll ? "bg-[#440b0c]" : "bg-white"
              } transition-transform duration-300 ${
                humburger ? "-rotate-45 -translate-y-[3px]" : ""
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
