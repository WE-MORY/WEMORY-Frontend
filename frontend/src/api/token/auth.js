import axios from 'axios';
const API = axios.create();

// Token 발급 API 
// 정상 적인 res - token
// 잘못된 username/password - non field error
// 헤더값 미첨부시 - detail
export const TokenAPI = ((username, password) => API.post("/api-jwt-auth/login/", {
    username: username,
    password: password
}))

// Token 유효성 검사 API
// 유효 시, 토큰 값 그대로 반환 
// 유효하지 않을 시, non field error 발생
// token 미첨부시 detail 발생
export const TokenAuth = ((token) => API.post("/api-jwt-auth/verify/", {
    token: token
}))