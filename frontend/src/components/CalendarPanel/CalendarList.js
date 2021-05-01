import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import BackHeader from '../HeaderPanel/BackHeader';
const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 70%;
`;

const CalendarList = () => {
    return (
        <>
        <BackHeader />
        <CalendarContainer>
            
        </CalendarContainer>
        </>
    );
}

export default CalendarList;
