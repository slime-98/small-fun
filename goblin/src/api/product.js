import axios from '@/axios';
export default {
    // 商品列表数据
    list(params) {
        return axios.get('/products/all', { params });
    },
    // 删除商品
    remove(params){
        return axios.delete('/products/' + params.id);
    },
    // 新增商品 
    add(params){
        return axios.post('/products/add', params);
    },
    // 编辑-数据回填
    detail(id) {
        return axios.get('/products/' + id);
    },
    // 编辑商品
    edit(params) {
        return axios.put('/products/edit', params);
    },
} 
