import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  border-radius: 0.4rem;
  overflow: hidden;

  th,
  td {
    padding: 0.5rem 1rem;
    text-align: left;
    border: none;
    font-weight: 500;
  }

  th {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.background.pastel};
  }

  tbody tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.background.pastel};
    color: ${({ theme }) => theme.background.dark};
  }

  tbody tr:nth-child(even) {
    color: ${({ theme }) => theme.background.pastel};
    background-color: ${({ theme }) => theme.background.dark};
  }

  tbody tr:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
