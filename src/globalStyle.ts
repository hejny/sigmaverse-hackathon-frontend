import { createGlobalStyle } from 'styled-components';

// Note: Do not use this file for local components and all CSS logic put into styled components

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: #282c37;
        color: white;

        margin: 0;
    }

`;

/**
 * TODO:
 * - Dark/light theme from system
 * - Dark/light theme toggle
 */
