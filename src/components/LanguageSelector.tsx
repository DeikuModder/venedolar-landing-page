import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    window.localStorage.getItem("lang") || "es"
  );

  // Define available languages with their flags and codes
  const languages = [
    { code: "es", flag: "./venFlag.webp", label: "ES" },
    { code: "en", flag: "./usaFlag.svg", label: "EN" },
  ];

  // Handle language change
  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    window.localStorage.setItem("lang", code);
    setSelectedLanguage(code);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Selected Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src={languages.find((lang) => lang.code === selectedLanguage)?.flag}
          alt={`${selectedLanguage} flag`}
          className="w-6 h-4 object-cover"
        />
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-fit bg-neutral-900 border border-gray-300 rounded-md shadow-lg overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center gap-2 w-full px-4 py-2 text-left transition-colors hover:bg-neutral-700 focus:outline-none"
            >
              <img
                src={language.flag}
                alt={`${language.code} flag`}
                className="w-6 h-4 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
