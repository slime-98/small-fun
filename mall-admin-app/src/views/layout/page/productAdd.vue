<template>
  <div>
    <div class="product-detail">
      <a-steps :current="current" class="product-steps">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content">
        <basic-info v-if="current === 0" @next="next" :form="form" />
        <sale-info v-if="current === 1" @next="next" @prev="prev" :form="form" />
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from '@/components/basicDetail.vue';
import SaleInfo from '@/components/saleDetail.vue';
import api from '@/api/product';
export default {
  components: {
    BasicInfo, 
    SaleInfo,
  },
  data() {
    return {
      current: 0,
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: [],
        tags: [],
        price: '',   // 商品价格
        price_off: '',  // 折扣价格
        unit: '',   // 计量单位
        inventory: '',   // 商品库存
        images: []
      },
      steps: [
        {
          title: '填写商品基本信息',
          content: 'First-content',
        },
        {
          title: '填写商品销售信息',
          content: 'Second-content',
        },
      ],
    };
  },
  created() {
    const id = this.$route.params.id;
    if(id) {
      api.detail(id).then(res => {
        console.log(res);
        this.form = res.data;
      })
    }
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        form
      }
      if(this.current === 1) {
        // 提交数据
        if(!this.$route.params.id) { // 判断是否是编辑
          api.add(this.form).then(res => {
            this.$message.success('新增成功');
            this.$router.push({
              name: 'List'
            })
          })
        } else {
          api.edit(this.form).then(res => {
            this.$message.success('修改成功');
            this.$router.push({
              name: 'List'
            })
          })
        }
      } else {
        this.current++;
      }
      console.log(this.form)
    },
    prev() {
      this.current--;
    },
  },
};
</script>

<style lang="less" scoped>
.product-detail {
  .product-steps {
    width: 50%;
    margin: 20px auto;
  }
  padding: 20px;
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}

</style>