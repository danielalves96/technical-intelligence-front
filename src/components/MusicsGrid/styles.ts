import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const TrackedGrid = styled.div`
  cursor: pointer;
  max-width: 280px;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

export const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2rem;

  @media (min-width: 580px) {
    display: none;
  }
`;
