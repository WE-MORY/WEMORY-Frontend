import axios from 'axios';
import {SERVER_URL} from '../ServerURL';
const API = axios.create();
// 출금 계좌 생성 

// 출금 계좌 인증 확인 
export const AccountAuth = () => API.get("/users/getCellCerti/");
