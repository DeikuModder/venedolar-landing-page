import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation("global");

  return (
    <select
      defaultValue={window.localStorage.getItem("lang") || "es"}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        window.localStorage.setItem("lang", e.target.value);
      }}
      className="text-black font-bold w-fit"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSelector;
