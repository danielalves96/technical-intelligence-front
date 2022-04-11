import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

export const TrackedGrid = styled.div`
  cursor: pointer;
  max-width: 200px;
  background: #333;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  @media (max-width: 500px) {
    max-width: 250px;
  }
`;

export const Details = styled.div`
  width: 100%;
  min-height: 3rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
`;

export const Title = styled.span`
  text-transform: uppercase;
  color: #0acea2;
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
`;
