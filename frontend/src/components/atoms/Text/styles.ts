import styled from 'styled-components';

export const P = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text.main};

`;

export const Span = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme.background.pastel};
`;