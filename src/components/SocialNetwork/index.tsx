import React from 'react';
import { BsFacebook, BsInstagram, BsSpotify, BsYoutube } from 'react-icons/bs';
import { GrSoundcloud } from 'react-icons/gr';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export const SocialNetwork = () => {
  return (
    <ContainerDesktop>
      <S.ListLinks>
        <li>
          <a
            href="https://www.youtube.com/channel/UCVsI__4yBeEVk6RbtzIVkaA/videos"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/technicalintelligence"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/artist/6sOuF0e6PldW8d7r9kJeZo"
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/technical-intelligence"
            target="_blank"
            rel="noreferrer"
          >
            <GrSoundcloud size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/technicalintelligence/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={32} />
          </a>
        </li>
      </S.ListLinks>
    </ContainerDesktop>
  );
};
