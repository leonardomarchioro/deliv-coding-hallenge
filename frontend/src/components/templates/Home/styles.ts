import styled from 'styled-components';

export const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 7rem;
  > div {
    height: 40%;
  }

  @media screen and (min-width: 885px) {
    
    > div {
      max-width: 25rem;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }

  @media screen and (min-width: 885px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 5rem;
  }
`;
