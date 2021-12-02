import styled from "styled-components";

export const FooterEl = styled.footer`
    margin-top: 4rem;
    width: 100%;
    height: 4rem;
    background-color: ${props => props.theme.colors.secondary};
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    >small {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        >span:first-of-type {
            font-size: 0.8rem;
        }

        >span:last-of-type {
            font-size: 1.5rem;
        }
    }

    @media(max-width: 768px) {
        margin-top: 3rem;
    }

    @media(max-width: 510px) {
        margin-top: 2rem;

        >small {
            >span:first-of-type {
                font-size: 0.7rem;
            }
    
            >span:last-of-type {
                font-size: 1.2rem;
            }
        }
    }
`;