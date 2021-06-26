import {instance} from '../ServerURL';

// 출금 계좌 생성 
export const ChartMonthDataAPI = (Diary_id, Date) => {
    const date = Date.concat('-01');
    return instance.get(`/api/money/?q=${Diary_id}&key=${date}`);
}