<template>
  <a-form-model class="search-box" layout="inline" :model="searchForm" @submit.native.prevent>
    <a-form-model-item label="搜索关键字">
      <a-input v-model="searchForm.searchWord" placeholder="请输入关键字" allowClear></a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select label-in-value placeholder="请选择" style="width: 120px" @change="handleChange" allowClear>
        <a-select-option v-for="c in data" :key="c.id" :value="c.id">{{ c.name }}</a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit" @click="handleSubmit">
        搜索
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import api from '@/api/category'
export default {
  data() {
    return {
      searchForm: {
        searchWord: '',
        category: '',
      },
    };
  },
  props: ['data'],
  created() {
    this.getCategoryList();
  },
  methods: {
    // 表单提交
    handleSubmit() {
      this.$emit('submit', this.searchForm)
    },
    handleChange(value) {
      this.searchForm.category =  value? value.key: '';  // 容错，当value为空时没有key属性
    },
    // 获取分类列表
    getCategoryList() {
      
    }
  },
};
</script>
<style scoped>
  .search-box{
    padding: 20px 0 0 30px;
  }
</style>