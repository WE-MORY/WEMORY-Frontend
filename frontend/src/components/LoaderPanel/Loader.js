import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import {MAIN_COLOR} from '../../assets/Colors/Color';
const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoadingText = styled.span`
    font-size: 1.5rem;
    letter-spacing: 2px;
`;


const Loader = () => {
    return (
        <LoadingContainer>
            <ReactLoading
            type={"spin"}
            color={MAIN_COLOR}
            height={"30%"}
            width={"30%"}/>

            <LoadingText>
                로딩중입니다...
            </LoadingText>
        </LoadingContainer>
    );
}

export default Loader;
