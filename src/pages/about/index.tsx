import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
        <section className="section-w60">
            <Head>
                <title>Sobre</title>
            </Head>

            <h1>Sobre</h1>
            <p>Esse trabalho realizado tem o objetivo de disponibilizar vídeos aulas sobre os temas apresentados durante as aulas, para servir de referência e material de estudo. Sendo uma atividade complementar da disciplina de Estatística da Fatec de Carapicuíba, ministrada pelo professor Luciano Condori.</p>

            <h2>Autor</h2>
            <strong>Nome</strong>
            <p>Ricardo Paulo da Cunha</p>

            <strong>Curso</strong>
            <p>Análise e Desenvolvimento de Sistemas</p>

            <strong>Período</strong>
            <p>Noturno - 3º Semestre</p>

            <strong>Instituição</strong>
            <p>Fatec Carapicuíba</p>

            <strong>Data</strong>
            <p>02/12/2021</p>
        </section>
    )
}

export default About;
