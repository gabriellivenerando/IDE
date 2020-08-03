import React from "react";
import "./HomeContent.css";
import Titulo from "../../Molecules/Titulos/Titulo";
import SectionIDE from "../../Molecules/SectionIDE/SectionIDE";
import TituloPrincipal from "../../Atoms/TituloPrincipal/TituloPrincipal";
import Paragrafo from "../../Atoms/Paragrafo/Paragrafo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Button from "../../Molecules/Button/Button"


import ImagemTocandoViolao from "../../../imagens/tocandoviolao.svg";
import SectionParceiros from "../../Molecules/SectionParceiros/SectionParceiros";


class HomeContent extends React.Component{
    render(){
        return(
            <>
            <Titulo
                nomeDaClass="parteUm"
                titulo="IDE - ASSOCIAÇÃO FILANTRÓPICA DE FRANCA "
            />
            <SectionIDE
                tituloUm= "Quem somos"
                textoUm="A IDE é uma associação sem
                fins lucrativos, formada por um conselho administrativo
                composto por seis pessoas, que tem sua sede na cidade de
                Franca/SP. Foi idealizada pelo casal Paulo e Debora
                Gonçalves que têm o coração para as crianças e
                adolescentes carentes do Brasil. A associação atualmente
                presta suporte ao Projeto Esperança na Bahia."
                tituloDois = "Missão"
                textoDois="Atender aqueles que estão em
                posição de vulnerabilidade social. Apoiar e divulgar o
                Projeto Esperança. Incentivar pessoas e instituições a
                conhecer e a se envolver em projetos sociais e
                missionários."
            />

            <SectionIDE
                tituloUm= "Visão"
                textoUm="Fomentar o crescimento e o
                fortalecimento de instituições que atuam na área social
                através de capacitações e treinamentos, em parceria com
                outras organizações nacionais e internacionais."
                tituloDois = "Valores"
                textoDois="IDE = Integridade, Dignidade, Esperança.
                Fé em Deus, Ensino cristão, Valor da família na
                sociedade, Direito a proteção para todos, Igualdade sem
                discriminação de cor, credo ou nível social, Somos criados
                à imagem e semelhança de Deus."
            />

            <TituloPrincipal
                TituloPrincipal="Primeiro_titulo"
                titulo="Projeto Esperança"
            />
            <Paragrafo
                paragrafo="O Projeto tem o objetivo de contribuir e de promover a ação social e o amor de Deus,  melhorar a qualidade de vida e trazer esperança pra um futuro melhor. "
            />

            <Imagem
                Imagem={ImagemTocandoViolao}
            />

            <Button
                nomedoButton="Saiba mais"

            />

            <section>
                <Titulo
                    nomeDaClass="parteQuatro"
                    titulo="PARCEIROS"
                />

                <SectionParceiros/>
            </section>


            





            </>
        )
    }
}


export default HomeContent;