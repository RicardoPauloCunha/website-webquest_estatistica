import styled from "styled-components";

export const SectionItem = styled.section`
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .img-border-radius {
        border-radius: 0.5rem;
    }

    figure {
        width: 60%;
        height: 100%;
        
        >img {
            height: 100%
        }
    }

    >div {
        >h2 {
            margin-top: 0;
            text-align: center;
        }

        >ul {
            margin-left: 2rem;
            
            li + li {
                margin-top: 0.5rem;
            }
        }
    }

    button {
        width: 100%;
        heigth: 2rem;
        padding: 1rem;
        text-align: center;
        border: none;
        background-color: ${props => props.theme.colors.primary};
        color: #FFF;
        margin-top: 2rem;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 1s;
        font-size: 1rem;

        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }

        &:active {
            text-decoration: underline;
        }
    }
`