import React from 'react';
import GeneralTemplate from '../../Templates/GeneralTemplate/GeneralTemplate';
import HomeContent from "../../Components/Organisms/HomeContent/HomeContent"
import './Home.css';



class Home extends React.Component{
    render(){
        return(
            <>
            <GeneralTemplate/>
            <HomeContent/>
            </>
        )
    }
}

export default Home;