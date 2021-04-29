import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.div`
    position: absolute;
    
`


const Main = () => {
    return (
        <>
            <Header />

            <MainDiv>
                <LightLogo height="6vh" width="50vw" />
                <Circle stroke = {MAIN_COLOR}/>
                <Text>텍스트가 가운데에 들어갈까요 ?</Text>
            </MainDiv>
        </>
    );
}

export default Main;
