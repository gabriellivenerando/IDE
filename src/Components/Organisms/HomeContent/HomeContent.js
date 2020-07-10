import React from 'react';
import Section from "../../Molecules/Section/Section";
import SectionDois from "../../Molecules/SectionDois/SectionDois";
import Titulo from "../../Molecules/Titulos/Titulo";
import Icone from "../../Molecules/Icone/Icone";
import Equipe from "../../Molecules/SectionEquipe/SectionEquipe";
import TituloPrincipal from "../../Atoms/TituloPrincipal/TituloPrincipal";


import ImagemUm from "../../../imagens/imagemum.svg";
import ImagemDois from "../../../imagens/mapa.svg";
import ImagemTres from "../../../imagens/parteCinco.svg"



import Alimentacao from "../../../imagens/alimentacao.svg"
import Transporte from "../../../imagens/transporte.svg"
import Artes from "../../../imagens/artes.svg";
import Musica from "../../../imagens/violao.svg"
import Teatro from "../../../imagens/teatro.svg";
import Esporte from "../../../imagens/esporte.svg";
import EducacaoInfantil from "../../../imagens/educacaoInfantil.svg";
import Culinaria from "../../../imagens/culinaria.svg";
import ReforcoEscolar from "../../../imagens/reforcoEscolar.svg";
import AulaDeIngles from "../../../imagens/aulaDeIngles.svg";
import AssistenciaSocial from "../../../imagens/assistenciaSocial.svg";


import Paulo from "../../../imagens/pauloEquipe.svg";
import Debora from "../../../imagens/deboraEquipe.svg";
import Jucileide from "../../../imagens/jucileideEquipe.svg";
import Daniel from "../../../imagens/danielEquipe.svg";

import './HomeContent.css';



class HomeContent extends React.Component {
    render() {

        return (
            <>  
                <TituloPrincipal
                    titulo = "Projeto Esperança"
                />
                <Section
                    imagemSeccao={ImagemUm}
                    subtitulo = "Lugar de transformação"
                    texto="O Projeto tem o objetivo de contribuir e de promover a ação social e o amor de Deus. melhorar a qualidade de vida e trazer esperança pra um futuro melhor. Nossa missão é fazer com que as crianças e os adolescentes venham à descobrir seus valores, habilidades e sua importância dentro da sociedade, através da educação, da cidadania e da inclusão social. Buscamos formar cidadãos pautados nos princípios e valores cristãos. Para isto trabalhamos em parceria com os pais, a escola e a comunidade."
                />
                <Titulo
                    nomeDaClass="parteUm"
                    titulo="Estimulando, motivando e orientando"
                />

                <SectionDois
                    textoUm ="Atendemos mais de 80 crianças e adolescentes de 04 a 18 anos de idade, de segunda à sexta, em contra turnos com a escola. Oferecemos atividades extracurriculares e reforço escolar, entre outros como esporte, música, culinária, teatro, idioma e princípios cristãos através de devocionais diárias."
                    textoDois = "As refeições diárias servidas podem ser pra eles; às vezes; a única do dia. Um de nossos requisitos é que o aluno esteja matriculado na rede de ensino público. Os pais assinam um contrato onde temos normas e regras a serem cumpridas. Assim também como temos regras e normas para as crianças e adolescenetes."
                />
           
                <Titulo
                    nomeDaClass="parteDois"
                    titulo="Onde Estamos"
                />

                <Section
                    imagemSeccao={ImagemDois}
                    texto="O projeto Esperança, desde 2007 desenvolve um trabalho social em um povoado no norte da Bahia."
                />

                <Titulo
                    nomeDaClass="parteTres"
                    titulo="Programas Oferecidos"
                />

                <section className="programasoferecidos-container">

                    <Icone
                        imagemIcone={Alimentacao}
                        subtitulo="Alimentação"
                        />
                    <Icone
                        imagemIcone={Transporte}
                        subtitulo="Transporte"
                        />
                    <Icone
                        imagemIcone={Artes}
                        subtitulo="Artes"
                        />
                    <Icone
                        imagemIcone={Musica}
                        subtitulo="Música"
                        />
                    </section>
                    <section className="programasoferecidos-container">
                    <Icone
                        imagemIcone={Teatro}
                        subtitulo="Teatro"
                        />

                    <Icone
                        imagemIcone={Esporte}
                        subtitulo="Esporte"
                        />

                    <Icone
                        imagemIcone={EducacaoInfantil}
                        subtitulo="Educação Infantil"
                        />

                    <Icone
                        imagemIcone={Culinaria}
                        subtitulo="Culinária"
                        />


                    </section>
                    <section className="programasoferecidos-container">
                    <Icone
                        imagemIcone={ReforcoEscolar}
                        subtitulo="ReforcoEscolar"
                        />

                    <Icone
                        imagemIcone={AulaDeIngles}
                        subtitulo="Aula de Inglês"
                        />

                    <Icone
                        imagemIcone={AssistenciaSocial}
                        subtitulo="Assistência Social"
                        />
                    </section>

                    <Titulo
                    nomeDaClass="parteQuatro"
                    titulo="Como Ajudar?"
                    />

                    <Section
                        imagemSeccao={ImagemTres}
                    />

                    <Titulo
                    nomeDaClass="parteCinco"
                    titulo="Equipe"
                    />

                    <section className="equipe-container">
                        <Equipe
                        imagemEquipe={Paulo}
                        nomeEquipe="Paulo"
                        />

                        <Equipe
                        imagemEquipe={Debora}
                        nomeEquipe="Debora"
                        />
                    </section>

                    <section className="equipe-container">
                        <Equipe
                        imagemEquipe={Jucileide}
                        nomeEquipe="Jucileide Teles"
                        />

                        <Equipe
                        imagemEquipe={Daniel}
                        nomeEquipe="Daniel Teles"
                        />
                    </section>
            </>
        )
    }

}

export default HomeContent;