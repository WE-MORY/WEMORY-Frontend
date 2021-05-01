import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Button from '../../../assets/Button/Button';
import { MAIN_COLOR, TEXT_WHITE } from '../../../assets/Colors/Color';
import { ReactComponent as MainLogo } from '../../../assets/Images/MainLogo.svg'
import Input from '../../../assets/Input/Input';

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
    /* background: url("${props=>props.Imgsrc}") no-repeat; */
    background-size: contain;
    
    :active{
                background-color:${MAIN_COLOR};
                color:${TEXT_WHITE};
                transition: .3s;
            }
    span{
        position: relative;
        top: 0;
        left: 0;
        font-size: 1rem;
        strong{
            color: ${MAIN_COLOR};
            font-size: 2rem;
        }
    }
`;


const AccountDeposit = () => {

    const InputRef = useRef(null); // Input file DOM 가르키기
    const [imgURL, SetimgURL] = useState("");


    const handleSelectImg = (e) => {
        e.preventDefault();
        InputRef.current.click();
    }

    const handleChangeFile = (e) => {
        let reader = new FileReader();
        // 파일이 다 올라왔으면 실행 
        reader.onload = () => {
            // reader 에서 가져온 이미지 base 에 저장 
            const base = reader.result;
            // base 가 true 인 경우 
            if (base) {
                // state 업데이트
                console.log(base.toString());
                SetimgURL(base.toString()); 
            } 
            if (e.target.files[0]){
                const result = reader.readAsDataURL(e.target.files[0])
                console.log(result);
            }
        }
    }

    const handleAddAccount = (e) => {
        e.preventDefault();
        
    }
    

    return (
        <DepositContainer>
            <LogoContainer>
                <MainLogo width="100%" height="100%"/>
                <LogoTitle>추억을 쌓는 통장 이야기</LogoTitle>
            </LogoContainer>
            <SelectImgBox Imgsrc={imgURL} onClick={handleSelectImg}>
                <span><strong>CLICK</strong> <br/>통장 일기 커버를 등록하세요!</span>
            </SelectImgBox>
            <LogoTitle id='description'>통장 일기로 등록 할 계좌를 입력해주세요.</LogoTitle>
            <InputFile ref={InputRef} type="file" onChange={handleChangeFile} accept="image/png, image/jpeg" />
            {/* Test용 우리은행만 지정 */}
            <Input Type="text" Width="70%" Value="우리은행"/>
            <Input Type="text" Width="70%" Hint="계좌 번호를 입력하세요."/>
            <Input Type="text" Width="70%" Hint="일기 별칭을 지어주세요."/>
            <Button OnClick='' Text="계좌 등록하기"/>
        </DepositContainer>
    );
}

export default AccountDeposit;
