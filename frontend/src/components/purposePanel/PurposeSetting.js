import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Lottie from 'react-lottie';
import piggy_bank from '../../assets/Lottie/piggy_bank.json';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BackHeader from '../../components/HeaderPanel/BackHeader';
import Button from '../../assets/Button/Button';
import Input from '../../assets/Input/Input';

import { GoalCreateAPI } from '../../api/goal/goal';
import { useSelector } from 'react-redux';

const PurPoseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 80%;

    input{
        min-width: 200px;
    }

    input + input{
        margin-top: 10px;
    }

    button{ 
        width: 70%;
        min-width: 220px;
        margin-top: 20px;
    }
`;

const LogoTitle = styled.p`
    font-family:'Cafe24';
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 40px;

    &#SignUpText{
        font-family:'Spoqa-Light';
        font-size: 0.8rem;
        margin-top: 5%;
    }
`;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: piggy_bank,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const PiggyBank = styled.div`
    margin-bottom: 30px;
`;

const PurposeSetting = () => {

    const [title, SetTitle] = useState();
    const [money, SetMoney] = useState();
    
    const userInfo= useSelector(state=>state.auth.currentToken);
    const history = useHistory();
    
    const handleSubmitSetting = async (e) => {
        e.preventDefault();
        try{
            const response = await GoalCreateAPI(money, title,  '1');
            alert("목표가 생성 되었습니다.");
            history.push('/');
        } catch(err){
            alert(err);
        }
        // 목표 설정 생성 API (title/money) 
    } 
    return (
        <>
        { userInfo == null ? <Redirect to='/login' /> :
        <>
        <BackHeader />
        <PurPoseContainer>
        <PiggyBank>
            <Lottie options={defaultOptions} height={200} width={200} />
        </PiggyBank>
            <LogoTitle>어떤 추억을 쌓으실 건가요?<br />목표를 설정하여 도전 해보세요!</LogoTitle>
            <Input Type="text" OnChange={(e)=>{SetTitle(e.target.value)}} value={title} Hint="목표 타이틀을 적어주세요." Width="70%" />
            <Input Type="text" OnChange={(e)=>{SetMoney(e.target.value)}} value={money} Hint="목표 금액을 설정해주세요." Width="70%"/>
            <Button OnClick={handleSubmitSetting} Text="설정하기" />     
        </PurPoseContainer>
        </>
        }
        </>
    );
}

export default PurposeSetting;
