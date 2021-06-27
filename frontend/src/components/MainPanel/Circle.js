import React from 'react'
import styled from 'styled-components'
import { MAIN_COLOR } from '../../assets/Colors/Color';

const CircleBox = styled.div`
    top: 25vh;
    position: absolute;

    svg{
        stroke-dasharray: 100; /*이 값은 path의 길이와 동일합니다*/
        stroke-dashoffset: 100;
        animation: dash 1.3s linear;
        animation-fill-mode: forwards;
        
        @keyframes dash {
        0% {
            stroke-dashoffset: 100;
        }
        100% {
             stroke-dashoffset: 0;
        }
    }
}
`

function Circle() {
    return (
        <CircleBox>
            <Circle stroke = {MAIN_COLOR}></Circle>
        </CircleBox>
    )
}

export default Circle
