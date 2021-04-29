import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Burgermenu} from '../../assets/Images/burgermenu.svg';
import {ReactComponent as Calendar} from '../../assets/Images/calendar.svg';
import { Drawer } from '@material-ui/core'

const MenuStyle = styled.div`
    &:hover{
        cursor: pointer;
    }
`

const CalendarStyle = styled.div `
    &:hover{
        cursor: pointer;
    }
`

const HeaderPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    background-color: white;
    // 크기 확인용 border. 
    border: 1px solid black;

    
    `

const Header = () => {
    return (
        <>  
            <HeaderPanel>
                <MenuStyle>
                    <Burgermenu width="25" height="25"/>
                </MenuStyle>

                <CalendarStyle>
                    <Calendar width="25" height="25"/>
                </CalendarStyle>

                
            </HeaderPanel>
        </>
    );
}

export default Header;