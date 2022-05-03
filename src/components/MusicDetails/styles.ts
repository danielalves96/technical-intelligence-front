import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  gap: 3rem;

  @media (min-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

export const CoverArt = styled.div`
  max-width: 400px;

  img {
    border-radius: 0.5rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CoverArtMobile = styled.div`
  max-width: 400px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Title = styled.span`
  color: #0acea2;
  font-size: 2rem;
  font-weight: bold;
`;

export const TrackValues = styled.div`
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const TrackData = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.span`
  white-space: pre-line;
  font-size: 0.8rem;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const ListLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }

  a:hover {
    color: #0acea2;
  }
`;
