import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';

const MainDiv = styled.div`
    display: flex;
    height: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Text = styled.div`
    position: absolute;
    text-align: center;
    
`

const CircleDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 80vh;
`

const ListDiv = styled.div`
    background-color: tomato;
    height: 10vh;
    width: 90vw;    
` 
const Main = () => {
    return (
        <>
            <Header />

            <MainDiv>
                <LightLogo height="10vh" width="60vw" />
                <CircleDiv>
                    <Circle stroke = {MAIN_COLOR}></Circle>
                    <Text>일기를 작성할<br /> 계좌를 등록해주세요. </Text>
                </CircleDiv>
                <ListDiv>
                    리스트 나올 div 입니다.
                </ListDiv>
            </MainDiv>
        </>
    );
}

export default Main;
