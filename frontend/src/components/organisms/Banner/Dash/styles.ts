import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.background.dark};
    border-radius: 0.4rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
        min-width: 15rem;
        width: 80%;
        min-height: 15rem;
        height: auto;
        max-height: 25rem;
    }
`;