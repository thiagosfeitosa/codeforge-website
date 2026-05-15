"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type LanguageCode, useI18n } from "@/lib/i18n";

const languages: Array<{
  code: LanguageCode;
  flag: string;
  label: string;
  shortLabel: string;
}> = [
  { code: "en-US", flag: "🇺🇸", label: "English (US)", shortLabel: "EN" },
  { code: "pt-BR", flag: "🇧🇷", label: "Português", shortLabel: "PT" },
  { code: "es-ES", flag: "🇪🇸", label: "Español", shortLabel: "ES" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const selectedLanguage = languages.find((item) => item.code === language) ?? languages[0];

  return (
    <div className="language-selector">
      <button
        type="button"
        className="language-selector-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="language-flag" aria-hidden="true">
          {selectedLanguage.flag}
        </span>
        <span className="language-short">{selectedLanguage.shortLabel}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>

      {open && (
        <div className="language-menu" role="menu" aria-label="Select language">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              className="language-menu-item"
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              role="menuitemradio"
              aria-checked={item.code === language}
            >
              <span className="language-flag" aria-hidden="true">
                {item.flag}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
