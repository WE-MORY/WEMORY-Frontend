// 4. 29.
// 민석 :: Button 컴포넌트 설정
// Props - {Text} 를 통하여 Btn Value TEXT 설정

import React from 'react';
import {TEXT_WHITE, MAIN_COLOR, SUB_COLOR} from '../Colors/Color';
import styled from 'styled-components';

const Btn = styled.button`
    font-family: "Spoqa-Regular";
    width: ${props=>props.width || '100%'};
    height: 40px;
    border-radius: 30px;
    background-color: ${props=>props.color || MAIN_COLOR};
    color: ${TEXT_WHITE};

    &:hover{
        transition: 0.3s;
        background-color: ${
            (props) => props.color===SUB_COLOR 
            ? MAIN_COLOR : SUB_COLOR
        };
    }
`;

const Button = ({Width, Color, Text}) => {
    return (
        <Btn width={Width} color={Color}>{Text}</Btn>
    );
}

export default Button;
