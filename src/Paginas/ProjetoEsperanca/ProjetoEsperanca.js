import React from 'react';
import ProjetoEsperancaContent from "../../Components/Organisms/ProjetoEsperancaContent/ProjetoEsperancaContent";
import GeneralTemplate from "../../Templates/GeneralTemplate/GeneralTemplate";
import Footer from "../../Templates/Footer/Footer"

import './ProjetoEsperanca.css';






class ProjetoEsperanca extends React.Component{
    render(){
        return(
            <>
            <GeneralTemplate
                
            />
                <ProjetoEsperancaContent/>
                <Footer/>
            </>
            
            
          
        )
    }
}

export default ProjetoEsperanca;