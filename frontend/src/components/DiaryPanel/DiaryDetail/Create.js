import React from 'react'
import Header from '../../HeaderPanel/Header'
import styled from 'styled-components'

const MainDiv = styled.div`

`

const DateDiv = styled.div`
`

const PicInput = styled.input`
`


export default function Create() {
    return (
        <>
        <BackHeader>헤더부분</BackHeader>
        <MainDiv>
            <DateDiv>2021 . 04 . 30</DateDiv>
            <PicInput />
            <TextInput />
            <NextBtn />
        </MainDiv>
        </>
    )
}
