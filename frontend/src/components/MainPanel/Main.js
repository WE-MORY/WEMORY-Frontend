import React from 'react';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';
import Pic1 from '../../assets/Images/cat.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slider';
// import Content from './Content';
// import ContentBox from './Content';

const TestDataURL = [
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트1"
    },
    {
        ImgURL: '../../../assets/Images/textImg/cat2.png',
        description: "테스트2"
    },
];

const MainDiv = styled.div`
    display: flex;
    background-color: white;
    height: auto;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2vh; */
    overflow-x: hidden;
`

const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;    
` 

const TextBox =  styled.div`
    text-align: left;
    font-family: 'Spoqa-Regular';
    font-size: 1.5rem;
    margin: 10vh 0 5vh 0 ;
    width: 85vw;
`

const ImgStyle = styled.div`
    img{
        padding: 3px;
    }
`

const Test = styled.div`
    top: 25vh;
    position: absolute;
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

const Main = () => {
    const repeat = ['https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg','https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg'];
    const repeatLi = repeat.map((src, index)=> <img width="100px" height="100px" key={index} src={src}/>);
    return (
        <>
            <Header />
            
            <MainDiv>
                <LightLogo height="10vh" width="60vw" />
                <Test>
                    <Circle stroke = {MAIN_COLOR}></Circle>
                </Test>
                <SimpleSlider />
                <TextBox>
                    <span>
                        어쩌고 일기의 추억들
                    </span> 
                </TextBox>
                <ListDiv>
                    <ImgStyle>
                        {repeatLi}
                    </ImgStyle>
                </ListDiv>
            </MainDiv>
        </>
    );
}

export default Main;