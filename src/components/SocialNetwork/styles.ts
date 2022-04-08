import styled from 'styled-components';

export const ListLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    gap: 2rem;
  }

  a:hover {
    color: #0acea2;
  }
`;
