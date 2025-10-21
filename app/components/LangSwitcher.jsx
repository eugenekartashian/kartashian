'use client';

import { useState, useEffect } from "react";
import { changeLanguage } from "@/lib/i18n";
import i18n from "i18next";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ua", label: "Українська", flag: "🇺🇦" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

const LangSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") || i18n.language;
      setCurrentLang(savedLang);
    }
  }, []);

  const handleChangeLanguage = (locale) => {
    changeLanguage(locale);
    setCurrentLang(locale);
    setMenuOpen(false);
  };
  
  // useEffect(() => {
  //   if (typeof window !== "undefined" && i18n) {
  //     const savedLang = localStorage.getItem("language") || "en";
  //     i18n.changeLanguage(savedLang);
  //     setCurrentLang(savedLang);
  //   }
  // }, []);

  // const changeLanguage = (locale) => {
  //   if (typeof window !== "undefined" && i18n) {
  //     localStorage.setItem("language", locale);
  //     i18n.changeLanguage(locale);
  //   }
  //   setCurrentLang(locale);
  //   setMenuOpen(false);
  // };

  return (
    <div className="relative">

        <button onClick={() => setMenuOpen(!menuOpen)}
          className='flex gap-2 hover:-translate-y-0.5 duration-500'>
          <span className='text-[1.75rem] relative top-0.5 cursor-pointer'>{languages.find((lang) => lang.code === currentLang)?.flag}</span>
        </button> 

      {menuOpen && (
        <div className="absolute -left-20 top-10 mt-2 w-40 bg-light-theme border shadow-md">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleChangeLanguage(code)}
              className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-light-hover dark:hover:bg-dark-hover dark:hover:text-dark-text transition duration-500 cursor-pointer"
            >
              {flag} {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
