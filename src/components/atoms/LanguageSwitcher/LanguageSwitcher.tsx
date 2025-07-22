'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdLanguage } from "react-icons/md";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const changeLanguage = (lang: string) => {
    
    const segments = pathname.split('/');
    segments[1] = lang; 
    const newPath = segments.join('/');
    router.push(newPath);
    setShowOptions(false);
  };

  return (
    <div className="relative inline-block ">
      <button onClick={toggleOptions} className="text-black cursor-pointer border-none hover:bg-[#43bb6f] bg-transparent rounded-full p-2 hover:text-white">
        <MdLanguage size={24} />
      </button>

      {showOptions && (
        <div className="absolute top-4 right-0 border border-gray-300 rounded-md shadow-md z-10 text-black text-chewy  cursor-pointer "> 
          {[
            { code: "en", label: "English" },
            { code: "es", label: "Español" },
            { code: "fr", label: "Français" },
            { code: "de", label: "Deutsch" },
          ].map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`select-input ${currentLocale === lang.code ? 'font-bold' : ''}`}
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
