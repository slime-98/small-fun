<template>
  <div class="basic-detail">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol">
        <a-form-model-item label="标题" prop="title" retuired>
            <a-input v-model="form.title" />
        </a-form-model-item>
        <a-form-model-item label="商品描述" prop="desc">
            <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item label="商品类目" required prop="category" retuired>
            <a-select v-model="form.category" placeholder="请选择商品类别">
                <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">{{ c.name }}</a-select-option>
                <a-select-option v-for="c in categoryItems" :key="c" :value="c">{{ c }}</a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="Instant delivery" prop="delivery">
        <a-switch v-model="form.delivery" />
        </a-form-model-item>
        <a-form-model-item label="Activity type" prop="type">
        <a-checkbox-group v-model="form.type">
            <a-checkbox value="1" name="type">
            Online
            </a-checkbox>
            <a-checkbox value="2" name="type">
            Promotion
            </a-checkbox>
            <a-checkbox value="3" name="type">
            Offline
            </a-checkbox>
        </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="Resources" prop="resource">
        <a-radio-group v-model="form.resource">
            <a-radio value="1">
            Sponsor
            </a-radio>
            <a-radio value="2">
            Venue
            </a-radio>
        </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Activity form" prop="desc">
        <a-input v-model="form.desc" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">
            Create
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
            Reset
        </a-button>
        </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: [],
        tags: [],
      },
      categoryList: [], // 类目列表
      categoryItems: [], // 子类目列表
    };
  },
};
</script>