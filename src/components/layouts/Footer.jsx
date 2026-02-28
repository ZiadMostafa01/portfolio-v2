import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="relative text-[var(--text-main)]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-1 px-[9%] xl:px-[15%] pb-10">
        <div className="space-y-1 text-center sm:text-start">
          <a
            href="#Home"
            className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-3xl/[1.07] mb-5 font-bold tracking-tight text-transparent md:text-3xl/[1.07]"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="animate-pulse text-gradient w-fit px-1 drop-shadow-[0_0_30px_rgba(192,132,252,0.5)] font-DGAsca inline-block">
              {t("header.firstName")} {t("header.secondName")}
            </span>
          </a>

          <div className="text-xl">Web Developer & Programmer</div>
        </div>
        <div className="">© 2025 Ziad Mostafa. All rights reserved.</div>
      </div>
    </footer>
  );
}
export default Footer;
