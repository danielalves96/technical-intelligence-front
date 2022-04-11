import Image from 'next/image';
import { BsSpotify, BsYoutube } from 'react-icons/bs';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { GrSoundcloud } from 'react-icons/gr';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export default function MusicDetails({ track }: any) {
  return (
    <ContainerDesktop>
      <S.Main>
        <S.CoverArt>
          <Image src={track.cover_art} alt="cover" width="650" height="650" />
        </S.CoverArt>
        <S.TrackData>
          <S.CoverArtMobile>
            <Image src={track.cover_art} alt="cover" width="650" height="650" />
          </S.CoverArtMobile>
          <S.Texts>
            <S.Title>{track.name}</S.Title>
            <span>Technical Intelligence</span>
            <S.TrackValues>
              <span>Label: {track.label}</span>
              <span>Tone: {track.tone}</span>
              <span>BPM: {track.bpm}</span>
            </S.TrackValues>
          </S.Texts>

          <audio
            controls
            controlsList="noplaybackrate nodownload"
            style={{ width: `100%` }}
          >
            <source src={track.audio_file} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <S.ListLinks>
            <li>
              <a href={track.download_link} target="_blank" rel="noreferrer">
                <FaCloudDownloadAlt size={25} />
              </a>
            </li>
            <li>
              <a href={track.youtube} target="_blank" rel="noreferrer">
                <BsYoutube size={25} />
              </a>
            </li>
            <li>
              <a href={track.spotify} target="_blank" rel="noreferrer">
                <BsSpotify size={25} />
              </a>
            </li>
            <li>
              <a href={track.soundcloud} target="_blank" rel="noreferrer">
                <GrSoundcloud size={25} />
              </a>
            </li>
          </S.ListLinks>
          <S.Description>{track.description}</S.Description>
        </S.TrackData>
      </S.Main>
    </ContainerDesktop>
  );
}
