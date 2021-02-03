<template>
    <div class="sale-detail">
        <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="{span:6}"
            :wrapper-col="{span: 13}">
            <a-form-model-item label="商品售价" prop="price" retuired required>
                <a-input v-model="form.price" />
            </a-form-model-item>
            <a-form-model-item label="折扣价格" prop="price_off">
                <a-input v-model="form.price_off" />
            </a-form-model-item>
            <a-form-model-item label="商品库存" required prop="inventory" retuired>
                <a-input v-model="form.inventory" />
            </a-form-model-item>
            <a-form-model-item label="计量单位" prop="unit" required>
                <a-input v-model="form.unit" />
            </a-form-model-item>
            <a-form-model-item label="商品相册" prop="images">
                <div class="clearfix">
                    <a-upload
                        :action="'https://mallapi.duyiedu.com/upload/images?appkey='+$store.state.user.appkey"
                        list-type="picture-card"
                        :file-list="fileList"
                        @preview="handlePreview"
                        @change="handleChange"
                        name="avatar">
                        <div v-if="fileList.length < 8">
                            <a-icon :type="loading ? 'loading': 'plus'" />
                            <div class="ant-upload-text">Upload</div>
                        </div>
                    </a-upload>
                    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                        <img alt="example" style="width: 100%" :src="previewImage" />
                    </a-modal>
                </div>
            </a-form-model-item>
            <a-form-model-item label="" class="next-btn" :wrapperCol="{span: 24}">
                <a-button type="default" @click="prev">上一步</a-button>
                <a-button type="primary" @click="next">下一步</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
    data() {
        return {
            loading: false,
            fileList: [],
            previewVisible: false,
            previewImage: '',
            rules: {}
        }
    },
    props: ['form'],
    created() {
        if(this.form.images.length > 0) {
            this.fileList = this.form.images.map( (item,index) => {
                return {
                    uid: index,
                    name: `image-${index}.png`,
                    status: 'done',
                    url: item,
                }
            })
        }
    },
    methods: {
        handleCancel() {
            this.previewVisible = false;
        },
        // 点击预览时触发的回调
        async handlePreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            this.previewImage = file.url || file.preview;
            this.previewVisible = true;
        },
        // 文件上传时触发的回调
        handleChange({ file, fileList, event }) {
            if(file.status === 'done') {
                console.log(file, fileList)
                this.form.images.push(file.response.data.url)
            } else if(file.status === 'removed') {
                console.log(file, fileList)
                this.form.images = this.form.images.filter( item => item.url !== file.response.data.url)
            }
            this.fileList = fileList;
        },
        // 表单验证
        next() {
            this.$refs.ruleForm.validate( valid => {
                if(valid) {
                    this.$emit("next", this.form)
                } else return false
            })
        },
        prev() {
            this.$emit('prev');
        }
    }
}
</script>