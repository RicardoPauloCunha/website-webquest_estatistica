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
        background: ${props => props.theme.colors.backgroundPrimary};
        color: ${props => props.theme.colors.text};
        font: 400 1.2rem Roboto, sans-serif;
    }

    section {
        width: 80%;
        padding: 2rem;
        margin: 2rem auto;
        border-radius: 0.5rem;
        background-color: ${props => props.theme.colors.backgroundSection};

        &.section-w60 {
            width: 60%;
        }
    }

    h1 {
        font-size: 2.3rem;
        margin-bottom: 1.3rem;
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
        margin: 1.5rem 0 1rem 0;

        &:focus {
            outline: none;
            text-decoration: underline;
        }
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.7rem;
    }

    main {
        min-height: 77vh;
    }

    @media(max-width: 768px) {
        section {
            &.section-w60 {
                width: 80%;
            }
        }

        h1 {
            font-size: 2rem;
        }
    
        h2 {
            font-size: 1.5rem;
        }
    }

    @media(max-width: 510px) {
        section {
            width: 95%;
            padding: 1.5rem;

            &.section-w60 {
                width: 95%;
            }
        }

        h1 {
            font-size: 1.7rem;
        }
    
        h2 {
            font-size: 1.3rem;
        }

        p {
            margin-bottom: 0.9rem;
            line-height: 1.6rem;
        }
    }
`;
