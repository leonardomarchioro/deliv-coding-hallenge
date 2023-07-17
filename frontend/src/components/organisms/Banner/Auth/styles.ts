import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 50%;
  display: none;

  > svg {
    width: 100%;
    height: auto;
    min-width: 15rem;
    max-width: 45rem;
  }

  @media screen and (min-width: 828px) {
    display: flex;
  }
`;
