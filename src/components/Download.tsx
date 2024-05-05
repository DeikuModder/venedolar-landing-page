import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.webp";
import DownloadableItem from "./DownloadableItem";

const Download = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="download"
      className="flex flex-col justify-center items-center gap-8 min-h-[100dvh] sm:flex-row sm:gap-8 lighterBg"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="bg-[#112e4e] text-[#15d63f] text-4xl p-2 w-[250px] rounded-xl text-center font-bold sm:text-5xl sm:w-fit">
          {t("call-to-action.title")}
        </h3>
        <figure className="aspect-square w-[300px] sm:w-[500px]">
          <img src={Logo} alt="app-ss" className="w-[100%]" />
        </figure>
      </div>

      <div className="flex flex-col gap-4 items-center sm:items-start mb-5">
        <p className="text-2xl sm:text-4xl font-bold w-[320px] sm:w-[400px] text-center sm:text-start">
          {t("call-to-action.text")}
        </p>

        <h3 className="text-xl">{t("call-to-action.downloads")}</h3>

        <ul className="flex flex-col justify-center items-center gap-4 sm:items-start sm:text-xl">
          <DownloadableItem text="Venedolar_1.0.0_x64_en-US.msi | 2.760kb" />
          <DownloadableItem text="Venedolar_1.0.0_x64-setup.exe | 2.335kb" />
        </ul>
      </div>
    </section>
  );
};

export default Download;
