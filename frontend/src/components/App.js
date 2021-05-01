// 4. 29.
// 민석 
// :: Global Reset.css 적용 및 MediaQuery 적용
// :: Browser Router/Route 설정
import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import '../assets/CSS/app.css';
import {TEXT_BLACK} from '../assets/Colors/Color';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import {Desktop, Mobile} from '../assets/MediaQuery/MediaQuery.js';

import Signup from './AccountPanel/Login/Signup';
import LoginPage from './AccountPanel/Login/LoginPage';

import Main from './MainPanel/Main';

import List from './DiaryPanel/DiaryList/List';
import Create from './DiaryPanel/DiaryDetail/Create';
import Detail from '../components/DiaryPanel/DiaryDetail/Detail';

import AccountList from './AccountPanel/Account/AccountList';
import AccountWithDraw from './AccountPanel/Account/AccountWithDraw';
import AccountDeposit from './AccountPanel/Account/AccountDeposit';

import CalendarList from './CalendarPanel/CalendarList';
import ChartList from './GraphPanel/ChartList';


// RESET.CSS
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, button,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html{
  /* rem 기준 */
  font-size: 12px;
  font-family: 'Spoqa-Light';
  color: ${TEXT_BLACK};
  background-color: rgb(255,255,255) !important;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
`;

const MobileContainer = styled.div`
  font-family: 'Spoqa-Light';
  width: 100%;
  height: 640px;
`;


const App = () => {

  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      {/* 모바일 환경 */}
      <Mobile> 
        {/* Router 추가 */}
        <BrowserRouter>
          <MobileContainer>
            {/* 메인 페이지 */}
            <Route exact path='/' component={Main}/>
            {/* 계좌 링크 출금계좌생성/입금계좌생성/입금계좌리스트 */}
            <Route exact path='/accountwithdraw' component={AccountWithDraw} />
            <Route exact path='/accountdeposit' component={AccountDeposit} /> 
            <Route exact path='/accountlist' component={AccountList} />
            {/* 캘린더/차트 */}
            <Route exact path='/calendarlist' component={CalendarList} /> 
            <Route exact path='/chartlist' component={ChartList} />
            {/* 일기 리스트/일기 상세페이지/일기 생성페이지 */}
            <Route exact path = '/diarylist' component={List} />
            <Route exact path = '/diarydetail' component={Detail} />
            <Route exact path = '/diarycreate' component={Create} />
            {/* 유저 로그인/회원가입 페이지 */}
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={Signup} />
          </MobileContainer>
        </BrowserRouter>
      </Mobile>
      
      {/* 데스크톱 환경 */}
      <Desktop>
        모바일만 된답니다. 돌아가세요
      </Desktop>
    </>
  );
}

export default App;
