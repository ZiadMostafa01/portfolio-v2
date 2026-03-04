import Marquee from "react-fast-marquee";
import { useTheme } from "../../context/ThemeContext"; // تأكد من المسار الصحيح للـ Hook

// استيراد صور الدارك
import JavaScriptDark from "../../assets/images/skills-icons/JavaScript-Icon-Light.png";
import HtmlDark from "../../assets/images/skills-icons/Html5-Icon-Light.png";
import CSSDark from "../../assets/images/skills-icons/CSS3-Icon-Light.png";
import TailwindDark from "../../assets/images/skills-icons/Tailwind-Icon-Light.png";
import ReactDark from "../../assets/images/skills-icons/React-Icon-Light.png";
import NodeDark from "../../assets/images/skills-icons/Node-Icon-Light.png";
import BootstrapDark from "../../assets/images/skills-icons/Bootstrap-Icon-Light.png";
import MongoDBDark from "../../assets/images/skills-icons/MongoDB-Icon-Light.png";

// استيراد صور اللايت (مثال)
import JavaScriptLight from "../../assets/images/skills-icons/JavaScript-Icon-Dark.png";
import HtmlLight from "../../assets/images/skills-icons/Html5-Icon-Dark.png";
import CSSLight from "../../assets/images/skills-icons/CSS3-Icon-Dark.png";
import TailwindLight from "../../assets/images/skills-icons/Tailwind-Icon-Dark.png";
import ReactLight from "../../assets/images/skills-icons/React-Icon-Dark.png";
import NodeLight from "../../assets/images/skills-icons/Node-Icon-Dark.png";
// import BootstrapLight from "../../assets/images/skills-icons/Bootstrap-Icon-Dark.png";
// import MongoDBLight from "../../assets/images/skills-icons/MongoDB-Icon-Dark.png";
function BrandSlider() {
  const { theme } = useTheme();

  // تنظيم البيانات في مصفوفة لسهولة التحكم
  const skills = [
    { id: 1, dark: JavaScriptDark, light: JavaScriptLight, name: "JS" },
    { id: 2, dark: HtmlDark, light: HtmlLight, name: "HTML" },
    { id: 3, dark: CSSDark, light: CSSLight, name: "HTML" },
    { id: 4, dark: TailwindDark, light: TailwindLight, name: "HTML" },
    { id: 5, dark: ReactDark, light: ReactLight, name: "HTML" },
    { id: 6, dark: NodeDark, light: NodeLight, name: "HTML" },
    { id: 7, dark: BootstrapDark, light: BootstrapDark, name: "HTML" },
    { id: 8, dark: MongoDBDark, light: MongoDBDark, name: "HTML" },
    // أضف الباقي هنا بنفس النمط
  ];

  return (
    <div className="relative bg-white dark:bg-[var(--bg-dark-primary)] h-24 transition-colors duration-300 overflow-hidden">
      {/* طبقة التدرج - تتغير بناءً على الثيم */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[var(--bg-dark-primary)] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[var(--bg-dark-primary)] to-transparent"></div>

      <Marquee speed={100} gradient={false} className="h-full">
        <div className="flex items-center h-full gap-16 px-4">
          {skills.map((skill) => (
            <img
              key={skill.id}
              // هنا بنختار الصورة بناءً على قيمة الـ theme من الـ Context
              src={theme === "dark" ? skill.dark : skill.light}
              className="h-8 md:h-12 transition-opacity duration-300"
              alt={skill.name}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandSlider;
