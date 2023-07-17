import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    > div {
        min-width: 10rem;
        width: 40%;
    }
`;
