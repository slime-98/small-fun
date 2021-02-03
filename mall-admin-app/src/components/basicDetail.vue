<template>
  <div class="basic-detail">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="{span:6}"
        :wrapper-col="{span: 13}">
        <a-form-model-item label="标题" prop="title" retuired required>
            <a-input v-model="form.title" />
        </a-form-model-item>
        <a-form-model-item label="商品描述" prop="desc">
            <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item label="商品类目" required prop="category" retuired>
            <a-select v-model="form.category" placeholder="请选择商品类别" @change="changeCategory">
                <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">{{ c.name }}</a-select-option>
            </a-select>
            <a-select v-model="form.c_item" placeholder="请添加子类目">
                <a-select-option v-for="c in categoryItems" :key="c" :value="c">{{ c }}</a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="商品标签" prop="tags" required>
          <a-select mode="tags" placeholder="请选择标签" :default-value="['包邮，最晚次日达']" v-model="form.tags">
            <a-select-option value="包邮，最晚次日达">包邮，最晚次日达</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="" class="next-btn" :wrapperCol="{span: 24}">
          <a-button type="primary" @click="next">下一步</a-button>
        </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import categoryApi from "@/api/category";
export default {
  data() {
    return {
      rules: {},
      categoryList: [], // 类目列表
      categoryItems: [], // 子类目列表
    };
  },
  props: ["form"],
  created() {
    categoryApi.list().then( res => {
        if(res.status === 'success'){
          console.log("****************类目列表",res)
          this.categoryList = res.data.data;
        }
    })
  },
  methods: {
    changeCategory(category) {
      for(let i = 0; i < this.categoryList.length; i++) {
        if(this.categoryList[i].id === category) {
          this.form.c_item = this.categoryList[i].c_item[0];
          this.categoryItem = this.categoryList[i].c_item;
        }
      }
    },
    next() {
      this.$refs.ruleForm.validate( valid => {
        if(valid) {
          this.$emit("next", this.form)
        } else {
          return false;
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.basic-detail {
  .next-btn{
    text-align: center;
  }
}
</style>