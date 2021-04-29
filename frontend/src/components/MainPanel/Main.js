import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
`


const Main = () => {
    return (
        <>
            <Header />

            <MainDiv>
            <LightLogo height="6vh" width="50vw" />
            </MainDiv>
        </>
    );
}

export default Main;
