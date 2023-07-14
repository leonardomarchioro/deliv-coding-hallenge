import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 1rem;
    height: auto;
    width: 100%;

    > svg {
        width: 100%;
        height: auto;
        min-width: 15rem;
        max-width: 35rem;
        align-self: center;
    }
`

export const Div = styled.div`
    height: auto;
    width: 100%;
`