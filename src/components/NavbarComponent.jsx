import { useState, useEffect } from "react";

function NavbarComponent() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false); // State untuk mengontrol visibilitas nav

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggerHeight = 0;

      if (window.scrollY > scrollTriggerHeight) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavVisibility = () => {
    setIsNavHidden(!isNavHidden);
  };

  const hamburgerClass = !isHamburgerActive ? "hamburger-active" : "";
  const navbarClass = isNavbarFixed ? "navbar-fixed" : "";
  const navClass = isNavHidden ? "hidden" : "";

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${navbarClass}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Hafizh Athallah Y.
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 ${hamburgerClass} lg:hidden`}
              onClick={() => {
                toggleHamburger();
                toggleNavVisibility();
              }}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line duration-300 ease-in-out"></span>
              <span className="hamburger-line duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={`${navClass} absolute py-5 mt-1 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              {isNavHidden ? null : (
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarComponent;
