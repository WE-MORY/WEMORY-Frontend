// import { styled } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// 스타일
const BorderDiv = styled.div `
    height: 100%;
    border-right: 1px solid black;
`
const MenuBtn = styled.div `
    height: 50px; 
    width: 80px;
    z-index: 1;
    background-color: blue;
    color: white;
`

// 사이드
const Side = ({ width, height,  children }) => {
const [xPosition, setX] = React.useState(-width);

    const toggleMenu = () => {
        if(xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    }; 

    React.useEffect(() => {
        setX(0);
    }, []);

    return (
        <React.Fragment>
            <BorderDiv 
                style={{
                    width: width, 
                    minHeight: height, 
                    transform: `translatex(${xPosition}px)`
                }}
            >
                <MenuBtn
                    onClick = {()=> toggleMenu()}
                        style ={{
                            transform: `translate(${width}px)`
                        }}
                >메뉴버튼</MenuBtn>
                <div>
                    {children}
                </div>
            </BorderDiv>
        </React.Fragment>
    );
}

export default Side;