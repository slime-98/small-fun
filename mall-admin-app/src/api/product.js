import axios from '@/axios';
export default {
    // 商品列表数据
    list(params) {
        return axios.get('/products/all', { params });
    }
}
