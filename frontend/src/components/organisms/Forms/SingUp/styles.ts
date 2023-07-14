import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 3rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.background.dark};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    > form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    @media screen and (min-width: 828px){
        width: 50%;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.9rem;

    button {
        font-size: 0.9rem;
    }
`