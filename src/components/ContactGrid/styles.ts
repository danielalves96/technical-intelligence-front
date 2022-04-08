import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 820px) {
    display: none;
  }
`;

export const GridMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 820px) {
    display: none;
  }
`;

export const Section = styled.div`
  padding: 2rem;
  border: 8px solid white;
  width: 50%;
  min-height: 35rem;
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const Description = styled.span`
  color: #0acea2;

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;
