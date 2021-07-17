import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 1.2rem Roboto, sans-serif;
    }

    section {
        width: 60vw;
        padding: 2rem;
        margin: 5rem auto;
        border-radius: 0%.5;
        background-color: ${props => props.theme.colors.backgroundSection};
    }
`;
