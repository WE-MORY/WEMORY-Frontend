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
`;

const ListItem = styled.li`
    width: 100%;
    flex-basis: 50%;
    margin-bottom: 30px;
`;

const ItemDescription = styled.div`
    font-family: 'Spoqa-Regular';
    text-align: center;
    margin-top: 5px;
`;


const TestDataURL = [
    {
        ImgURL: '../../../assets/Images/textImg/cat1.png',
        description: "테스트1"
    },
    {
        ImgURL: '../../../assets/Images/textImg/cat2.png',
        description: "테스트2"
    },
    {
        ImgURL: '../../../assets/Images/textImg/cat3.png',
        description: "테스트3"
    },
    {
        ImgURL: '../../../assets/Images/textImg/cat4.png',
        description: "테스트4"
    },
    {
        ImgURL: '../../../assets/Images/textImg/cat5.png',
        description: "테스트5"
    }
    ,{
        ImgURL: '../../../assets/Images/textImg/cat6.png',
        description: "테스트6"
    }
    ,{
        ImgURL: '../../../assets/Images/textImg/cat7.png',
        description: "테스트7"
    }
    ,{
        ImgURL: '../../../assets/Images/textImg/cat8.png',
        description: "테스트8"
    }
    ,{
        ImgURL: '../../../assets/Images/textImg/cat9.png',
        description: "테스트9"
    }
    ,{
        ImgURL: '../../../assets/Images/textImg/cat10.png',
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
                        <AccountImageCard backgroundImg={TestDataURL[0].ImgURL}/>
                        <ItemDescription>{TestDataURL[0].description}</ItemDescription>
                    </ListItem>
                    <ListItem>
                        <AccountImageCard backgroundImg={TestDataURL[1].ImgURL}/>
                        <ItemDescription>{TestDataURL[1].description}</ItemDescription>
                    </ListItem>
                </CardList>
            </CardContainer>
        </>
    );
}

export default AccountList;
