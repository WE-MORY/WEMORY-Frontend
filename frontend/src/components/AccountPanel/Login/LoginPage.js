import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAuthToken } from '../../../redux/actions/Auth_action';

import styled from 'styled-components';
import Input from '../../../assets/Input/Input';
import Button from '../../../assets/Button/Button';
import { SUB_COLOR } from '../../../assets/Colors/Color';
import { ReactComponent as MainLogo } from '../../../assets/Images/MainLogo.svg';

import { TokenAPI } from '../../../api/token/auth';
import { WithDrawCheckAPI } from '../../../api/account/account';
import Loader from '../../LoaderPanel/Loader';

const LoginContainer = styled.div`
    display: flex;
    flex-direction:column;
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
        font-family: 'Spoqa-Regular';
        font-size: 1.5rem;
        width: 70%;
        min-width: 220px;
        margin-top: 20px;
    }
    
    button + button{
        margin-top: 10px;
    }
`;

const LogoTitle = styled.p`
    font-family:'Cafe24';
    font-size: 0.8rem;
    &#SignUpText{
        font-family:'Spoca-Light';
        font-size: 0.8rem;
        margin-top: 5%;
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
    margin-bottom: 15%;

    p{
        letter-spacing: 5px;
    }
`;

const LoginPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [ID, SetID] = useState("");
    const [PW, SetPW] = useState("");
    const [isLoading, SetisLoading] = useState(false);
    const user_auth = useSelector(state => state.auth.currentToken);

    const handleIDchange = (e) => {
        SetID(e.target.value);
    }
    const handlePWchange = (e) => {
        SetPW(e.target.value);
    }
    
    // 로그인 Logic
    const handleLogin = async (e) => {
        e.preventDefault();
        SetisLoading(true); // 로그인 중
        try {
            const response = await TokenAPI(ID, PW);
            console.log(response)   
            const userToken = response.data.token;
            dispatch(setCurrentAuthToken(userToken));
            history.push('/accountwithdraw');       
        } catch (err) {
            const msg = err.response.data.message
            alert(msg);
            SetisLoading(false);
        }
    }


    return (
        <>
        { 
            isLoading ? 
            <Loader /> :
            <LoginContainer>
                <LogoContainer>
                    <MainLogo width="100%" height="100%"/>
                    <LogoTitle>추억을 쌓는 통장 이야기</LogoTitle>
                </LogoContainer>
                <Input Type="text" OnChange={handleIDchange} value={ID} Hint="아이디를 입력해주세요." Width="70%" />
                <Input Type="password" OnChange={handlePWchange} value={PW} Hint="비밀번호를 입력해주세요." Width="70%" />
                <Button id="login" OnClick={handleLogin} Text="로그인" />
                <Button id="signup" OnClick={()=>history.push('/signup')} Text="회원가입" Color={SUB_COLOR}/>
                <LogoTitle id="SignUpText">아직 계정이 없으신가요?</LogoTitle>
            </LoginContainer>
        }
        </>
    );
}

export default LoginPage;
