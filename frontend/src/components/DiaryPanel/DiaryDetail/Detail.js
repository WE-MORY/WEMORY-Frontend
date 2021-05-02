import React from 'react'
import styled from 'styled-components'
import BackHeader from '../../HeaderPanel/BackHeader'

// import {Pic} from '../../../assets/Images/textImg/cat1.jpg

const MainDiv = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin: 5vh 0;
    }    
`

const DateDiv = styled.div`
    font-size: 1.5rem;
    font-family: 'Spoqa-Regular';
    /* margin: 5vh 0; */
    /* text-align: center; */

`

const ImgDiv = styled.img`
    background-color: brown;
    width: 100vw;
    height: 50vh;
    margin: 10vh 0;
`
const TextDiv = styled.div`
    text-align: left;

`

const Title = styled.span`
    display: block;
    font-size: 1.5rem;
    font-family: "Cafe24";

`

const Description = styled.span`
    display: block;
    font-family: "Cafe24";
    font-size: 1.2rem;


`

export default function Create() {
    
    return (
        <>
        <BackHeader />

        <MainDiv>
            <DateDiv>2021 . 04 . 30 (금)</DateDiv>
            <ImgDiv>
                {/* <img src="../../../assets/Images/textImg/cat1.png" alt="img 안 나와요"></img> */}
            </ImgDiv>
            <TextDiv>
                <Title>여기는 타이틀 나오는 부분입니다. </Title>

                <Description>여기는 설명이 나오는 부분입니다.</Description>
            </TextDiv>
        </MainDiv>
        </>
    )
}
