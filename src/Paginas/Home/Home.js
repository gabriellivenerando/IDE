import React from 'react';
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent";
import GeneralTemplate from "../../Templates/GeneralTemplate/GeneralTemplate";
import BannerProjeto from "../../imagens/banner.svg";
import './Home.css';






class Home extends React.Component{
    render(){
        return(
            <>
            <GeneralTemplate
                banner={BannerProjeto}
            />
                <HomeContent/>
            </>
            
            
          
        )
    }
}

export default Home;