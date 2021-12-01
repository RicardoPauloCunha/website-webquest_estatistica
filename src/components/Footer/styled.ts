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
`;