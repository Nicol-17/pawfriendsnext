import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowOptions(false);
  };

  return (
    <div className="language-container">
      <button onClick={toggleOptions} className="button" >
        <MdLanguage size={24} />
      </button>

      {showOptions && (
        <div className="select-container">
          {[
            { code: "en", label: "English" },
            { code: "es", label: "Español" },
            { code: "fr", label: "Frances" },
            { code: "de", label: "Deutsch" },
          ].map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="select-input"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
