import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Input from '../../../assets/Input/Input';
import Button from '../../../assets/Button/Button';
// import { SUB_COLOR, TEXT_BLACK } from '../../../assets/Colors/Color';
import { ReactComponent as MainLogo } from '../../../assets/Images/MainLogo.svg';
import { PhoneAuthAPI, SignupAPI } from '../../../api/user/user';
import { useHistory } from 'react-router';

import Loader from '../../LoaderPanel/Loader';


const SignupContainer = styled.div`
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
        font-family: 'Spoqa-Regular';
        font-size: 1.5rem;
        width: 70%;
        min-width: 220px;
        margin-top: 20px;
    }

    button + button {
        margin-top: 10px;
    }

    &#tel{
        
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

const AuthNumberContainer = styled.div`
    display: flex;
    margin-top: 10px;
    min-width: 215px;
    width: 70%;
    input{ 
        border-radius: 30px 0 0 30px;
        min-width: 0;
        width: 70%;
        :disabled{
            background-color: #e4e4e4;
        }
    }
    button{
        border-radius: 0px 30px 30px 0px;
        font-size: 0.5rem;
        min-width: 0;
        margin:0;
        width: 30%;
        height: 40px;
    }
`;

const Signup = () => {

    const histroy = useHistory();
    const inputRef = useRef(null);

    const [Email, SetEmail] = useState("");
    const [PW, SetPW] = useState("");
    const [PW2, SetPW2] = useState("");
    const [Name, SetName] = useState("");
    const [Phone, SetPhone] = useState("");
    const [AuthNumber, SetAuthNumber] = useState("");

    const [IsClick, SetIsClick] = useState(false);
    const [IsLoading, SetIsLoading] = useState(false);

    const handleEmailchange = (e) => {
        SetEmail(e.target.value);
    }
    const handlePWchange = (e) => {
        SetPW(e.target.value);
    }
    const handlePW2change = (e) => {
        SetPW2(e.target.value);
    }
    const handleNamechange = (e) => {
        SetName(e.target.value);
    }
    const handlePhonechange = (e) => {
        SetPhone(e.target.value);
    }
    const handleAuthchange =  (e) => {
        SetAuthNumber(e.target.value);
    }

    const handleAuthPhone = async (e) =>{
        e.preventDefault();
        try{ 
            const response = await PhoneAuthAPI();
            console.log(response)
            const AUTH_TOKEN = response;
            SetIsClick(true);
            inputRef.current.value = AUTH_TOKEN;
        } catch(err){
            alert(err);
        }
    }

    const handleAuthCheck = (e) =>{
        e.preventDefault();
        inputRef.current.disabled = true;
    }


    // ???????????? API
    const handlesignup = async () => {
        SetIsLoading(true);
        try{
            const response = await SignupAPI(Email, Name, PW, PW2, Phone);
            SetIsLoading(false);
            histroy.push('/login');
        }catch(err){
            const msg = err.response.data.message;
            alert(msg);
        }
    }

    return (
        <>
        { IsLoading ? <Loader /> :
        <SignupContainer>
           <LogoContainer>
                <MainLogo width="100%" height="100%"/>
                <LogoTitle>????????? ?????? ?????? ?????????</LogoTitle>
            </LogoContainer> 
            <Input Type="text" OnChange={handleEmailchange} value={Email} Hint="???????????? ??????????????????." Width="70%" />
            <Input Type="text" OnChange={handleNamechange} value={Name} Hint="????????? ??????????????????." Width="70%"/>
            <Input Type="password" OnChange={handlePWchange} value={PW} Hint="??????????????? ??????????????????." Width="70%" />
            <Input Type="password" OnChange={handlePW2change} value={PW2} Hint="??????????????? ?????? ?????? ??????????????????." Width="70%"/>
            <AuthNumberContainer>
                <Input id="tel" Type="tel"  OnChange={handlePhonechange} value={Phone} Hint="????????? ????????? ??????????????????." /> 
                <Button OnClick={handleAuthPhone} Text="???????????? ??????" />  
            </AuthNumberContainer>
            {   
                IsClick ? 
                <AuthNumberContainer>
                    <Input enable Type="text" Ref={inputRef} OnChange={handleAuthchange} value={AuthNumber} Hint="??????????????? ??????????????????." Width="70%"/>
                    <Button OnClick={handleAuthCheck} Text="???????????? ??????" />  
                </AuthNumberContainer> : null
            }
            <Button OnClick={handlesignup} Text="????????????" />            
        </SignupContainer>
        }
        </>
    );
}

export default Signup;
