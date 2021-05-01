import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import BackHeader from '../HeaderPanel/BackHeader';

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 85%;
`;

const CalendarCover = styled.div`
    font-size: 1rem;
    font-family: 'Spoqa-Light';
`;

const CalendarList = () => {

    const [DateField, SetDateField] = useState([]);

    const test = [
        {   
            "created_at":'2021-05-19',
            "title":"밈미생일",
            "money":"6000",
        },
        {   
            "created_at":'2021-05-20',
            "title":"옹이생일",
            "money":"6000",
        },
        {   
            "created_at":'2021-05-21',
            "title":"율희생일",
            "money":"6000",
        },
        {   
            "created_at":'2021-05-22',
            "title":"율희생일",
            "money":"6000",
        },
        {   
            "created_at":'2021-05-23',
            "title":"율희생일",
            "money":"6000",
        },
    ];

    const DateRenderList = () => {
        let value = []
        test.length > 0 &&
        test.map(item => {
            value = ([...value, 
                {
                    "title": item.title,
                    "date": item.created_at
                }
            ]);
        })
        console.log(value);
        SetDateField(value);
     }
    return (
        <>
        <BackHeader />
            <CalendarContainer>
                <CalendarCover>
                    
                </CalendarCover>
            </CalendarContainer>
        </>
    );
}

export default CalendarList;
