import React from 'react';
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent";
import GeneralTemplate from "../../Templates/GeneralTemplate/GeneralTemplate";
import Footer from "../../Templates/Footer/Footer"

import './Home.css';






class Home extends React.Component{
    render(){
        return(
            <>
            <GeneralTemplate
                
            />
                <HomeContent/>
                <Footer/>
            </>
            
            
          
        )
    }
}

export default Home;