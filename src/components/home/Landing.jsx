import Particles from "../Particles";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
    <section
      id="Home"
      className="min-h-screen pt-[82px] lg:pt-0  flex items-center  relative overflow-hidden "
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="code-grid-bg"></div>
        <Particles />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center  px-8  gap-6  z-10">
        {/* Content Side */}
        <div>
          <div className="font-code text-primary sm:text-xl mb-4 flex items-center gap-2 ">
            <Typewriter
              words={["Hello, I'm Ziad Mostafa"]}
              loop={1} // الجملة تتكتب مرة وخلاص
              cursor
              cursorStyle="|"
              typeSpeed={50} // سرعة الكتابة
            />
          </div>

          <h1 className="hero-name font-code text-3xl sm:text-5xl md:text-7xl font-bold mb-8 text-white">
            <span className="name-prefix text-[#a855f7]">const</span>
            <span className="name-operator text-[#22d3ee] mx-2">=</span>
            <span className="name-value">Developer</span>
            <span className="name-suffix text-primary">;</span>
          </h1>

          <div className="name-value font-code  text-xl sm:text-2xl mb-8">
            <span className=" text-[#94a3b8] mr-2">//</span>
            <span>Full Stack Developer & UI/UX Designer</span>
          </div>

          <p className="text-[#cbd5e1] text-lg mb-12 max-w-xl leading-relaxed">
            Passionate developer creating exceptional digital experiences with
            modern technologies.
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            <a
              href="#Contact"
              className="bg-linear-to-r from-[#c084fc] to-[#6366f1] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
            >
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href="#Projects"
              className="bg-white/5 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
            >
              <span>View Projects</span>
              <i className="fas fa-code ml-2"></i>
            </a>
          </div>
          <div className="flex gap-6">
            {/* {["github", "facebook", "linkedin-in", "whatsapp"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="social-icon w-12 h-12 flex items-center justify-center bg-[#1e293b]/70 border border-[#334155] rounded-xl text-[#cbd5e1] hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))} */}
            <a
              href="https://www.facebook.com/ziad.mostafa.5245961"
              target="_blank"
              className="p-3 rounded-xl backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91V127.42c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H22.89V288h81.36v224h100.17V288z" />
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/ZiadMostafa01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl backdrop-blur-lg border border-gray-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-gray-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-gray-500/50 hover:bg-gradient-to-tr hover:from-gray-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              {/* تأثير اللمعة */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              {/* أيقونة GitHub */}
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
        0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74
        1.21.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95
        0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 3.01-.4
        c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22
        0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27
        0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ziadmostafa-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              {/* تأثير اللمعة */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              {/* أيقونة LinkedIn */}
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.09 108 0 83.5 0 53.8 
  0 24.6 24.09 0 53.84 0c29.7 0 53.78 24.6 53.78 53.8 0 
  29.7-24.08 54.2-53.78 54.2zM447.9 448h-92.4V304.1c0-34.3-.7-78.3-47.7-78.3-47.7 
  0-55 37.2-55 75.6V448h-92.4V148.9h88.6v40.8h1.3c12.3-23.2 
  42.4-47.7 87.2-47.7 93.3 0 110.5 61.4 110.5 141.3V448z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://wa.me/201027797648" // حط رقمك هنا بالكود الدولي (مثلاً 20 لمصر)
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl backdrop-blur-lg border border-emerald-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-emerald-500/50 hover:bg-gradient-to-tr hover:from-emerald-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              {/* تأثير اللمعة (Shiny Effect) باللون الأخضر */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              {/* أيقونة WhatsApp */}
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.2 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
            <div className="absolute inset-[-10%] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(255,107,157,0.2)_0%,transparent_70%)]"></div>
            <div className=" border-[4px] border-[var(--primary)] shadow-[0_0_30px_rgba(192,132,252,0.3)] rounded-full relative w-full group h-full overflow-hidden flex items-center justify-center bg-[#1e293b]/70">
              <div className="text-primary/30 text-8xl">
                <i className="fas fa-code animate-spin-once group-hover:rotate-12 group-hover:scale-120 transition duration-300"></i>
              </div>
            </div>

            {/* Floating Badges */}
            <Badge
              icon="fab fa-react"
              title="React"
              sub="Redux, Router, Hooks"
              classes="top-5 right-3 sm:-right-10"
              delay="0s"
            />

            <Badge
              icon="fab fa-node-js"
              title="Node.js"
              sub="ES6+, TypeScript, jQuery"
              classes="bottom-6 sm:bottom-20 -right-10 sm:-right-16"
              delay="-1s"
            />

            <Badge
              icon="fab fa-js"
              title="JavaScript"
              sub="Express, Socket.io, MongoDB"
              classes="top-1/2 -left-10 sm:-left-20"
              delay="-2s"
            />
          </div>
        </div>
      </div>

      {/* Scroll Mouse */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="scroll-mouse w-8 h-12 border-2 border-[#334155] rounded-2xl flex justify-center p-2">
          <div className="scroll-wheel w-1 h-3 bg-primary rounded-full animate-[scrollWheel_2s_infinite]"></div>
        </div>
        <span className="scroll-text font-code text-sm text-[#94a3b8]">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

// مكون صغير للـ Badges لتقليل تكرار الكود
const Badge = ({ icon, title, sub, classes, delay }) => (
  <div
    className={`floating-badge absolute ${classes} bg-[#1e293b]/70 border border-[#334155] hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] p-4 rounded-2xl flex items-center gap-4 shadow-xl w-[160px] sm:min-w-[200px]  z-20 transition-all duration-300 hover:border-primary`}
    style={{ animationDelay: delay }} // هنا بنتحكم في وقت بداية الحركة
  >
    <i className={`${icon} text-3xl text-primary`}></i>
    <div className="flex flex-col text-left">
      <span className="text-white font-bold text-sm">{title}</span>
      <span className="text-[#94a3b8] text-[10px]">{sub}</span>
    </div>
  </div>
);

export default Landing;
