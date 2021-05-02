import React from 'react';
import styled from 'styled-components';
import BackHeader from '../../HeaderPanel/BackHeader';
import {AccountCreateCard, AccountImageCard} from './AccountCard';

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`;

const TitleText = styled.h1`
    font-size: 2rem;
    width: 80%;
    margin: 0 auto;
    
    strong{
        font-size: 2.2rem;
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
                    <ListItem>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg"/>
                        <ItemDescription>통장 이름</ItemDescription>
                    </ListItem>
                    <ListItem>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg"/>
                        <ItemDescription>통장 이름</ItemDescription>
                    </ListItem>
                    <ListItem>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg"/>
                        <ItemDescription>통장 이름</ItemDescription>
                    </ListItem>
                </CardList>
            </CardContainer>
        </>
    );
}

export default AccountList;
