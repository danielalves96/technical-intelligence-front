import styled from 'styled-components';

export const Footer = styled.div`
  background: #181818;
  height: 5rem;
  display: flex;
  align-items: center;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AlignItens = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: flex-end;
  @media (max-width: 580px) {
    justify-content: center;
  }
`;
