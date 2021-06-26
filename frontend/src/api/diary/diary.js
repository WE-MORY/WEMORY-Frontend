import axios from 'axios';

// 프록시 설정 http://127.0.0.1:8000/ 로 되어있음 

// 일기 전체 조회 api
export const DiaryListAPI = () => {
    const diarylist = axios.get('api1/diaries');
    console.log(diarylist);
    return diarylist
}

// 일기 생성 api  
// 유민 : 맞는 형식으로 고치기만 했으니 나중에 검토 필요합니다 
export const accountCreateAPI = (num, bank) => {
    const accountcreate = axios.post(
        '/api2/accounts/',  
        num,
        bank
    );
    return accountcreate
}