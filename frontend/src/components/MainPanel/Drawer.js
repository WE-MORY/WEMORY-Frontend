import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ReactComponent as Burgermenu} from '../../assets/Images/burgermenu.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../../assets/Button/Button';
import {TEXT_WHITE, MAIN_COLOR, SUB_COLOR, TEXT_BLACK} from '../../assets/Colors/Color'

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited{
    color: #4B5364;
  }
`


const BtnDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 25px;
`

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 4vh 4vw;
`
const ProfileTextDiv = styled.div`
  margin: 3vw;
`

const ImgDiv = styled.div`
  /* background-image: url("../../assets/Images/cat.png");
  background-repeat: no-repeat;
  background-size: 50% 50%; */
  width: 50px;
  height: 50px;
  background: coral;
  border-radius: 50%;
`

const Name = styled.span`
  font-size: 1.1rem;
  font-family: "Spoqa-Regular";
`

const Setting = styled.button`
  margin-top: 1vh;
  /* display: block; */
`

const useStyles = makeStyles({
  list: {
    fontFamily: 'Spoqa-Light',
    width: 200,
  },

  fullList: {
    // width: 'auto',
  },
}
);

export default function Drawer({SideMenu}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.textSetting ,clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

        <ProfileDiv>
            <ImgDiv />
              <ProfileTextDiv>
                <Name>하유민</Name>
              </ProfileTextDiv>
        </ProfileDiv>
      <List>
        
        <ListItem>
          <ListItemText>
            <StyledLink to="/diarylist">
              입금 일기장
            </StyledLink>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <StyledLink to="/purpose">
              목표 설정
            </StyledLink>
          </ListItemText>
        </ListItem>
        
      </List>
      <BtnDiv>
        <Button Text={"로그아웃"} Width={"40vw"} Color={"#4B5364"}/>
      </BtnDiv>

    </div>
  );

  return (
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Burgermenu width="25" height="25 "onClick={toggleDrawer(anchor, true)}>{anchor}</Burgermenu>
            <SwipeableDrawer 
              // className={classes.typography}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
                {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
  );
}