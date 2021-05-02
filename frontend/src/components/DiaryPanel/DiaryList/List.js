import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import BackHeader from '../../HeaderPanel/BackHeader';
// import '../../../assets/Images/textImg/cat.png'
const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`;

const ListBox = styled.div`
    width: 100%;
    height: 50px;
`;

const SubHeader = styled.div`
    display: flex;
    height: 20px;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
`;

const MonthText = styled.span`
    font-family: 'Spoqa-Regular';
    font-size: 1.3rem;
`;

const TotalPrice = styled.span`
    font-family: 'Spoqa-Regular';
    font-size: 1.1rem;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    padding: 0 15px;
    border-bottom: 1px solid #e4e4e4;
`;

// 이미지 컨테이너
const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    border: 1px solid black;
`;

const Img = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 20px;
    object-fit: cover;
`;

const TextBox = styled.div`
    flex: 1;
    border: 1px solid black;
    height: 80px;
`;

const data = [
    {
        image: "/../../../assets/Images/textImg/cat1.png",
        title: '귀여운 고양이 낳은 날~',
        content: '새로운 먼치킨이 나왔당!',
        received_money: 10000,
        create_at: "2021-05-01"
    },
    {
        image: "../../../assets/Images/textImg/cat2.png",
        title: '몽이 똥싼 날',
        content: '유민이한테 혼났다',
        received_money: 10000,
        create_at: "2021-05-02"
    },
    {
        image: "../../../assets/Images/textImg/cat3.png",
        title: '두부 간식 준 날',
        content: '간식 대신 내 손을 물었다. 마싯다.',
        received_money: 10000,
        create_at: "2021-05-03"
    },
]


export default function List() {

    const ListRenderingBox = () =>{
        
    }

    return (
        <>
        <BackHeader />
        <ListContainer>
            <ListBox>
                <SubHeader>
                    <MonthText>5월</MonthText>
                    <TotalPrice>총 180,000원</TotalPrice>
                </SubHeader>
                <ContentBox>
                    <ImgBox>
                        <img src={require("../../../assets/Images/textImg/cat3.png")} />
                    </ImgBox>
                    <TextBox></TextBox>
                </ContentBox>
            </ListBox>
        </ListContainer>
        </>
    )
}
