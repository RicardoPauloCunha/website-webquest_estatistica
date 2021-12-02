import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { SectionItem } from './styles';

import imgStatistic from '../assets/statistic.jpg';
import imgProbability from '../assets/probability.jpg';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <SectionItem>
                <figure>
                    <Image
                        src={imgStatistic}
                        alt="Análise estatística - Photo by Agence Olloweb on Unsplash"
                        width={1000}
                        height={664}
                        layout="responsive"
                        className="img-border-radius"
                    />
                </figure>

                <div>
                    <h2>Vídeos estatística</h2>
                    <p>Vídeoaulas sobre cálculos de estatísticas.</p>
                    <ul>
                        <li>Formula de Sturges</li>
                        <li>Distribuição de frequência</li>
                        <li>Variância de dados tabulados</li>
                        <li>Coeficiente de variação</li>
                        <li>Correlação e Regressão linear</li>
                    </ul>

                    <Link href="statistic">
                        <button>Acessar</button>
                    </Link>
                </div>
            </SectionItem>

            <SectionItem>
                <div>
                    <h2>Vídeos probabilidade</h2>
                    <p>Vídeoaulas sobre cálculos de probabilidade.</p>
                    <ul>
                        <li>Eventos equiprováveis</li>
                        <li>Probabilidade condicional</li>
                        <li>Esperança matemática e variânicia</li>
                        <li>Distribuição binominal</li>
                        <li>Distribuição de poisson</li>
                    </ul>

                    <Link href="probability">
                        <button>Acessar</button>
                    </Link>
                </div>

                <figure>
                    <Image
                        src={imgProbability}
                        alt="Lançamento de dados - Foto de Sara no Pexels"
                        width={1000}
                        height={666}
                        layout="responsive"
                        className="img-border-radius"
                    />
                </figure>
            </SectionItem>
        </>
    )
}

export default Home;
