import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: 2rem;
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 5rem;
    gap: 5rem;
  }
`;
