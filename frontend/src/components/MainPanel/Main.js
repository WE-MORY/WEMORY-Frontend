import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components'
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
                <svg width="250" height="250">
                    <circle cx="125" cy="125" r="124" stroke={MAIN_COLOR} stroke-width="1" fill="none">안녕</circle>
                </svg>
                <Text>텍스트가 가운데에 들어갈까요 ?</Text>
            </MainDiv>
        </>
    );
}

export default Main;
