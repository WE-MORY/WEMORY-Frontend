import React, { useRef } from 'react';
import styled from 'styled-components';
import {ReactComponent as Burgermenu} from '../../assets/Images/burgermenu.svg';
import {ReactComponent as Calendar} from '../../assets/Images/calendar.svg';
import Yumin from '../MainPanel/Drawer';

const MenuStyle = styled.div`
    position: absolute;
    top: 3vh;
    left: 5vw;
    &:hover{
        cursor: pointer;
    }
`

const CalendarStyle = styled.div `
    position: absolute;
    top: 3vh;
    right: 5vw;

    &:hover{
        cursor: pointer;
    }
`

const HeaderPanel = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */
    height: 8vh;
    width: 100%;
    background-color: white;
    // 크기 확인용 border. 
    /* border: 1px solid black; */

    
    `

const Header = () => {
        const SideMenu = useRef();

        const onMenu = () => {
            console.log("실행된다.")

            SideMenu.current.toggleDrawer();
            console.log("실행된다.")
        }
    return (
        <>  
            <HeaderPanel>
                <MenuStyle>
                    <Yumin ref={SideMenu}/>
                    <Burgermenu width="25" height="25" onclick={onMenu}/>
                </MenuStyle>

                <CalendarStyle>
                    <Calendar width="25" height="25"/>
                </CalendarStyle>
            </HeaderPanel>
        </>
    );
}

export default Header;