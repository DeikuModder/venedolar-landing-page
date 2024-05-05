import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadableItem = ({ text }: { text: string }) => {
  return (
    <li className="border-b border-black">
      <FontAwesomeIcon icon={faDownload} />{" "}
      <a
        href="https://www.mediafire.com/file/w1vk07921vyctst/Venedolar_1.0.0_x64_en-US.msi/file"
        target="_blank"
      >
        {text}
      </a>
    </li>
  );
};

export default DownloadableItem;
