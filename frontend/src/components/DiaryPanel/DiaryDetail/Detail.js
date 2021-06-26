import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
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

const ImgDiv = styled.div`
    background: brown;
    width: 100%;
    height: 150px;
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

    const userInfo = useSelector(state => state.auth.currentToken);

    return (
        <>
        { userInfo == null ? <Redirect to='/login' /> :
        <>
        <BackHeader />

        <MainDiv>
            <DateDiv>2021 . 5 . 3 (월)</DateDiv>
            <ImgDiv>
                <img src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg" alt="img 안 나와요" />
            </ImgDiv>
            <TextDiv>
                <Title>여기는 타이틀 나오는 부분입니다. </Title>

                <Description>여기는 설명이 나오는 부분입니다.</Description>
            </TextDiv>
        </MainDiv>
        </>
        }
        </>
    )
}
