<template>
  <div class="productList">
    <!-- 搜索 -->
    <searchBox @submit="searchSubmit" :data="categoryList" />
    <a-button class="product-add-btn">
        <router-link :to="{name: 'Add'}">添加商品</router-link>
    </a-button>
    <!-- 表格 -->
    <productTable :data="tableData" :categoryList="categoryList" @edit="editProduct" @remove="removeProduct" />
  </div>
</template>

<script>
import searchBox from "@/components/search.vue";
import productTable from "@/components/productsTable.vue";
import api from "@/api/product";
import categoryApi from "@/api/category";
export default {
  components: {
    searchBox,
    productTable,
  },
  data() {
    return {
      tableData: [],    // 表格数据
      searchForm: {},   // 搜索表单
      categoryList: [], // 类目列表
      categoryObj: {},  // 类目映射
    };
  },
  async created() {
    // 获取类目列表
    await categoryApi.list().then( res => { // appkey在路由拦截里有设置
        if(res.status === 'success'){
            this.categoryList = res.data.data;
            this.categoryList.forEach(item => {
                this.categoryObj[item.id] = item.name;
            })
        }
        this.getTableData();
    })
  },
  methods: {
    // 子组件提交调用的方法
    searchSubmit(form) {
      console.log(form,this.searchForm)
      this.searchForm = form;
      this.getTableData();
    },
    // 获取表格数据
    getTableData() {
      api.list({
          ...this.searchForm,   // appkey在路由拦截里有设置
        }).then((res) => {
          this.tableData = res.data.data.map(item => {
            return {
              ...item,
              categoryName: this.categoryObj[item.category],    // 返回类目信息
            }
          })
        });
    },
    // 编辑操作
    editProduct(record) {
      this.$router.push({
        name: "Edit",
        params: {
          id: record.id
        }
      });
    },
    // 删除操作
    removeProduct(record) {
      this.$confirm({
        title:"确认删除",
        content: () => <div style="color: red">{"确定删除标题为：" + record.title + "的商品吗"}</div>,
        onOk: () => {
          api.remove({id: record.id}).then(res => {
            console.log("------------删除返回值",res)
            if(res.data.ok === 1) {
              
            }
            this.getTableData();
          });
        },
        onCancel() {
          console.log("取消")
        },
        class: "confirm-box"
      })
    }
  },
};
</script>

<style lang="less" scoped>
    .productList{
        position: relative;
        .product-add-btn{
            position: absolute;
            right: 20px;
            top: 24px;
        }
    }
</style>