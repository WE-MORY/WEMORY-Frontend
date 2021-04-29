// 4. 29.
// 민석 
// :: Global Reset.css 적용 및 MediaQuery 적용
// :: Browser Router/Route 설정
import React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";

import '../assets/CSS/app.css';
import {createGlobalStyle} from 'styled-components';
import Button from '../assets/Button/Button';
import {Desktop, Mobile} from '../assets/MediaQuery/MediaQuery.js';
import {SUB_COLOR} from '../assets/Colors/Color';
import Main from './MainPanel/Main';
import AccountPage from './AccountPanel/Account/AccountPage';
import LoginPage from './AccountPanel/Login/LoginPage';

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


const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* 모바일 환경 */}
      <Mobile> 
        {/* Router 추가 */}
        <Button Color={SUB_COLOR} Text="로그인"/>
        {/* <Route exact path='/' components={Main} />
        <Route path='/login' components={LoginPage} />
        <Route path='/account' components={AccountPage} /> */}
      </Mobile>
      {/* 데스크톱 환경 */}
      <Desktop>
        모바일만 된답니다. 돌아가세요
      </Desktop>
    </BrowserRouter>
  );
}

export default App;
