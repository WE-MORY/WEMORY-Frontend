import React, {useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';
import { UserDiarySearch } from '../../api/diary/diary';
import { WithDrawCheckAPI } from '../../api/account/account';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slider';
import { useSelector } from 'react-redux';
// import Content from './Content';
// import ContentBox from './Content';

// const TestDataURL = [
//     {
//         ImgURL: 'https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg',
//         description: "테스트1"
//     },
//     {
//         ImgURL: '../../../assets/Images/textImg/cat2.png',
//         description: "테스트2"
//     },
// ];

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
    /* width: 90vw;  */
` 

const TextBox =  styled.div`
    text-align: left;
    font-family: 'Spoqa-Regular';
    font-size: 1.5rem;
    margin: 10vh 0 2vh -8vw ;
    padding-top: 5vh;
    width: 85vw;
`

const ImgStyle = styled.div`
    img{
        padding: 2px;
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

const SpanStyle = styled.span`
    display: inline-block;
    font-family: Spoqa-Medium;
    color: black;
    padding-right: 5px;
    &#none_diary{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
        margin-left: 15%;
        font-family: 'Cafe24';
    }
`

const Main = () => {

    const userInfo = useSelector(state=>state.auth.currentToken);
    const DiaryInfo = useSelector(state=>state.diary.cureentDiaryID);

    const [Dataset, SetDataset] = useState([]);
    const RenderList = 
    Dataset.length > 0 &&
    Dataset.map(src=> 
        src.map((item, i) => 
            <img alt="사진이 안 떠요" width="120px" height="120px" key={i} src={item.image}/>
    ));

    const UserDiarycall = async () => {
        let data = [];
        const user = await WithDrawCheckAPI(userInfo);
        console.log(user.data.user_id);
        try {
           const response = await UserDiarySearch(user.data.id);
           console.log(response.data.diary_list);
           data = [...data, response.data.diary_list];
           SetDataset(data);
           console.log(Dataset);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(async () => {
        await UserDiarycall();
    }, []);

    return (
        <>
        { userInfo == null ? <Redirect to='/login' /> :
        <>
            <Header />
            
            <MainDiv>
                <LightLogo height="10vh" width="60vw" />
                <Test>
                    <Circle stroke = {MAIN_COLOR}></Circle>
                </Test>
                <SimpleSlider />

                <TextBox>
                    <SpanStyle>
                        
                    </SpanStyle> 
                    추억들
                </TextBox>
                <ListDiv>
                    <ImgStyle>
                        {RenderList} 
                    </ImgStyle>
                </ListDiv>
            </MainDiv>
        </>
        }
    </>
    );
}

export default Main;