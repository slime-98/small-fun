<template>
    <div class="productList">
        <!-- 搜索 -->
        <search @submit="searchSubmit" />
        <!-- 表格 -->
    </div>
</template>

<script>
import Search from '@/components/search.vue'
export default {
    components: {
        Search,
    },
    data() {
        return {

        }
    },
    methods: {
        //   子组件提交调用的方法
        searchSubmit(form) {
            console.log(form)
        }
    }
}
</script>