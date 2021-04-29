import React, {useState} from 'react';
import { TokenAPI } from '../../../api/token/auth';


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
        <div>
            
        </div>
    );
}

export default LoginPage;
