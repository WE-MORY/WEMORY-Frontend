// 4. 29.
// 민석 :: Button 컴포넌트 설정
// Props - {Text} 를 통하여 Btn Value TEXT 설정

import React from 'react';
import {TEXT_WHITE, MAIN_COLOR} from '../Colors/Color';
import styled from 'styled-components';

const Btn = styled.button`
    font-family: "Spoqa-Regular";
    width: 240px;
    height: 40px;
    border-radius: 30px;
    background-color: ${props=>props.back_color || MAIN_COLOR};
    color: ${TEXT_WHITE};
`;

const Button = ({Text}) => {
    return (
        <Btn>{Text}</Btn>
    );
}

export default Button;
