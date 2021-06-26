import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {Link, Redirect} from 'react-router-dom';
import { MAIN_COLOR, TEXT_BLACK } from '../../../assets/Colors/Color';
import BackHeader from '../../HeaderPanel/BackHeader';
import { useSelector } from 'react-redux';


const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited{
    color: #4B5364;
  }
`


const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`;

const ListTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-family: 'Cafe24';
    font-size: 1.8rem;
    margin: 30px 0 0;
`;


const ListSubTitle = styled.h3`
    width: 100%;
    text-align: center;
    font-family: 'Cafe24';
    font-size: 1.2rem;
    margin: 0px 0 30px;
    color: ${MAIN_COLOR};
    strong{
        font-size: 1.5rem;
    }
`;

const ListBox = styled.div`
    width: 100%;
    margin: 20px auto;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0 10px;
    padding: 0 15px;
    ::active {
        transition: .8s;
        background-color: grey;
    }
`;

// 이미지 컨테이너
const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    margin-right: 5px;
`;

const Img = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;
`;

const TextBox = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    min-width: 135px;
    height: 80px;
`;

const SubTitle = styled.p`
    font-family: 'Cafe24';
    font-size: 1.3rem;
    height: 25%;
    margin-bottom: 10px;
`;

const BoxContent = styled.p`
    font-family: 'Cafe24';
    height: 50%;
    width: 60vw;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DatetimeText = styled.span`
    flex: 1;
    font-family: 'Spoqa-Light';
`;

const PostMoneyText = styled.span`
    flex: 1;
    font-family: 'Spoqa-Light';
    text-align: right;
`;

const LineText = styled.div`
    display: flex;
	flex-basis: 100%;
	align-items: center;
	color: ${TEXT_BLACK};
	font-size: 12px;
	margin: 8px 0px;
    ::before,
    ::after{
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 10px;
    }
`;

const data = [
    {
        image: "https://placeimg.com/50/50/any/grayscale",
        title: '귀여운 고양이 낳은 날~',
        content: '새로운 먼치킨이 나왔당!',
        received_money: 10000,
        create_at: "2021-05-01"
    },
    {
        image: "https://placeimg.com/50/50/any/grayscale",
        title: '몽이 똥싼 날',
        content: '유민이한테 혼났다',
        received_money: 10000,
        create_at: "2021-05-02"
    },
    {
        image: "https://placeimg.com/50/50/any/grayscale",
        title: '두부 간식 준 날',
        content: '간식 대신 내 손을 물었다. 마싯다.',
        received_money: 10000,
        create_at: "2021-05-03"
    },
]


export default function List() {

    const userInfo = useSelector(state => state.auth.currentToken);
    const [DataMonth, SetDataMonth] = useState([]);

    const handleDiaryDetail = (id) => {
        
    } 

    const ListRenderingBox = () =>{
        let MonthArray = [];

            data.length > 0 && 
            data.map((item)=> { 
                const month = moment(moment(item.create_at).toDate()).format('YYYY-MM');
                MonthArray = ([
                    ...MonthArray, month  
                ])
                SetDataMonth(Array.from(new Set(MonthArray)));
            })

            DataMonth.map((Month)=>{
                console.log(Month);
                // <LineText>{Month}월 - 180,000원</LineText>
            })


            console.log(DataMonth);
    }

    return (
        // <> 
        // {  userInfo == null ? <Redirect to='/' /> : 
        <>
        <BackHeader />
        <ListContainer>
            <ListTitle>여러분의 발자취를 확인 해보세요.</ListTitle>
            <ListSubTitle><strong>Click</strong>시, 일기 내용을 볼 수 있어요.</ListSubTitle>
            {/* DataSet Form */}
            
            {/* -------------- */}
            <ListBox>
                <LineText>4월 - 12,500원</LineText>
                <ContentBox>
                    <ImgBox>
                        <Img src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_05.png" />
                    </ImgBox>
                    <TextBox>
                        <SubTitle>침대에 누워자는 봄이</SubTitle>
                        <BoxContent>봄이 귀여워서 5000원</BoxContent>
                        <FooterContent>
                            <DatetimeText>4. 29</DatetimeText>
                            <PostMoneyText>+5,000원</PostMoneyText>
                        </FooterContent>
                    </TextBox>
                </ContentBox>
            </ListBox>
        </ListContainer>
        </>
        // }
        // </>
    )
}
