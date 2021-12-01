import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    height: 4rem;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    padding: 0.5rem 2rem;
    margin-bottom: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    >small {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        >span:first-of-type {
            font-size: 1.3rem;
        }

        >span:last-of-type {
            font-size: 2rem;
        }
    }

    >div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;

        a {
            color: #FFF;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }

            &:active {
                text-decoration: none;
                position: relative;
                top: 2px;
            }
        }
    }
`;