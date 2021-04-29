import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';
import Button from '../../assets/Button/Button.js';

const MainDiv = styled.div`
    display: flex;
    height: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 2vh;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    text-align: center;
    height : 18vh;
    font-size: 1.5rem;
    
`

const CircleDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;

    svg{
        stroke-dasharray: 100; /*이 값은 path의 길이와 동일합니다*/
        stroke-dashoffset: 100;
        animation: dash 1.3s linear;
        animation-fill-mode: forwards;
        
        @keyframes dash {
        0% {
            stroke-dashoffset: 100;
        }
        100% {
             stroke-dashoffset: 0;
        }
}
    }

    
`

const BtnStyle = styled.div`
    
    button {
        max-width: 160px;
        font-family: spoqa-Light;

    }
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
                    <Text>
                        일기를 작성할<br />
                        계좌를 등록해주세요.
                        <BtnStyle>
                            <Button Text={"등록하기"} Width={"50vw"}></Button>
                        </BtnStyle>
                    </Text>
                    
                </CircleDiv>
                <ListDiv>
                    리스트 나올 div 입니다.
                </ListDiv>
            </MainDiv>
        </>
    );
}

export default Main;
