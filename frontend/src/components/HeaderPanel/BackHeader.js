import React, {useEffect} from 'react';
import styled from 'styled-components';
// import {useHistory} from 'react-router-dom';
import {ReactComponent as BackBtn} from '../../assets/Images/backbtn.svg';

const HeaderDiv = styled.div`
    height: 8vh;
    width: 100%;
    background-color: rgb(255,255,255);
    /* position: fixed; */
`
const BtnStyle = styled.div`
    position: absolute;
    top: 3vh;
    left: 5vw;
`


export default function BackHeader() {
    // const History = ({history}) => {
    //     const goBack = () => {
    //         history.goBack();
    //     }

    // }
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
