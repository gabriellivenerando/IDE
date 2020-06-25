import React from 'react';
import Section from "../../Molecules/Section/Section";
import Titulo from "../../Molecules/Titulos/Titulo";
import Icone from "../../Molecules/Icone/Icone";
import './HomeContent.css';

class HomeContent extends React.Component {
    render() {

        return (
            <div>
                <h1>Projeto Esperança</h1>
                <h2>Lugar de transformação</h2>

                <Section
                    texto='O Projeto Esperança, desde 2007 desenvolve um trabalho social no povado de Lustosa, Sampaio,  Bahia. O Projeto tem o objetivo de contribbuir e de promeover a ação social assim como de levar o evangelho dentro a comunidade. Buscando melhorar a qualidade de vida e trazer esperança de futuro melhor. Nossa missão é fazer com que a criança venha descobrir seus valores, habilidades e sua importância dentro da sociedade, através da educação, da cidadania e da inclusão social.  Buscamos formas cidadãos pautados nos princípios e valores cristãos, para isto trabalhamos em parcerias com os pais, a escola e a comunidade.'
                />

                <Titulo titulo='ESTIMULANDO, MOTIVANDO E ORIENTANDO'/>
                <Section/>
                <Titulo titulo='ONDE ESTAMOS'/>
                <Section/>
                <Titulo titulo='PROGRAMAS OFERECIDOS'/>
                <section className="programasoferecidos-container">
                    <Icone 

                    subtitulo="Alimentação"
                    />
                    <Icone subtitulo="Transporte"/>
                    <Icone subtitulo="Artes"/>
                    <Icone subtitulo="Música"/>
                </section>

                <section className="programasoferecidos-container">
                    <Icone subtitulo="Teatro"/>
                    <Icone subtitulo="Esporte"/>
                    <Icone subtitulo="Educação Infantil"/>
                    <Icone subtitulo="Culinária"/>
                </section>

                <section className="programasoferecidos-container">
                    <Icone subtitulo="Reforço escolar"/>
                    <Icone subtitulo="Aula de inglês"/>
                    <Icone subtitulo="Assistêncoa social"/>
                </section>

                <Titulo titulo='COMO AJUDAR?'/>
                <Titulo titulo='EQUIPE'/>
            </div>
        )
    }

}

export default HomeContent;