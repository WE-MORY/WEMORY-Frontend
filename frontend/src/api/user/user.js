import axios from 'axios';
import {SERVER_URL} from '../ServerURL';

const API = axios.create();
// 휴대폰 번호 인증 API, 인증번호 response 
export const PhoneAuthAPI = () => API.get(`${SERVER_URL}/users/getCellCerti/`);

// 회원가입 API , 이메일/이름/비번/비번확인/휴대폰번호
export const SignupAPI = ((email, name, pw, pw2, phone) => API.post("/users/signup/", {
    email: email,
    username: name,
    password: pw,
    password_confirm: pw2,
    phone: phone
}))

