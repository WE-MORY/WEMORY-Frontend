import React, {useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../HeaderPanel/Header';
import {ReactComponent as LightLogo} from '../../assets/Images/MainLogoLight2.svg';
import styled from 'styled-components';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import { MAIN_COLOR } from '../../assets/Colors/Color';
import { PostDiarySearch } from '../../api/post/post';
import { WithDrawCheckAPI } from '../../api/account/account';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import ImageList from './ImageList';

const MainDiv = styled.div`
    display: flex;
    background-color: white;
    height: auto;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2vh; */
    overflow-x: hidden;
`


const Main = () => {

    const userInfo = useSelector(state=>state.auth.currentToken);
    const DiaryInfo = useSelector(state=>state.diary.cureentDiaryID);

    const [Userinfo, SetUserinfo] = useState();
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
        console.log(user.data);
        SetUserinfo(user.data);
        try {
           const response = await PostDiarySearch(DiaryInfo);
           console.log(response.data);
           data = [...data, response.data];
           SetDataset(data);

        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        UserDiarycall();
    }, []);

    return (
        <>
        {/* { userInfo == null ? <Redirect to='/login' /> :
        <>  
            <MainDiv>

                { DiaryInfo > 0 ? 
                <TextBox><SpanStyle>일기를 선택해주세요.</SpanStyle></TextBox> : 
                <>
                <TextBox>
                    <SpanStyle>
                        김아무개
                    </SpanStyle> 
                    추억들
                </TextBox>
                </>
                }   
            </MainDiv>
        </>
        } */}
    </>
    );
}

export default Main;