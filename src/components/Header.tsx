import { useState } from "react";
import Logo from "../assets/logo.webp";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import {
  faDownload,
  faHome,
  faToolbox,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const { t } = useTranslation("global");

  return (
    <header className=" bg-neutral-900 h-[90px] p-2 text-neutral-50 flex">
      <div className="flex flex-col justify-center items-start w-[20%] h-[100%]">
        <figure className="w-16">
          <img className="w-[100%]" src={Logo} alt="Venedolar-logo" />
        </figure>
      </div>
      <div className="w-[80%] flex justify-end items-center">
        <button className="sm:hidden text-4xl" onClick={() => setDisplay(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className={`${
            display
              ? "translate-x-0 opacity-100"
              : "translate-x-[200px] opacity-0"
          } transition duration-300 ease-in-out transform
           fixed top-0 right-0 h-[100vh] w-[200px] p-6 sm:flex sm:justify-end sm:p-0 sm:translate-x-0 sm:opacity-100 sm:static sm:h-[100%] sm:w-[100%] bg-neutral-800 sm:bg-transparent z-50`}
        >
          <button
            className="sm:hidden text-2xl font-bold"
            onClick={() => setDisplay(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <ul className="text-xl font-bold flex flex-col mt-4 sm:mt-0 sm:text-2xl sm:flex-row sm:items-center sm:justify-end gap-8 ">
            <li className=" p-2 rounded-xl">
              <a href="#presentation">
                <FontAwesomeIcon icon={faHome} />{" "}
                {t("header.presentation-link")}
              </a>
            </li>

            <li className=" p-2 rounded-xl">
              <a href="#features">
                <FontAwesomeIcon icon={faToolbox} /> {t("header.features-link")}
              </a>
            </li>

            <li className="border-2 border-[#112e4e] text-[#112e4e] bg-[#15d63f] p-2 rounded-xl">
              <a href="#download">
                <FontAwesomeIcon icon={faDownload} />{" "}
                {t("header.download-link")}
              </a>
            </li>

            <LanguageSelector />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
