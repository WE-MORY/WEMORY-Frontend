import axios from 'axios';
const API = axios.create();

// 출금 계좌 인증 확인 
export const AccountAuth = () => API.get("/users/getCellCerti/");
