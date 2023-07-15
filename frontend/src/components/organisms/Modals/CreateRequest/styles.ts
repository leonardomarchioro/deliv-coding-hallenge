import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  height: 90%;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;

    .send-button {
      width: 80%;
      height: 2rem;
      position: absolute;
      bottom: 1rem;
      align-self: center;
    }
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .add-button {
    height: 2.3rem;
  }

  @media screen and (min-width: 520px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    .add-button {
        width: 30%;
    }

    .select-input {
        width: 70%;
    }
  }
`;
