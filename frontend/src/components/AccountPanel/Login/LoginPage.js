import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../../assets/Input/Input';
import { TokenAPI } from '../../../api/token/auth';


const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const LoginForm = styled.form`
    display: flex;
    justify-content: center;
`;

const LoginPage = () => {
    const handleLogin = async () => {
        try{
            const response = await TokenAPI();
            console.log(response.data);
        } catch (err) {
            alert(err);
        }
    }
    return (
        <LoginContainer>
           <Input />
        </LoginContainer>
    );
}

export default LoginPage;
