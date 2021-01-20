import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/',    // 该处url会根据环境进行变化（开发、生产）
})

// 请求拦截器
instance.interceptors.request.use(
    config => {
        console.log(config.url.includes('passport'))
        if (config.url.includes('passport')) {
            // config.headers.token = '设置token'
        }
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    })

// 响应拦截器
instance.interceptors.response.use(
    response => {   // 后端返回的整个内容
        console.log(response)
        const res = response.data;
        if (res.status === 'success') {
            return res;
        } else {
            return Promise.reject(res.msg)
        }

    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
)

export default instance;