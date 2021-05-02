import React, { useEffect, useState } from 'react';
import moment from 'moment';
import DatePickerComponent from './DatePickerComponent';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Header from '../HeaderPanel/Header';
import { MAIN_COLOR, TEXT_BLACK } from '../../assets/Colors/Color';
import {ChartMonthDataAPI} from '../../api/chart/chart';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';


const ChartTitle = styled.p`
    font-size: 1.6rem;
    font-family: 'Cafe24';
    text-align: center;
    margin: 0 0 100px 0;
`;

const ChartListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 80%;
    font-size: 1rem;
`;

const ChartDescription = styled.p`
    font-size: 1.5rem;
    font-family: 'Cafe24';
    text-align: center;
    margin-top: 30px;
`;


const DatePickerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 auto 20px;
    input{
        /* padding: 5px 0 5px 5px; */
        width: 60px;
        border: 0;
        /* border-radius: 20px; */
        text-align: center;
        font-family: 'Spoqa-Regular';
        /* border-bottom: 1px solid ${MAIN_COLOR}; */
    }
    span{
        font-size: 1.2rem;
        margin-right: 10px;
    }
`;

const data = [
    {
        week:'2021.04.01',
        money:10000
    },
    {
        week:'2021.04.02',
        money:60000
    },
    {
        week:'2021.04.03',
        money:40000
    },
    {
        week:'2021.04.04',
        money:10000
    },
    {
        week:'2021.04.05',
        money:30000
    },
    {
        week:'2021.04.06',
        money:60000
    },
    {
        week:'2021.04.07',
        money:40000
    },
    {
        week:'2021.04.08',
        money:20000
    },
    {
        week:'2021.04.09',
        money:15000
    },
    {
        week:'2021.04.10',
        money:60000
    },
    {
        week:'2021.04.11',
        money:40000
    },
    {
        week:'2021.04.12',
        money:10000
    },
    {
        week:'2021.04.13',
        money:4000
    },
    {
        week:'2021.04.14',
        money:60000
    },
    {
        week:'2021.04.15',
        money:40000
    },
    {
        week:'2021.04.16',
        money:3000
    },
    {
        week:'2021.04.17',
        money:10000
    },
    {
        week:'2021.04.18',
        money:10000
    },
    {
        week:'2021.04.19',
        money:60000
    },
    {
        week:'2021.04.20',
        money:40000
    },
    {
        week:'2021.04.21',
        money:30000
    },
    {
        week:'2021.04.22',
        money:10500
    },
    {
        week:'2021.04.23',
        money:60000
    },
    {
        week:'2021.04.24',
        money:40000
    },
    {
        week:'2021.04.25',
        money:10000
    },
    {
        week:'2021.04.26',
        money:10000
    },
    {
        week:'2021.04.27',
        money:60000
    },
    {
        week:'04-28',
        money:40500
    },
    {
        week:'04-29',
        money:10000
    }
]



const ChartList = () => {

    const [DataSet, SetDataSet] = useState([]);   
    const userInfo = useSelector(state=>state.auth.currentToken);
    return (
        <>
        { userInfo == null ? <Redirect to='/login' /> :
        <>
            <Header /> 
            <ChartListContainer>
            <ChartTitle>이번 한 달 간의 발자취를 확인해볼까요?</ChartTitle> 
                <DatePickerContainer>
                    <span>월 선택</span>
                    <DatePickerComponent  SetDataSet={SetDataSet}/>
                </DatePickerContainer>
                <LineChart width={330} height={200} data={data} margin={{top:5, right: 20, bottom: 5, left: 0}} >
                    <Line type="monotone" dataKey="money" stroke={MAIN_COLOR} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis stroke={TEXT_BLACK} dataKey="week"/>
                    <YAxis stroke={TEXT_BLACK} />
                    <Tooltip />
                </LineChart>
                <ChartDescription>
                    {/* Sort하여 가장 많이 적금한 날 출력! */}
                </ChartDescription>
            </ChartListContainer>
            </>
            }
        </>
    );
}

export default ChartList;
