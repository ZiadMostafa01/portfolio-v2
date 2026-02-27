import { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // لمتابعة السيكشن النشط

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark",
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  // مراقبة السكرول عشان لون الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // منطق بسيط لتحديد السيكشن النشط يدوياً
      const sections = ["Home", "About", "Projects", "Certificates", "Contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
    // هنا ممكن تضيف المنطق الخاص بتغيير لغة الموقع فعلياً (i18n)
  };

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "en");

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "en" ? "ltr" : "rtl";
  };

  useEffect(() => {
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  }, [lang]);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${scrolled ? "bg-[#020617]/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#Home"
          className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-2xl sm:text-3xl font-bold text-transparent"
        >
          <span className="animate-pulse text-purple-500 drop-shadow-[0_0_30px_rgba(192,132,252,0.5)] to-purple-100 font-DGAsca">
            Ziad Mostafa
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-3">
          <Nav />

          <div className="relative hidden md:inline-block text-left">
            {/* الزر الرئيسي */}
            <div
              onClick={toggleDropdown}
              className="text-gray-300 border-white/10 bg-white/5 flex gap-2 items-center px-3 py-3 border rounded-xl cursor-pointer hover:bg-purple-400/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="flex gap-3 text-sm items-center min-w-[50px]">
                {language}
              </span>
              <i
                className={`fa-solid fa-angle-down transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              ></i>
            </div>

            {/* القائمة المنسدلة (Dropdown) */}
            {isOpen && (
              <div className="absolute mt-2 w-full left-0 bg-white/5 border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl">
                <div
                  onClick={() =>
                    selectLanguage(
                      language === "English" ? "Arabic" : "English",
                    )
                  }
                  className="px-4 py-3 text-sm text-gray-300  hover:bg-purple-400/10 hover:text-white cursor-pointer transition-colors"
                >
                  {language === "English" ? "Arabic" : "English"}
                </div>
              </div>
            )}
          </div>
          <button
            onClick={toggleLang}
            className="text-gray-300 border-white/10  bg-white/5 hover:bg-purple-400/10 transition duration-300 p-2 w-10 h-10 xl:w-11 xl:h-11 hidden sm:flex md:hidden justify-center cursor-pointer items-center border rounded-full"
          >
            <span className="flex justify-between items-center w-5 h-5">
              {lang === "en" ? "AR" : "EN"}
            </span>
          </button>
          {/* Theme Toggle */}
          <div
            onClick={() => {
              const newMode = theme === "dark" ? "light" : "dark";
              localStorage.setItem("currentMode", newMode);
              setTheme(newMode);
            }}
            className="text-gray-300 border-white/10  bg-white/5 hover:bg-purple-400/10 transition duration-300 p-2 w-10 h-10 xl:w-11 xl:h-11 hidden sm:flex justify-center cursor-pointer items-center border rounded-full"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z" />
              </svg>
            )}
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative cursor-pointer block lg:hidden p-2 rounded-lg text-gray-300 border border-white/10 hover:bg-purple-400/10  bg-white/5  transition duration-300  w-10 h-10"
          >
            <svg
              viewBox="0 0 448 512"
              className={`absolute inset-0 m-auto w-5 h-5  transition-all duration-300
      ${mobileMenu ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
    `}
              fill="currentColor"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>

            <svg
              viewBox="0 0 352 512"
              className={`absolute inset-0 m-auto w-5 h-5 transition-all duration-300
      ${mobileMenu ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
    `}
              fill="currentColor"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-1/2 -translate-x-1/2  w-[calc(100%-3rem)] bg-[#020617] transition-all duration-300 overflow-hidden ${mobileMenu ? "max-h-screen border-b border-indigo-500/20 border border-t-0 border-white/10 rounded-b-xl " : "max-h-0"}`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <a
            href="#Home"
            onClick={() => setMobileMenu(false)}
            className="text-gray-300 hover:text-indigo-400 py-2 border-b border-white/5"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setMobileMenu(false)}
            className="text-gray-300 hover:text-indigo-400 py-2 border-b border-white/5"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setMobileMenu(false)}
            className="text-gray-300 hover:text-indigo-400 py-2 border-b border-white/5"
          >
            Projects
          </a>
          <a
            href="#Contact"
            onClick={() => setMobileMenu(false)}
            className="text-gray-300 hover:text-indigo-400 py-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
