import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  // بنحدد العنصر النشط افتراضياً (0 يعني أول واحد وهو Home)
  const [activeIndex, setActiveIndex] = useState(0);

  // الستايل اللي هيتحكم في الـ Highlight
  const [hoverStyle, setHoverStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 1, // خليه 1 عشان يظهر من أول ثانية
  });
  const { t, i18n } = useTranslation();

  const menuItems = [
    { name: t("header.home"), href: "#Home" },
    { name: t("header.about"), href: "#About" },
    { name: t("header.projects"), href: "#Projects" },
    { name: t("header.certificates"), href: "#Certificates" },
    { name: t("header.contact"), href: "#Contact" },
  ];

  // وظيفة لحساب الأبعاد والمكان بناءً على العنصر
  const updateHighlight = (element) => {
    if (element) {
      const { offsetLeft, offsetWidth } = element;
      setHoverStyle({
        width: offsetWidth,
        transform: `translateX(${offsetLeft}px)`,
        opacity: 1,
      });
    }
  };

  // أول ما الصفحة تحمل، بنخلي التظليل يروح للـ Active Index
  useEffect(() => {
    const activeElement = document.getElementById(`nav-item-${activeIndex}`);
    updateHighlight(activeElement);
  }, [activeIndex]);
  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        // نجيب كل السكاشن اللي ظاهرة
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;

          const index = menuItems.findIndex((item) => item.href === `#${id}`);

          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleMouseEnter = (e) => {
    updateHighlight(e.currentTarget);
  };

  const handleMouseLeave = () => {
    // لما الماوس يخرج، يرجع التظليل للعنصر النشط (Active) بدل ما يختفي
    const activeElement = document.getElementById(`nav-item-${activeIndex}`);
    updateHighlight(activeElement);
  };

  return (
    <nav className="hidden lg:flex justify-center items-center rounded-xl">
      <div
        className="relative hidden md:flex bg-[var(--nav-bg)]/5 border border-[var(--border)] rounded-xl p-1 backdrop-blur-md"
        onMouseLeave={handleMouseLeave}
      >
        {/* المربع البنفسجي المتحرك */}
        <div
          className="absolute top-1 bottom-1 left-1 bg-[var(--primary)]/30 rounded-lg transition-all duration-300 ease-in-out pointer-events-none"
          style={{
            width: `${hoverStyle.width}px`,
            transform: hoverStyle.transform,
            opacity: hoverStyle.opacity,
          }}
        />

        <ul className="flex relative z-10 text-[var(--text-main)] font-medium">
          {menuItems.map((item, index) => (
            <li key={index} id={`nav-item-${index}`}>
              <a
                href={item.href}
                onMouseEnter={handleMouseEnter}
                onClick={() => setActiveIndex(index)}
                className={`block px-6 py-2 cursor-pointer transition-colors duration-200 ${
                  activeIndex === index
                    ? "text-[var(--nav-bg)]"
                    : "hover:text-[var(--nav-bg)]"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
