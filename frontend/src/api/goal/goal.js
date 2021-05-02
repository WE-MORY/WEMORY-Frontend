import {instance} from '../ServerURL';

export const GoalCreateAPI = ((money, title, diary_id) => instance.post('/api1/goals/',{
    "goal":money,
    "goal_title":title,
    "goal_diary":diary_id
}));