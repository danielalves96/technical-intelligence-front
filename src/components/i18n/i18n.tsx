import React from 'react';
import { useTranslation } from 'react-i18next';

function I18n() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: any) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;

  return (
    <div className="select is-success">
      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        defaultValue={selectedLanguage}
      >
        <option value="pt-BR">🇧🇷</option>
        <option value="en-US">🇺🇸</option>
      </select>
    </div>
  );
}

export default I18n;
