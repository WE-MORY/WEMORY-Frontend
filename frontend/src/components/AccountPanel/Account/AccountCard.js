import React from 'react';
import styled from 'styled-components';
import {MAIN_COLOR} from '../../../assets/Colors/Color'

const CardContainer = styled.div`
    width: 130px;
    height: 130px;
    /* text-align: center; */
    margin: 0 auto;
    border-radius: 10px;
    text-shadow: 1px 2px 3px #000;
    &#create{
        border: 1px solid ${MAIN_COLOR};
    }
    &.image_card{
        border: 1px solid red;
        /* background: url(${props=>props.background_src}) no-repeat; 
        background-size: contain; */
    }

`;


const AccountImageCard = (background) => {
    return <CardContainer background_src={background} className='image_card' />
}

const AccountCreateCard = () => {
    return <CardContainer id='create' /> 
}


export {AccountImageCard , AccountCreateCard};
