import React, {useRef} from 'react'
import styled from 'styled-components'
import BackHeader from '../../HeaderPanel/BackHeader'
import {useState} from 'react'
import TransitionsModal from './Modal'


const ImgBox = styled.button`
    width: 100%;
    min-width: 300px;
    min-height: 300px;
    /* border: 1px solid black; */
    /* border-radius: 30px; */
    background-color: white;
    background: url(${props=>props.Imgsrc}) no-repeat;
    background-size: cover;
    z-index: 10;
`

const MainDiv = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin: 5vh 0;
    }

    span {
        font-size: 1.5rem;
        opacity: .5;
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
    /* display: flex;
    width: 70vw;
    height: 40vh; */
    border: 1px solid black;
    border-radius: 50px;
    /* margin: 10vh 0 5vh 0; */
    position: relative;
    font-size: 1.1rem; 
    padding: 10px;

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
    /* position: absolute; */

    height: 200px;
    width: 200px;
    margin: 5vh 0;
    /* border-radius: 50px; */
`

export default function Create() {

    const InputRef = useRef(null); // Input file DOM 가르키기
    // const history = useHistory();

    const [imgURL, SetimgURL] = useState("");
    const [imgFile, SetimgFile] = useState(null);

    // const [accountnumber, Setaccountnumber] = useState('');
    // const [accountTitle, SetaccountTitle] = useState('');




    const handleSelectImg = (e) => {
        e.preventDefault();
        InputRef.current.click();
    }

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        // 파일이 다 올라왔으면 실행 
        reader.onload = () => {
            // reader 에서 가져온 이미지 base 에 저장 
            const base = reader.result;
            // base 가 true 인 경우 
            if (base) {
                // state 업데이트
                SetimgURL(base.toString()); 
            } 
        }
        // 업로드 된 파일이 한 개라서 인덱스 0 
        if (event.target.files[0]){
            reader.readAsDataURL(event.target.files[0])
            SetimgFile(event.target.files[0]);
        }
    }
    // const [imgBase, setimgBase] = useState("");
    // const [imgFile, setimgFile] = useState(null);

    // const handleChangeFile = (event) => {
    //     let reader = new FileReader();

    //     // 파일이 다 올라왔으면 실행 
    //     reader.onload = () => {
    //         // reader 에서 가져온 이미지 base 에 저장 
    //         const base = reader.result;
    //         // base 가 true 인 경우 
    //         if (base) {
    //             // state 업데이트
    //             setimgBase(base.toString()); 
                
    //         } 
    //     }
    //     // 업로드 된 파일이 한 개라서 인덱스 0 
    //     if (event.target.files[0]){
    //         reader.readAsDataURL(event.target.files[0])
    //         setimgFile(event.target.files[0]);
    //     }
    // }


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
            <ImgBox Imgsrc={imgURL} onClick={handleSelectImg}>
                <span>터치해서 사진을 첨부하세요. </span>
            </ImgBox>
            {/* <PicLabel for="imgFile" >이 곳을 클릭해 사진을 첨부하세요.</PicLabel> */}
            <PicInput ref={InputRef} id="imgFile" type="file"  accept="image/png, image/jpeg"  onChange={handleChangeFile}/>
            <div>
                <TextInput />
                <TextInput />
                <TextInput />
            </div>
            <TransitionsModal />        
        </MainDiv>
        </>
    )
}
