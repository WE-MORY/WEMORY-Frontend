import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { WithDrawCheckAPI } from '../../../api/account/account';
import { AccountCreateAPI } from '../../../api/account/account';
import Button from '../../../assets/Button/Button';
import { MAIN_COLOR } from '../../../assets/Colors/Color';

import { ReactComponent as MainLogo } from '../../../assets/Images/MainLogo.svg'
import Input from '../../../assets/Input/Input';


const WithDrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 70%;

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

    button + button {
        margin-top: 10px;
    }
`;

const LogoTitle = styled.p`
    font-family:'Cafe24';
    font-size: 0.8rem;
    &#SignUpText{
        font-family:'Spoqa-Light';
        font-size: 0.8rem;
        margin-top: 5%;
    }
    &#description{
        margin: 15% 0;
        font-size: 1.5rem;
        text-align: center;
        color: ${MAIN_COLOR};
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    min-width: 250px;
    p{
        letter-spacing: 5px;
    }
`;

const AccountWithDraw = () => {

    const history = useHistory();
    const Token = useSelector(state => state.auth.currentToken);
    const [AccountNumber, SetAccountNumber] = useState('');

    const handleAddAccount = async () => {
        // 출금계좌 생성 API 적용 후 => 메인으로 이동
        try{
            const response = await AccountCreateAPI(AccountNumber);
            history.push('/');
        } catch(err){
            alert(err.response.message);
        }
    }

    const handleAuthToken = async () =>{
       const response = await WithDrawCheckAPI(Token);
       if(response.data.account_num !== ''){
            history.push('/');
       }
    }

    useEffect(()=>{
        handleAuthToken();
    }, [])

    return (
        <WithDrawContainer>
            <LogoContainer>
                <MainLogo width="100%" height="100%"/>
                <LogoTitle>추억을 쌓는 통장 이야기</LogoTitle>
            </LogoContainer>
            <LogoTitle id='description'>처음이시군요? <br />출금 계좌를 등록해주세요.</LogoTitle>
            <Input Type="text" Width="70%" Value="우리은행"/>
            <Input Type="text" OnChange={(e)=>{
                SetAccountNumber(e.target.value)
            }} Value={AccountNumber} Width="70%" Hint="계좌 번호를 입력하세요."/>
            <Button OnClick={handleAddAccount} Text="계좌 등록하기"/>
        </WithDrawContainer>
    );
}

export default AccountWithDraw;
