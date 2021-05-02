import {instance} from '../ServerURL';

// Post 리스트 
export const PostDiarySearch = (diary_id) => instance.get(`/api3/post/${diary_id}`);