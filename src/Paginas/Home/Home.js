import React from "react";
import GeneralTemplate from "../../Templates/GeneralTemplate/GeneralTemplate";
import Footer from "../../Templates/Footer/Footer"
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent"



class Home extends React.Component{
    render(){
        return(
            <>
                <GeneralTemplate/>
                <HomeContent/>
                <Footer/>
            </>
        )
    }
}

export default Home;