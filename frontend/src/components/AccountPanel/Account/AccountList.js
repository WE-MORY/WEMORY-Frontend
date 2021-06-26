import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {UserDiarySearch} from '../../../api/diary/diary';
import {WithDrawCheckAPI} from '../../../api/account/account';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_COLOR } from '../../../assets/Colors/Color';
import BackHeader from '../../HeaderPanel/BackHeader';
import {AccountCreateCard, AccountImageCard} from './AccountCard';
import {setCurrentDiaryID} from '../../../redux/actions/Diary_action';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited{
    color: #4B5364;
  }
`


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


const AccountList = () => {

    const [Dataset, SetDataset] = useState([]);
    const [User, SetUser] = useState(null);
    const userInfo = useSelector(state=>state.auth.currentToken);
    const diaryID = useSelector(state=>state.diary.currentDiaryID);
    const dispatch = useDispatch();
    const history = useHistory();

    
    const RenderDiaryList = async () => {
        const user = await WithDrawCheckAPI(userInfo);
        SetUser(user);
        try {
           const response = await UserDiarySearch(user.data.id);

        } catch(err){
            console.log(err);
        }
    }

    const handleChoiceDiary = (diary_id) => {
        dispatch(setCurrentDiaryID(diary_id));
        history.push('/');
    }

//     const renderList = () =>{
//             Dataset.length > 0 &&
//             Dataset.map(n => 
//                 n.map(m => 
//                     <ListItem>
//                         <StyledLink onClick={handleChoiceDiary(m.id)}>
//                         <AccountImageCard backgroundImg={m.image}/>
//                         <ItemDescription>{m.title}</ItemDescription>
//                         </StyledLink>
//                     </ListItem>
//   ))};

    

    useEffect(()=>{
        // RenderDiaryList();
    },[])

    return (
        <>
        { userInfo == null ? <Redirect to='/login' /> :
        <>
        <BackHeader />
        <AccountListContainer>
            <PageDescription>
                여러분들의 추억이 담을 일기를 만들어보세요.
                <strong>일기를 클릭하면 선택됩니다.</strong>
            </PageDescription>
            <TitleContainer>
                <TitleText>
                    <strong>{userInfo.name}</strong> 님의 일기장 계좌
                </TitleText>
            </TitleContainer>
            <CardContainer>
                <CardList>
                    <ListItem>
                        <AccountCreateCard />
                    </ListItem>
                    <ListItem>
                        <StyledLink onClick={()=>handleChoiceDiary(2)}>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/html2.png"/>
                        <ItemDescription>HTML 후원하기</ItemDescription>
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink onClick={()=>handleChoiceDiary(3)}>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/css1.png"/>
                        <ItemDescription>HTML 후원하기</ItemDescription>
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink onClick={()=>handleChoiceDiary(4)}>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/css1.png"/>
                        <ItemDescription>CSS 교재 돈 모으기</ItemDescription>
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink onClick={()=>handleChoiceDiary(6)}>
                        <AccountImageCard backgroundImg="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/cat1.png"/>
                        <ItemDescription>옹이 생일 선물 사주기</ItemDescription>
                        </StyledLink>
                    </ListItem>
                </CardList>
            </CardContainer>
            </AccountListContainer>
            </>
            }
        </>
    );
}

export default AccountList;
