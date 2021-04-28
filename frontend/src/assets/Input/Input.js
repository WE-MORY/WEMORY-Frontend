import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    width: 240px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #77A6FF;
    display: inline-block;
    padding-left: 10px;
    
    &:focus{
        outline-style: none;
    }
    `

const Input = () => {
    return (
        <>
            <InputStyle placeholder="아이디를 입력하세요. "/>  
        </>
    );
}

export default Input;
