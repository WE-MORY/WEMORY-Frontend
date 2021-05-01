import React from 'react'
import styled from 'styled-components'
import {ReactComponent as BackBtn} from '../../assets/Images/backbtn.svg'

const HeaderDiv = styled.div`
    height: 8vh;
    width: 100%;
    position: fixed;
`
const BtnStyle = styled.div`
    position: absolute;
    top: 3vh;
    left: 5vw;
`


export default function BackHeader() {
    return (
        <>
            <HeaderDiv>
                <BtnStyle>
                    <BackBtn width="20" height="20"/>
                </BtnStyle>
            </HeaderDiv>
        </>
    )
}
