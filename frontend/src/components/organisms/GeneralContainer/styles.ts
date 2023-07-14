import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 768px){
        padding: 2rem;
        
    }

    @media screen and (min-width: 1024px){
        padding: 3rem 5rem;
        
    }
`