import styled from 'styled-components';

export const Header = styled.div`
  background: #181818;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;

  a:hover {
    color: #0acea2;
  }
`;

export const LanguageDetector = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  @media (max-width: 710px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 710px) {
    display: none;
  }
`;

export const HeaderGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;
