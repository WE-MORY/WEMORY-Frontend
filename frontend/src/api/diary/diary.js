import {instance} from '../ServerURL';

// 유저 다이어리 조회
export const UserDiarySearch = (user_id) => instance.get(`/users/list/${user_id}`);

// 일기 세부 조회 다이어리 Id 값
export const DiarydetailSearch = (diary_id) => instance.get(`/api1/diaries/${diary_id}`);

// 일기 생성 API 값
export const DiaryCreateAPI = (fd) => { 
    const config = {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    };
    return instance.post('/api1/diaries/',fd, config)};