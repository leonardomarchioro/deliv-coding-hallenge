import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;

  > button {
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 0.4rem;
    border-color: transparent;
    color: ${({ theme }) => theme.text.main};
    background-color: ${({ theme, color }) => {
      switch (color) {
        case "secondary":
          return theme.background.emerald;

        case "confirm":
            return theme.colors.success
        
        case "cancel":
            return theme.colors.error

        default:
          return theme.background.dark;
      }
    }};
    font-weight: 500;

    &:hover {
      transform: scale(1.09);
      transition: 0.9s ease;
    }
  }
`;
