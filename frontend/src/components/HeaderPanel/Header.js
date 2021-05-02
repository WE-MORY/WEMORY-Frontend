import React from 'react';
import styled from 'styled-components';
import Drawer from '../MainPanel/Drawer';

const MenuStyle = styled.div`
    position: absolute;
    top: 3vh;
    left: 5vw;
    &:hover{
        cursor: pointer;
    }
`

const HeaderPanel = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */
    /* position: fixed; */
    height: 50px;
    width: 100%;
    background-color: rgb(255,255,255);
    /* // 크기 확인용 border.  */
    /* border: 1px solid black; */

    
    `

const Header = () => {
    return (
        <>  
            <HeaderPanel>
                <MenuStyle>
                    <Drawer />
                </MenuStyle>
            </HeaderPanel>
        </>
    );
}

export default Header;