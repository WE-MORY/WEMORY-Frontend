import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../../assets/Colors/Color';
import BackHeader from '../../HeaderPanel/BackHeader';
import {AccountCreateCard, AccountImageCard} from './AccountCard';


const AccountListContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
`;

const PageDescription = styled.p`
    font-family: 'Cafe24';
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 10px;
    font-size: 1.5rem;
    height: 150px;
    strong{
        font-size: 1.2rem;
        color: ${MAIN_COLOR};
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
`;

const TitleText = styled.h1`
    font-size: 1.2rem;
    width: 80%;
    margin: 0 auto;
    
    strong{
        font-size: 1.5rem;
        font-family: 'Spoqa-Regular';
    }
`;

const CardContainer = styled.div`
    display: flex;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

const CardList = styled.ol`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
`;

const ListItem = styled.li`
    width: 100%;
    flex-basis: 50%;
    margin-bottom: 10px;
`;

const ItemDescription = styled.div`
    font-family: 'Spoqa-Regular';
    text-align: center;
    margin-top: 5px;
`;


const TestDataURL = [
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트1"
    },
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트2"
    },
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트3"
    },
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트4"
    },
    {
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트5"
    }
    ,{
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트6"
    }
    ,{
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트7"
    }
    ,{
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트8"
    }
    ,{
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트9"
    }
    ,{
        ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
        description: "테스트10"
    }
];

const AccountList = () => {

    return (
        <>
        <BackHeader />
        <AccountListContainer>
            <PageDescription>
                여러분들의 추억이 담을 일기를 만들어보세요.
                <strong>일기를 클릭하면 선택됩니다.</strong>
            </PageDescription>
            <TitleContainer>
                <TitleText>
                    <strong>하유민</strong> 님의 일기장 계좌
                </TitleText>
            </TitleContainer>
            <CardContainer>
                <CardList>
                    <ListItem>
                        <AccountCreateCard />
                    </ListItem>
                    <ListItem>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg"/>
                        <ItemDescription>통장 이름</ItemDescription>
                    </ListItem>
                </CardList>
            </CardContainer>
            </AccountListContainer>
        </>
    );
}

export default AccountList;
