import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../Header/styles';

export const PagesList = () => {
  const { t } = useTranslation();
  return (
    <S.ListLinks>
      <li>
        <Link href="/">{t(`pagesList.home`)}</Link>
      </li>
      <li>
        <Link href="/musics">{t(`pagesList.musics`)}</Link>
      </li>
      <li>
        <Link href="/about">{t(`pagesList.about`)}</Link>
      </li>
      <li>
        <Link href="/contact">{t(`pagesList.contact`)}</Link>
      </li>
      {/* <li>
        <a
          href="https://technicalintelligence.lojaintegrada.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          {t(`pagesList.store`)}
        </a>
      </li> */}
    </S.ListLinks>
  );
};
