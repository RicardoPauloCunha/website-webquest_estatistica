import React from 'react';
import Head from 'next/head';

import { SectionVideos } from './styles';

const Statistic = () => {
    return (
        <SectionVideos>
            <Head>
                <title>Estatística</title>
            </Head>

            <h1>Vídeos de estatística</h1>
            <p>A estatística descritiva é uma área da estatística que aplica várias técnicas para descrever e resumir qualquer conjunto de dados e estuda o comportamento geral dos dados observados, de forma a facilitar a resolução de problemas.</p>
            <p>Logo abaixo estão alguns vídeos explicando como realizar os principais cálculos de estatítica.</p>
            <br />

            <article>
                <h3>Distribuição de frequência com classes - Regra de Sturges</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/DCCt2nSM1uE" />
                </div>
            </article>

            <article>
                <h3>Distribuição de frequência</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/451SxriwdvM" />
                </div>
            </article>

            <article>
                <h3>Variância amostral para dados tabulados</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/yV1l7cYTKlM" />
                </div>
            </article>

            <article>
                <h3>Coeficiente de variação - Como Calcular</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/tTFES8Mqpa0" />
                </div>
            </article>

            <article>
                <h3>Correlação e regressão linear</h3>
                <div>
                    <iframe src="https://www.youtube.com/embed/uF78_zMorHU" />
                </div>
            </article>
        </SectionVideos>
    )
}

export default Statistic;
