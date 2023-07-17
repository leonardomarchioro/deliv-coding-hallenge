import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    padding: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div<{error?: string}>`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem;
  border: 0.1rem solid ${({ theme, error }) => error === 'error' ? theme.colors.error : theme.background.pastel};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;

  > input, select {
    width: 100%;
    padding: 0px;
    border: none;
    border-radius: 0px;
    background-color: transparent;

    &::placeholder{
        font-weight: 500;
        color: ${({ theme, error }) => error === 'error' ? theme.colors.error : theme.colors.grey }
    }
  }
  
`;
export const ErrorContainer = styled.div`
  height: 1.5rem;
  width: 100%;
  padding: 0.3rem;
  > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const ToogleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.text.dark};
  }
`;

