import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadableItem = ({ text, url }: { text: string; url: string }) => {
  return (
    <li className="border-b border-black hover:text-[#15d63f]">
      <FontAwesomeIcon icon={faDownload} />{" "}
      <a href={url} target="_blank">
        {text}
      </a>
    </li>
  );
};

export default DownloadableItem;
