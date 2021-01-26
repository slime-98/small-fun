// 所有类目的接口

import axios from '@/axios';
export default {
    // 分类列表接口
    list(params) {
        return axios.get('/category/all', { params })
    },
}
