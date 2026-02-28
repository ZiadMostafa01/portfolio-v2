import cardImage from "../../assets/images/cardImage.png";
import cardImage2 from "../../assets/images/cardImage2.png";
import cardImage3 from "../../assets/images/cardImage3.png";
import cardImage4 from "../../assets/images/cardImage4.png";
import cardImage5 from "../../assets/images/cardImage5.png";
import cardImage6 from "../../assets/images/cardImage6.png";

const checkTools = {
  completed: "bg-green-500 rounded-full text-center font-semibold w-fit px-3",
  underDevelop: "bg-red-500 rounded-full text-center font-semibold w-fit px-3",
};
const tools = "bg-zinc-600 text-center rounded-full px-3";

const myProjects = [
  {
    id: 6,
    imgPath: cardImage6,
    projectTitle: "Karas Veterinary Clinic",
    description:
      "A modern pet care platform developed for a professional company, streamlining access to veterinary clinics and essential pet services.",
    state: checkTools.completed,
    stateName: "Completed",
    skills: ["React.js", "Tailwind CSS 4.1", "JavaScript", "CSS 3"],
    link: "",
    github: "",
  },
  {
    id: 5,
    imgPath: cardImage5,
    projectTitle: "Pawelle Veterinary Clinic",
    description:
      "A modern pet care platform developed for a professional company, streamlining access to veterinary clinics and essential pet services.",
    state: checkTools.completed,
    stateName: "Completed",
    skills: ["React.js", "Tailwind CSS 4.1", "JavaScript", "CSS 3"],
    link: "https://ziadmostafa01.github.io/vet-clinic/",
    github: "https://github.com/ZiadMostafa01/vet-clinic",
  },
  {
    id: 4,
    imgPath: cardImage4,
    projectTitle: "Medical Healthcare",
    description:
      "A smart healthcare platform developed as a graduation project under the Digital Egypt Pioneers Initiative (DEPI), providing accessible and secure medical services anytime, anywhere.",
    state: checkTools.underDevelop,
    stateName: "Under Develop",
    skills: [
      "React.js",
      "Tailwind CSS 4.1",
      "Bootstrap 5",
      "JavaScript",
      "CSS 3",
    ],
    link: "https://teamdepi.github.io/mega/",
    github: "https://github.com/TeamDEPI/mega",
  },
  {
    id: 3,
    imgPath: cardImage3,
    projectTitle: "Taha Fawzi – Personal Portfolio Website",
    description:
      "A fully responsive and dynamic portfolio website I developed for a client, featuring dark/light mode, multi-language support, and a clean, modular code structure.",
    state: checkTools.completed,
    stateName: "Completed",
    skills: ["React.js", "Tailwind CSS 4.1", "Vite", "JavaScript", "CSS 3"],
    link: "https://ziadmostafa01.github.io/Taha-Portfolio/",
    github: "https://github.com/ZiadMostafa01/Taha-Portfolio",
  },
  {
    id: 2,
    imgPath: cardImage2,
    projectTitle: "My Portfolio",
    description:
      "A modern, fully responsive portfolio highlighting my latest web development work, designed to deliver a smooth and immersive experience across all devices.",
    state: checkTools.completed,
    stateName: "Completed",
    skills: ["React.js", "Tailwind CSS 4.1", "JavaScript", "CSS 3"],
    link: "#Home",
    github: "https://github.com/ZiadMostafa01/Portfolio",
  },
  {
    id: 1,
    imgPath: cardImage,
    projectTitle: "Educational Platform",
    description:
      "A modern, responsive educational platform designed for a seamless learning experience across all devices.",
    state: checkTools.completed,
    stateName: "Completed",
    skills: ["React.js", "Tailwind CSS 4.1", "JavaScript", "CSS 3"],
    link: "https://ziadmostafa01.github.io/educational-platform/",
    github: "https://github.com/ZiadMostafa01/educational-platform",
  },
];

function Projects() {
  return (
    <section id="Projects" className="text-[var(--text-main)]">
      <div className="py-20 space-y-24">
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
                My Projects
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
                Here are some of my recent projects that showcase my skills and
                expertise in web development.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-0 px-2 flex flex-wrap justify-center items-start gap-10">
          {myProjects.map((item) => {
            return (
              <div key={item.id} data-aos="zoom-in">
                <div
                  key={item.projectTitle}
                  className="bg-[var(--bg-card)] border hover:border-cyan-500 transition duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] border-[var(--border)] rounded-lg w-full max-w-[460px]"
                >
                  <div className="">
                    <img
                      src={item.imgPath}
                      className="rounded-t-lg w-full"
                      alt=""
                    />
                    <div className="px-7 py-6">
                      <div className="mb-5">
                        <h1 className="font-bold">{item.projectTitle}</h1>
                        <p>{item.description}</p>
                      </div>

                      <div className="space-y-5 mb-6">
                        <div className={item.state}>
                          <span>{item.stateName}</span>
                        </div>
                        <ul className="flex gap-3 flex-wrap ">
                          {item.skills.map((skill, index) => (
                            <li key={index} className={tools}>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-zinc-700 h-[1px] mb-3"></div>

                      <div className="flex justify-between">
                        <a
                          href={item.link}
                          target="_blank"
                          className="space-x-2 hover:text-cyan-600 transition duration-300"
                        >
                          <i className="fa-solid fa-up-right-from-square"></i>
                          <span className="text-lg font-bold">
                            Live Project
                          </span>
                        </a>
                        <a
                          href={item.github}
                          className="text-3xl  hover:text-cyan-600 transition duration-300"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Projects;
