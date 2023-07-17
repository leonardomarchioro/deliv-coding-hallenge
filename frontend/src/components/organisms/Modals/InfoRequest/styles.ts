import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    .button-edit {
        height: 2rem;
        padding: 0 3rem;
        position: absolute;
        bottom: 1rem;
    }

    .title {
        width: 100%;
    }
`;

export const InfosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    padding: 0.5rem;
`;


export const AddressContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    padding: 0.5rem;
`;