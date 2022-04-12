import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { I18n } from '../i18n';
import * as S from './styles';

export default function DropdownMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GiHamburgerMenu
        size={30}
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          <S.Sidebar>
            <S.SidebarHeader>
              <I18n />
              <RiCloseFill size={30} onClick={() => setIsOpen(!isOpen)} />
            </S.SidebarHeader>
            <S.SidebarLinks>
              <Link href="/" passHref>
                <span onClick={() => setIsOpen(!isOpen)}>
                  {t(`pagesList.home`)}
                </span>
              </Link>
              <Link href="/musics" passHref>
                <span onClick={() => setIsOpen(!isOpen)}>
                  {t(`pagesList.musics`)}
                </span>
              </Link>
              <Link href="/about" passHref>
                <span onClick={() => setIsOpen(!isOpen)}>
                  {t(`pagesList.about`)}
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span onClick={() => setIsOpen(!isOpen)}>
                  {t(`pagesList.contact`)}
                </span>
              </Link>
            </S.SidebarLinks>
          </S.Sidebar>
          <S.Backdrop onClick={() => setIsOpen(!isOpen)} />
        </>
      )}
    </>
  );
}
