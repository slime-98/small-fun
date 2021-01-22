
import axios from '@/axios';
export default {
    //类目列表
    get(params) {
        return axios.post('passport/login', params)
    },
}
