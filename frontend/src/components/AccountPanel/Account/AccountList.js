import React from 'react';
import styled from 'styled-components';
import Header from '../../HeaderPanel/Header';
import {AccountCreateCard, AccountImageCard} from './AccountCard';

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`;

const TitleText = styled.h1`
    font-size: 2rem;
    width: 80%;
    margin: 0 auto;
    
    strong{
        font-size: 2.2rem;
        font-family: 'Spoqa-Regular';
    }
`;

const CardContainer = styled.div`
    display: flex;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

const CardList = styled.ol`
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 100%;
    flex-basis: 50%;
    margin-bottom: 30px;
`;

// const TestDataURL = [
// ];

const AccountList = () => {



    return (
        <>
            <Header />
            <TitleContainer>
                <TitleText>
                    <strong>하유민</strong> 님의 일기장 계좌
                </TitleText>
            </TitleContainer>
            <CardContainer>
                <CardList>
                    <ListItem>
                        <AccountCreateCard />
                    </ListItem>
                    <ListItem>
                        <AccountImageCard />
                    </ListItem>
                    <ListItem>
                        <AccountImageCard />
                    </ListItem>
                    <ListItem>
                        <AccountImageCard />
                    </ListItem>
                </CardList>
            </CardContainer>
        </>
    );
}

export default AccountList;
