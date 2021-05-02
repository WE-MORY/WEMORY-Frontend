import axios from 'axios';
import {SERVER_URL} from '../ServerURL';

const API = axios.create();

// Token 발급 API 
// 정상 적인 res - token
// 잘못된 username/password - non field error
// 헤더값 미첨부시 - detail
export const TokenAPI = ((email, password) => API.post(`${SERVER_URL}/users/signin/`, {
    email: email,
    password: password
}))
