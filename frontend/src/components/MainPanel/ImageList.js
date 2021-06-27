import React from 'react'
import styled from 'styled-components'

const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* width: 90vw;  */
` 
const ImgStyle = styled.div`
    img{
        padding: 2px;
    }
`
const SpanStyle = styled.span`
    display: inline-block;
    font-family: Spoqa-Medium;
    color: black;
    padding-right: 5px;
    &#none_diary{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
        margin-left: 15%;
        font-family: 'Cafe24';
    }
`

const TextBox =  styled.div`
    text-align: left;
    font-family: 'Spoqa-Regular';
    font-size: 1.5rem;
    margin: 10vh 0 2vh -8vw ;
    padding-top: 5vh;
    width: 85vw;
`

function ImageList() {
    return (
        <>
            <TextBox>
                    <SpanStyle>
                        김아무개
                    </SpanStyle> 
                    추억들
                </TextBox>
            <ListDiv>
                
                <ImgStyle>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_03.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_02.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_04.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_05.png"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_06.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788_07.jpg"/>
                    <img alt="사진이 안 떠요" width="120px" height="120px" src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20210503_070111788.jpg"/>
                </ImgStyle>
            </ListDiv>
        </>
    )
}

export default ImageList
