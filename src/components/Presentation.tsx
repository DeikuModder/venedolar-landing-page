import { useTranslation } from "react-i18next";
import AppSS from "../assets/app_screenshot.webp";
import DownloadBtn from "./DownloadBtn";

const Presentation = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="presentation"
      className="p-4 flex flex-col justify-center items-center gap-4 text-center mb-4 sm:flex-row sm:p-8 md:gap-16"
    >
      <div className="bg-[#111] rounded-b-xl md:w-[52%]">
        <figure className=" aspect-video w-[300px] md:w-full">
          <img src={AppSS} alt="venedolar-logo" />
        </figure>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#15d63f]">
          Venedolar
        </h1>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl font-bold sm:text-4xl md:max-w-[500px]">
          {t("presentation.text")}
        </p>
        <p className="tex-xl md:text-2xl font-semibold md:max-w-[500px]">
          {t("presentation.subtext")}
        </p>
        <DownloadBtn />
      </div>
    </section>
  );
};

export default Presentation;
