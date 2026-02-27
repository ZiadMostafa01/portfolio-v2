import personalPhoto from "../assets/images/personalphoto.png";
import BrandSlider from "./Marquee";

const mySkills = [
  "React.js",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "HTML",
  "CSS",
  "C++",
  "VS Code",
  "Git",
  "GitHub",
  "Adobe Photoshop",
  "Microsoft Office",
  "Google Drive",
  "Problem Solving",
  "AI Tools",
];
function About() {
  return (
    <section
      id="About"
      className=" text-[var(--text-main-dark)] py-10"
    >
      <div
        data-aos="fade-up"
        className="relative mx-auto mt-16 max-w-full pt-10 lg:px-8"
      >
        {/* LightEffect */}
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"
        ></div>
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-10 transform-gpu 
            [background:conic-gradient(from_90deg_at_50%_50%,transparent_50%,transparent_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] 
            md:max-w-[600px]"
        ></div>
        <div className="relative isolate">
 
          {/* Info */}
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title-dark)]">
              About Me
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col relative z-0 xl:flex-row justify-between gap-10 space-y-20 py-12 md:px-3 lg:px-20 xl:px-5 2xl:px-36">
        {/* Left-section */}
        <div className="flex flex-col md:flex-row text-center md:text-start justify-between items-center space-y-16">
          <div
            data-aos="fade-up"
            className="w-full md:w-[60%] rounded-2xl text-xl px-5 space-y-6 tracking-wide leading-9"
          >
            <p>
              Hi! I’m{" "}
              <span className="animate-pulse text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] to-blue-300 font-DGAsca">
                Ziad Mostafa
              </span>
              , a Frontend Developer passionate about building interactive and
              responsive web applications. I specialize in React, Tailwind CSS,
              and modern web development tools, creating clean, efficient, and
              user-friendly interfaces that bring ideas to life.
            </p>
            <p>
              I enjoy turning concepts into functional designs, learning new
              technologies, and continuously improving my skills to stay
              up-to-date with the latest trends in web development. My goal is
              to craft engaging digital experiences that make a real impact on
              users and contribute to meaningful projects that solve real-world
              problems.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-72 md:-translate-y-10 xl:-translate-10 mx-auto md:mx-0"
          >
            <img src={personalPhoto} alt="" />
          </div>
        </div>

        {/* Right-section */}

        <div className="space-y-5 mx-auto xl:mx-0 px-5 md:px-0">
          <div data-aos="fade-right" data-aos-duration="1000">
            {" "}
            <div className="bg-[var(--bg-card-dark)] space-y-5 border border-zinc-700 p-10 xl:w-[450px] rounded-2xl   hover:border-cyan-500 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]">
              <h2 className="font-bold text-2xl">Experience</h2>

              <div className="relative border-l-2 border-gray-300 pl-6">
                <div className="mb-10">
                  <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-indigo-600 border-2 border-white"></div>
                  <h3 className="text-xl font-semibold">
                    Frontend Developer - DEPI
                  </h3>
                  <span className="text-sm">2024 – Present</span>
                  <p className="mt-2">
                    Built responsive web apps using React & Tailwind. Worked on
                    multiple projects in DEPI initiative.
                  </p>
                </div>

                <div>
                  <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-indigo-600 border-2 border-white"></div>
                  <h3 className="text-xl font-semibold">Personal Projects</h3>
                  <span className="text-sm">2022 – 2023</span>
                  <p className="mt-2">
                    Created side projects to practice React, Tailwind, and REST
                    API integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            {" "}
            <div className="bg-[var(--bg-card-dark)] space-y-2 border border-zinc-700 p-10 xl:w-[450px] rounded-2xl  hover:border-cyan-500 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]">
              <h2 className="font-bold text-2xl">Education</h2>
              <div>
                <h3>Fayoum University | 2024 - present</h3>
                <h3>Faculty of Computing and Artificial Intelligence</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-[var(--bg-card-dark)] border space-y-2  border-zinc-700 py-5 px-10 xl:w-[450px] rounded-2xl  hover:border-cyan-500 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]">
              <h2 className="font-bold text-2xl">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {mySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-zinc-700  px-2 rounded-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BrandSlider */}
      <div className="xl:hidden">
        <BrandSlider />
      </div>

      <div className="absolute xl:left-10 2xl:left-40 -mt-40 xl:w-[59%] 2xl:w-[50%] hidden xl:flex">
        <BrandSlider />
      </div>

      {/* BackgroundEffect */}
      <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20"
          style={{
            clipPath:
              "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
          }}
        ></div>
      </div>
    </section>
  );
}
export default About;
