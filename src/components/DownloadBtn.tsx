import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const DownloadBtn = () => {
  const { t } = useTranslation("global");

  return (
    <a
      className="text-3xl sm:text-5xl font-bold w-fit bg-[#15d63f] border-4 border-[#112e4e] p-3 text-[#112e4e] rounded-lg hover:scale-105 transition-transform"
      href="https://download847.mediafire.com/ch4uvsa6ah3gjjSMO5uCi9YD1_VhRclj5vgykASAJXfK8hp8P3IRP5BWOaAKD6yLT-WhLGuFKiN2AA7svHauvpmPC1vofTKq9tmWFa2KAuHzwbktsLV1wDJcM8VCm2C8nAUtfjFRYAGzC-wH_1yky80kyKVb4otgdHusy7bcO6su/8c0jvgkky6qn5p9/Venedolar_v1.0.0.rar"
      target="_blank"
    >
      <FontAwesomeIcon icon={faDownload} /> {t("download")}
    </a>
  );
};

export default DownloadBtn;
