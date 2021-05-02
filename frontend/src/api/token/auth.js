import {instance} from '../ServerURL';

// Token 발급 API 
// 정상 적인 res - token
// 잘못된 username/password - non field error
// 헤더값 미첨부시 - detail
export const TokenAPI = ((email, password) => instance.post('/users/signin/', {
    email: email,
    password: password
}))
