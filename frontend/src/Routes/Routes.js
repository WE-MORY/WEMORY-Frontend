import {Route, BrowserRouter} from "react-router-dom";

import Signup from '../components/AccountPanel/Login/Signup';
import LoginPage from '../components/AccountPanel/Login/LoginPage';

import Main from '../components/MainPanel/Main';

import List from '../components/DiaryPanel/DiaryList/List';
import Create from '../components/DiaryPanel/DiaryDetail/Create';
import Detail from '../components/DiaryPanel/DiaryDetail/Detail';

import AccountList from '../components/AccountPanel/Account/AccountList';
import AccountWithDraw from '../components/AccountPanel/Account/AccountWithDraw';
import AccountDeposit from '../components/AccountPanel/Account/AccountDeposit';

import ChartList from '../components/GraphPanel/ChartList';
import purposeSetting from '../components/purposePanel/PurposeSetting';
import styled from 'styled-components';
import ListData from '../components/DiaryPanel/DiaryList/ListData';

const MobileContainer = styled.div`
  font-family: 'Spoqa-Light';
  width: 100%;
  height: 640px;
`;

const Routes = () => {
    return (
        <>
        {/* Router 추가 */}
        {/* Router 추가 */}
        <MobileContainer>
        <BrowserRouter>
            {/* 메인 페이지 */}
            <Route exact path='/' component={Main}/>
            {/* 계좌 링크 출금계좌생성/입금계좌생성/입금계좌리스트 */}
            <Route exact path='/accountwithdraw' component={AccountWithDraw} />
            <Route exact path='/accountdeposit' component={AccountDeposit} /> 
            <Route exact path='/accountlist' component={AccountList} />
            {/* 차트 */} 
            <Route exact path='/chartlist' component={ChartList} />
            {/* 일기 리스트/일기 상세페이지/일기 생성페이지 */}
            <Route exact path = '/diarylist' component={List} />
            <Route exact path = '/test' component={ListData} />
            <Route exact path = '/diarydetail' component={Detail} />
            <Route exact path = '/diarycreate' component={Create} />
            {/* 유저 로그인/회원가입 페이지 */}
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={Signup} />
            {/* 목표 설정 페이지 */}
            <Route exact path='/purpose' component={purposeSetting} />
        </BrowserRouter>
        </MobileContainer>
      </>
    );
};

export default Routes;