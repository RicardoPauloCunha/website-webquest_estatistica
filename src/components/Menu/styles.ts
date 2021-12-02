import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    margin-bottom: 4rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &, a {
        color: #FFF;
        text-decoration: none;
    }

    >div:nth-child(1) {
        height: 4rem;
        padding: 0.5rem 2rem;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        small {
            display: flex;
            align-items: center;
            gap: 0.5rem;
    
            >span:first-of-type {
                font-size: 1.3rem;
            }
    
            >span:last-of-type {
                font-size: 2rem;
            }
        }
    
        svg {
            display: none;
        }
    }

    >div:nth-child(2) {
        padding: 0.5rem 2rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;

        a {
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

    @media(max-width: 768px) {
        flex-direction: column;
        margin-bottom: 3rem;

        >div:nth-child(1) {
            width: 100%;
            padding: 0.5rem 1.5rem;

            svg {
                display: block;
            }
        }
 
        >div:nth-child(2) {
            width: 100%;
            padding: 1rem 1.5rem;
            background-color: ${props => props.theme.colors.primary};

            display: flex;
            flex-direction: column;
        }
    }

    @media(max-width: 510px) {
        margin-bottom: 2rem;
    }
`;