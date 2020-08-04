import React from 'react';
import Section from "../../Molecules/Section/Section";
import SectionDois from "../../Molecules/SectionDois/SectionDois";
import Titulo from "../../Molecules/Titulos/Titulo";
import Icone from "../../Molecules/Icone/Icone";
import Equipe from "../../Molecules/SectionEquipe/SectionEquipe";
import TituloPrincipal from "../../Atoms/TituloPrincipal/TituloPrincipal";
import SectionAjuda from "../../Molecules/SectionAjuda/SectionAjuda";
import SectionTres from "../../Molecules/SectionTres/SectionTres";

import ImagemUm from "../../../imagens/imagemUm.jpg";
import ImagemDois from "../../../imagens/mapa.svg";
import ImagemTres from "../../../imagens/parteCinco.jpg"



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


import BancoBrasil from "../../../imagens/bancoBrasil.svg"


import Paulo from "../../../imagens/pauloEquipe.jpg";
import Debora from "../../../imagens/deboraEquipe.jpg";
import Jucileide from "../../../imagens/jucileideEquipe.jpg";
import Daniel from "../../../imagens/danielEquipe.jpg";

import './ProjetoEsperancaContent.css';



class HomeContent extends React.Component {
    render() {

        return (
            <>  
                <TituloPrincipal
                    TituloPrincipal="Segundo_titulo"
                    titulo = "Projeto Esperança"
                />
                <Section
                    imagemSeccao={ImagemUm}
                    subtitulo = "Lugar de transformação"
                    texto="O Projeto tem o objetivo de contribuir e de promover a ação social e o amor de Deus, assim como melhorar a qualidade de vida e trazer esperança de um futuro melhor. Nossa missão é fazer com que as crianças e adolescentes venham a descobrir seus valores, habilidades e sua
                    importância dentro da sociedade, através da educação, da cidadania e da inclusão social. Buscamos formar cidadãos pautados nos princípios e valores cristãos. Para isto, trabalhamos em parceria com os pais, com a escola e com a comunidade."
                />
                <Titulo
                    nomeDaClass="parteUm"
                    titulo="Estimulando, motivando e orientando"
                />

                <SectionDois
                    textoUm ="Atendemos mais de 80 crianças e adolescentes entre 4 e 18
                    anos de idade, de segunda à sexta, no período de
                    contraturno da escola. Oferecemos reforço escolar e ainda
                    atividades extracurriculares como esporte, música,
                    culinária, teatro, idioma. Ensinamos também princípios
                    cristãos através de devocionais cotidianas."
                    textoDois ="Refeições são servidas todos os dias, sendo, por vezes, a única para algumas das crianças e adolescentes. Um de nossos requisitos para a inclusão no Projeto
                    Esperança é que o aluno esteja matriculado na rede de
                    ensino público. Sendo assim, os pais assinam um contrato
                    onde há normas e regras a serem cumpridas tanto por eles
                    quanto pelas crianças e adolescentes."
                />
           
                <Titulo
                    nomeDaClass="parteDois"
                    titulo="Onde Estamos"
                />

                
                <SectionTres
                    imagemMapa={ImagemDois}
                    textoSectionTres="O Projeto Esperança desenvolve seu trabalho social em um povoado no norte da Bahia desde o ano de 2007."
                />

                <Titulo
                    nomeDaClass="parteTres"
                    titulo="Programas Oferecidos"
                />

                <section className="programasoferecidos-container programasoferecidos_container-um">

                    <Icone
                        imagemIcone={Alimentacao}
                        subtitulo="Alimentação"
                        />
                    <Icone
                        imagemIcone={Artes}
                        subtitulo="Artes"
                        />
                    <Icone
                        imagemIcone={Transporte}
                        subtitulo="Transporte"
                        />
                    <Icone
                        imagemIcone={Musica}
                        subtitulo="Música"
                        />
                    </section>
                    <section className="programasoferecidos-container programasoferecidos_container-dois">
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
                    <section className="programasoferecidos-container programasoferecidos_container-tres">
                    <Icone
                        imagemIcone={ReforcoEscolar}
                        subtitulo="Reforço Escolar"
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


                    <section>
                        <SectionAjuda
                            TituloAjuda="Qualquer valor significa muito para nós!"
                            paragrafoUm="IDE ASSOCIAÇÃO FILANTRÓPICA DE FRANCA"
                            paragrafoDois="CNPJ: 35.035.904/0001-37"
                            imagemBanco={BancoBrasil}
                            paragrafoTres="AGÊNCIA: 3092-9 C/C: 44.868-0"
                            imagemCriancasAjuda={ImagemTres}
                            
                        
                        />
                    </section>
                    <Titulo
                    nomeDaClass="parteCinco"
                    titulo="Equipe"
                    />

                    <section className="equipe-container">
                        <Equipe
                        imagemEquipe={Paulo}
                        nomeEquipe="Paulo"
                        nomeLideranca="Liderança"
                        />

                        <Equipe
                        imagemEquipe={Debora}
                        nomeEquipe="Debora"
                        nomeLideranca="Liderança"
                        />
                    </section>

                    <section className="equipe-container">
                        <Equipe
                        imagemEquipe={Jucileide}
                        nomeEquipe="Jucileide"
                        nomeLideranca="Coordenação"
                        />

                        <Equipe
                        imagemEquipe={Daniel}
                        nomeEquipe="Daniel"
                        nomeLideranca="Coordenação"
                        />
                    </section>
            </>
        )
    }

}

export default HomeContent;