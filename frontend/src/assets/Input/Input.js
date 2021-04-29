import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    font-family: 'Spoca-Light';
    font-size: 1.2rem;

    /* 커서 삭제 */
    color: transparent;
    text-shadow: 0 0 0 black;

    width: ${props=>props.width || '100%'};
    height: 40px;
    border-radius: 30px;
    border: 1px solid #77A6FF;
    display: inline-block;
    padding-left: 5%;
    
    &:focus{
        border: 2px solid #77A6FF;
        outline-style: none;
    }
    `

const Input = ({Width, Hint}) => {
    return (
            <InputStyle width={Width} placeholder={Hint}/>  
    );
}

export default Input;
