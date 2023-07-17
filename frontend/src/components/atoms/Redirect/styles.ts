import styled from 'styled-components';

export const Container = styled.div`

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.text.link};
    font-weight: 500;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.105rem;
      background: ${({ theme }) => theme.text.link};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
