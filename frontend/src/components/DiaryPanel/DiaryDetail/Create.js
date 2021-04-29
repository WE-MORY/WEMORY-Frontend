import React from 'react'
import Header from '../../HeaderPanel/Header'
import styled from 'styled-components'
import BackHeader from '../../HeaderPanel/BackHeader'



const MainDiv = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
`

const DateDiv = styled.div`
    font-size: 1.8rem;
    font-family: 'Spoqa-Regular';
    text-align: center;

    
`

const PicInput = styled.input`
`
const TextInput = styled.input`
    border-style: none;
    border-bottom: 1px solid black;
    width: 80vw;

    &:focus {
        outline: none;
    }
`

export default function Create() {
    return (
        <>
        <BackHeader />

        <MainDiv>
            <DateDiv>2021 . 04 . 30</DateDiv>
            <PicInput />

            <TextInput />
            <TextInput />
            <TextInput />
        </MainDiv>
        </>
    )
}
