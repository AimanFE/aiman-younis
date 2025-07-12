import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
    border: none;
    outline: none;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.secondary};
  }

  ::selection {
    background: ${props => props.theme.primary};
    color: white;
  }

  .glass {
    background: ${props => props.theme.glassBg};
    backdrop-filter: ${props => props.theme.glassBackdrop};
    -webkit-backdrop-filter: ${props => props.theme.glassBackdrop};
    border: 1px solid ${props => props.theme.border};
  }
`;