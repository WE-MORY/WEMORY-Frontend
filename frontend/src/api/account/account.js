import {instance} from '../ServerURL';

// 출금 계좌 생성 
export const AccountCreateAPI = (num) => instance.post('/api2/accounts/',{
    "account_num":num,
    "bank":"우리은행"
});

// 출금 계좌 인증 확인 
export const WithDrawCheckAPI = (TOKEN) => instance.get('/users/getUserId/', {
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": `JWT ${TOKEN}`
        }
    })