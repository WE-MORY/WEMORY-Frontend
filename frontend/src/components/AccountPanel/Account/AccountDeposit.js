import React, {useRef, useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../assets/Button/Button';
import { MAIN_COLOR, TEXT_WHITE } from '../../../assets/Colors/Color';
import { ReactComponent as MainLogo } from '../../../assets/Images/MainLogo.svg'
import Input from '../../../assets/Input/Input';
import BackHeader from '../../HeaderPanel/BackHeader';

import {AccountCreateAPI, WithDrawCheckAPI} from '../../../api/account/account';
import {DiaryCreateAPI} from '../../../api/account/account';
import { useSelector } from 'react-redux';

const DepositContainer = styled.div`
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
        margin-top: 30px;
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

const InputFile = styled.input`
    &[type="file"] {
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0; 
        margin: -1px; 
        overflow: hidden; 
        clip:rect(0,0,0,0); 
        border: 0;
    }
`;

const SelectImgBox = styled.button`
    width: 70%;
    min-width: 200px;
    min-height: 200px;
    border: 1px solid ${MAIN_COLOR};
    border-radius: 50px;
    background-color: white;
    background: url(${props=>props.Imgsrc}) no-repeat;
    background-size: cover;
    
    :active{
                background-color:${MAIN_COLOR};
                color:${TEXT_WHITE};
                transition: .3s;
            }
    span{
        position: relative;
        top: 0;
        left: 0;
        opacity: .5;
        font-size: 1rem;
    }
`;


const AccountDeposit = () => {

    const InputRef = useRef(null); // Input file DOM ????????????
    const history = useHistory();

    const [imgURL, SetimgURL] = useState("");
    const [imgFile, SetimgFile] = useState(null);

    const [accountnumber, Setaccountnumber] = useState('');
    const [accountTitle, SetaccountTitle] = useState('');

    const userToken = useSelector(state=>state.auth.currentToken);


    const handleSelectImg = (e) => {
        e.preventDefault();
        InputRef.current.click();
    }

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        // ????????? ??? ??????????????? ?????? 
        reader.onload = () => {
            // reader ?????? ????????? ????????? base ??? ?????? 
            const base = reader.result;
            // base ??? true ??? ?????? 
            if (base) {
                // state ????????????
                SetimgURL(base.toString()); 
            } 
        }
        // ????????? ??? ????????? ??? ????????? ????????? 0 
        if (event.target.files[0]){
            reader.readAsDataURL(event.target.files[0])
            SetimgFile(event.target.files[0]);
        }
    }

    const handleAddAccount = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        // userinfo ?????? 
        const user = await WithDrawCheckAPI(userToken);
        console.log(user.data);
        fd.append('title', accountTitle);
        fd.append('user', user.data.id);
        fd.append('account_num', accountnumber);
        fd.append('image', imgFile);
        fd.append('bank', "????????????");
        try{
            // ???????????? ?????? API??????
            // const response = await DiaryCreateAPI(fd);
            const response = await AccountCreateAPI;
            console.log(response);
            history.push('/');
        }catch(err){
            alert(err);
        }
; 
        // ?????? ?????? API + Redux State ??? ?????? ?????? ?????? + ???????????? ??????
    }
    

    return (
        <>
        { userToken == null ? <Redirect to='/' /> : 
        <>
        <BackHeader />
            <DepositContainer>
                <LogoContainer>
                    <MainLogo width="100%" height="100%"/>
                    <LogoTitle>????????? ?????? ?????? ?????????</LogoTitle>
                </LogoContainer>
                <SelectImgBox Imgsrc={imgURL} onClick={handleSelectImg}>
                    <span>???????????? ?????? ?????? ????????? ???????????????!</span>
                </SelectImgBox>
                <LogoTitle id='description'>?????? ????????? ?????? ??? ????????? ??????????????????.</LogoTitle>
                <InputFile ref={InputRef} id="imgFile" type="file" onChange={handleChangeFile} accept="image/png, image/jpeg" />

                {/* Test??? ??????????????? ?????? */}
                <Input Type="text" Width="70%" Value="????????????"/>
                <Input Type="text" OnChange={(e)=>{
                    Setaccountnumber(e.target.value);
                }}Width="70%" Value={accountnumber} Hint="?????? ????????? ???????????????."/>
                <Input Type="text" OnChange={(e)=>{
                    SetaccountTitle(e.target.value);
                }}Width="70%" Value={accountTitle} Hint="?????? ????????? ???????????????."/>
                <Button OnClick={handleAddAccount} Text="?????? ????????????"/>
            </DepositContainer>
            </>
        }
        </>
    );
}

export default AccountDeposit;
