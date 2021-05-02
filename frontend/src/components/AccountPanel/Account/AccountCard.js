import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';


import {MAIN_COLOR, TEXT_WHITE} from '../../../assets/Colors/Color'

const CardContainer = styled.div`
    width: 130px;
    height: 130px;
    /* text-align: center; */
    margin: 0 auto;
    border-radius: 10px;
    text-shadow: 1px 2px 3px #000;
    &#create{
        border: 1px solid ${MAIN_COLOR};
        :active{
            transition: 0.15s;
            background-color: ${MAIN_COLOR};
            color: ${TEXT_WHITE};
        }
    }
    &.image_card{
        background: url(${props=>props.background_src}) no-repeat;
        background-size: cover;
    }
`;


const AccountImageCard = (props) => {
    return <CardContainer background_src={props.backgroundImg} className='image_card' ></CardContainer>
}

const AccountCreateCard = () => {
    const history = useHistory();
    return <CardContainer onClick={()=>history.push('/')} id='create' /> 
}


export {AccountImageCard , AccountCreateCard};
