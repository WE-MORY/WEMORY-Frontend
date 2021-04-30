import React from 'react'
import Header from '../../HeaderPanel/Header'
import styled from 'styled-components'
import BackHeader from '../../HeaderPanel/BackHeader'
import {useState} from 'react'
import Button from '../../../assets/Button/Button'
import TransitionsModal from './Modal'


const MainDiv = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin: 5vh 0;
    }    
`

const DateDiv = styled.div`
    font-size: 1.5rem;
    font-family: 'Spoqa-Regular';
    /* text-align: center; */

    
`

// input 숨기기 
const PicInput = styled.input`
    
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
`

const PicLabel = styled.label`
    display: flex;
    width: 70vw;
    height: 55vh;
    border: 1px solid black;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin: 10vh 0 ;
    position: relative;
    font-size: 1.3rem;

`
const TextInput = styled.input`
    font-family: "Cafe24";
    font-size: 1.4rem;
    display: block;
    border-style: none;
    border-bottom: 1px solid black;
    width: 80vw;
    height: 6vh;

    &:focus {
        outline: none;
    }

`

const ImgStyle = styled.img`
    position: absolute;
    height: 56vh;
    width: 70vw;
    border-radius: 50px;
`

export default function Create() {
    const [imgBase, setimgBase] = useState("");
    const [imgFile, setimgFile] = useState(null);

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        // 파일이 다 올라왔으면 실행 
        reader.onload = () => {
            // reader 에서 가져온 이미지 base 에 저장 
            const base = reader.result;
            // base 가 true 인 경우 
            if (base) {
                // state 업데이트
                setimgBase(base.toString()); 
                
            } 
        }
        // 업로드 된 파일이 한 개라서 인덱스 0 
        if (event.target.files[0]){
            reader.readAsDataURL(event.target.files[0])
            setimgFile(event.target.files[0]);
        }
    }


    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    
    const daily = () => {
        if (date.getDay() === 0 ) {
            return ("일")
        } else if (date.getDay() === 1 ){
            return("월")
        } else if (date.getDay() === 2 ) {
            return ("화")
        } else if (date.getDay() === 3 ) {
            return ("수")
        } else if (date.getDay() === 4 ) {
            return ("목")
        } else if (date.getDay() === 5 ) {
            return ("금")
        } else {
            return ("토")
        }
    }

    return (
        <>
        <BackHeader />

        <MainDiv>
            <DateDiv>{year} . {month} . {day}  ({daily()})</DateDiv>
            <PicLabel for="imgFile" >이 곳을 터치해 사진을 첨부하세요. </PicLabel>
            <ImgStyle src={imgBase} alt="사진이 안떠요" />
            <PicInput name = "imgFile" type="file" id="imgFile" onChange={handleChangeFile}/>
            <div>
                <TextInput />
                <TextInput />
                <TextInput />
            </div>
            <TransitionsModal />
            {/* <Button Text={"다음 단계로 이동하기"} Width={"80vw"}></Button> */}
        
        </MainDiv>
        </>
    )
}
