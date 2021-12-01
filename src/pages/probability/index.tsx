import React from 'react';
import Head from 'next/head';

import { SectionVideos } from '../statistic/styles';

const Probability = () => {
    return (
        <SectionVideos>
            <Head>
                <title>Probabilidade</title>
            </Head>

            <h1>Vídeos probabilidade</h1>
            <p>Vídeos sobre cálculos referentes a área de probabilidade.</p>

            <article>
                <h3>Probabilidade em espaços amostrais não equiprováveis</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/dft1pAO9e_s" />
                </div>
            </article>

            <article>
                <h3>Probabilidade condicional</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/IDdvfEia8RA" />
                </div>
            </article>

            <article>
                <h3>Valor esperado ou esperança matemática</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/C0G1g77l05s" />
                </div>
            </article>

            <article>
                <h3>Probabilidade binomial</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/A6W994ZIzpI" />
                </div>
            </article>

            <article>
                <h3>Distribuição de Poisson</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/OIOtwRW-Mc8" />
                </div>
            </article>
        </SectionVideos>
    )
}

export default Probability;
