import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.background.dark};
    border-radius: 0.4rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (min-width: 420px){
        flex-direction: row;
        justify-content: space-between;

        .button-container {
            width: 40%;
            max-width: 12rem;
        }
    }
`;