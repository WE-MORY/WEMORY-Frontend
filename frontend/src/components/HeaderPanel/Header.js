import React from 'react';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core'
const HeaderPanel = styled.div`
    width: 360px;
    height: 50px;
    background-color: white;
    // 크기 확인용 border. 
    border: 1px solid black;
    `

const Header = () => {
    return (
        <>  

            <HeaderPanel />
        </>
    );
}

export default Header;