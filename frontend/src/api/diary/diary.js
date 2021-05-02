import {instance} from '../ServerURL';

const accountCreateAPI = (num, bank) => instance.post('/api2/accounts/',{
    "account_num":num,
    "bank":"우리은행"
});