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
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            width: 70%;
            padding-top: 39%;

            >iframe {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
`;