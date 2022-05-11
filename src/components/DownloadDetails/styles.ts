import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-direction: column;
`;

export const GridImage = styled.div`
  display: flex;
  justify-items: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Description = styled.span`
  white-space: pre-line;
  text-align: justify;
  margin-top: 2rem;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
`;
