import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const DownloadBtn = () => {
  const { t } = useTranslation("global");

  return (
    <a
      className="text-3xl sm:text-5xl font-bold w-fit bg-[#15d63f] border-4 border-[#112e4e] p-3 text-[#112e4e] rounded-lg hover:scale-105 transition-transform"
      href="#download"
    >
      <FontAwesomeIcon icon={faDownload} /> {t("download")}
    </a>
  );
};

export default DownloadBtn;
