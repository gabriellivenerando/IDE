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
                textoUm="A IDE, Associação sem fins lucrativos, nasceu na cidade de Franca, São Paulo; incentivado pelo casal Paulo e Debora Gonçalves que tem o coração para as crianças e adolescentes carentes no Brasil. O conselho administrativo formado por seis pessoas, apoia o Projeto Esperança na Bahia."
                tituloDois = "Missão"
                textoDois="Atender aqueles que sofrem com a vulnerabilidade social. Apoiar e divulgar o Projeto Esperança. Incentivar pessoas e instituições a conhecer e a se envolver em projetos sociais e missionários."
            />

            <SectionIDE
                tituloUm= "Visão"
                textoUm="Fomentar o crescimento e o fortalecimento de instituições que atuam na área social, através de capacitações e treinamentos, em parceria com outras organizações nacionais e internacionais."
                tituloDois = "Valores"
                textoDois="Fé em Deus, ensino cristão, valor da família na sociedade, igualdade sem discriminação de cor, credo ou nível social, somos criados à imagem e semelhança de Deus,Direito à proteção para todos"
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