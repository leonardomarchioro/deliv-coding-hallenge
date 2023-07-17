import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .button-container {
        padding: 0.3rem;;
        display: flex;
        justify-content: flex-end;
        height: 2.5rem;

        > button {
            width: 2rem;
        } 
    }
`;