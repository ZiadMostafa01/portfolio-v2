import Marquee from "react-fast-marquee";
import JavaScriptDarkMode from "../../assets/images/skills-icons/JavaScript-Icon-Light.png";
import HtmlDarkMode from "../../assets/images/skills-icons/Html5-Icon-Light.png";
import CSSDarkMode from "../../assets/images/skills-icons/CSS3-Icon-Light.png";
import TailwindDarkMode from "../../assets/images/skills-icons/Tailwind-Icon-Light.png";
import ReactDarkMode from "../../assets/images/skills-icons/React-Icon-Light.png";
import NodeDarkMode from "../../assets/images/skills-icons/Node-Icon-Light.png";
import BootstrapDarkMode from "../../assets/images/skills-icons/Bootstrap-Icon-Light.png";
import MongoDBDarkMode from "../../assets/images/skills-icons/MongoDB-Icon-Light.png";

function BrandSlider() {
  return (
    <div className="relative bg-[var(--bg-dark-primary)] h-24 overflow-hidden ">
    {/* طبقة التدرج للجانب الأيسر */}
    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--bg-dark-primary)] to-transparent"></div>

    {/* طبقة التدرج للجانب الأيمن */}
    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--bg-dark-primary)] to-transparent"></div>
    <Marquee
      speed={100}
      gradient={false} // نعطيل التدرج المدمج
      className="h-full"
    >
      <div className="flex items-center h-full gap-16 px-4">
        <img src={JavaScriptDarkMode} className="h-8 md:h-12 " alt="brand" />
        <img src={HtmlDarkMode} className="h-8 md:h-12 " alt="brand" />
        <img src={CSSDarkMode} className="h-8 md:h-12 " alt="brand" />
        <img src={TailwindDarkMode} className="h-6 md:h-10 " alt="brand" />
        <img src={ReactDarkMode} className="h-8 md:h-12 " alt="brand" />
        <img src={NodeDarkMode} className="h-8 md:h-12 " alt="brand" />
        <img src={BootstrapDarkMode} className="h-8 md:h-12 " alt="brand" />
        {/* <img src={MongoDBDarkMode} className="h-8 md:h-12 " alt="brand" /> */}
      </div>
    </Marquee>
  </div>
  );
}
export default BrandSlider;


