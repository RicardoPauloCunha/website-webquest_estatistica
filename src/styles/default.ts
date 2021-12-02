import styled from "styled-components";

export const SectionVideos = styled.section`
    width: 70%;
    padding-bottom: 4rem;

    article + article {
        margin-top: 3rem;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
            margin-bottom: 0;
        }

        >div {
            background: ${props => props.theme.colors.backgroundSecondary};
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            width: 70%;
            padding-top: 39%;
            border-radius: 0.5rem;

            >iframe {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 0.5rem;
            }
        }
    }

    @media(max-width: 768px) {
        width: 90%;

        article {
            >div {
                width: 100%;
                padding-top: 57%;
            }
        }
    }
`;