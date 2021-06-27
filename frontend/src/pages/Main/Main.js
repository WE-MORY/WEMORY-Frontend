import React from 'react'
import Header from '../../components/HeaderPanel/Header'
import ImageList from '../../components/MainPanel/ImageList'
import styled from 'styled-components'
import SimpleSlider from '../../components/MainPanel/Slider';
import Circle from '../../components/MainPanel/Circle';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';

const MainDiv = styled.div`
    display: flex;
    background-color: white;
    height: auto;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2vh; */
    overflow-x: hidden;
`

function Main() {
    return (
        <>  
            <Header />
            
            <MainDiv>
                <LightLogo height="10vh" width="60vw" />
                <Circle />
                <SimpleSlider />
                <ImageList />
            </MainDiv>
        </>
    )
}

export default Main
