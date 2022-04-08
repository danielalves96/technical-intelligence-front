import React from 'react';
import Link from 'next/link';
import * as S from '../Header/styles';
import { useTranslation } from 'react-i18next';

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
    </S.ListLinks>
  );
};
