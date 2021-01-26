<template>
    <div class="productList">
        <!-- 搜索 -->
        <searchBox @submit="searchSubmit" />
        <!-- 表格 -->
        <productTable :data="tableData" />
    </div>
</template>

<script>
import searchBox from '@/components/search.vue';
import productTable from '@/components/productsTable.vue';
import api from '@/api/product';
export default {
    components: {
        searchBox,
        productTable
    },
    data() {
        return {
            tableData: [],
            searchForm: {},
        }
    },
    created() {
        this.getTableData();
    },
    methods: {
        // 子组件提交调用的方法
        searchSubmit(form) {
            console.log(form)
            this.searchForm = form;
            this.getTableData();
        },
        // 获取表格数据
        getTableData() {
            api.list({
                appkey: this.$store.state.appkey,
                ...this.searchForm
            }).then(res => {
                console.log(res)
                this.tableData = res.data.data;
            })
        }
    }
}
</script>