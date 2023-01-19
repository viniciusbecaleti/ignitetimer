import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    color: ${({ theme }) => theme['gray-100']};
    background: ${({ theme }) => theme['gray-900']};
  }
`
