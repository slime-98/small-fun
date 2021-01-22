import axios from '@/axios';

// 用户操作的接口管理

export default {
    //登录接口
    login(params) {
        return axios.post('passport/login', params)
    },
}
