import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const GalleryButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  @media (max-width: 820px) {
    justify-content: center;
    margin-top: 1.5rem;
  }
`;
