import axios from '@/axios';
export default {
    // 商品列表数据
    list(params) {
        return axios.get('/products/all', { params });
    },
    // 删除商品
    remove(params){
        return axios.delete('/products/' + params.id)
    }
}
