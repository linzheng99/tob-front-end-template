<template>
  <div class="upload-wrapper">
    <div class="upload-text">
      <span>请您按“导入模板”文档内的指定字段导入信息。</span>
    </div>
    <div class="upload-main">
      <div class="upload-content">
        <div class="upload-file">
          <span v-if="!files.length">请选择</span>
          <span style="display: flex" v-else>
            {{ files[0].name }}
            <n-button text style="font-size: 18px; margin-left: 10px" @click="deleteFile"
              :render-icon="iconRender({ icon: 'ep:circle-close', color: 'gray' })" />
          </span>
        </div>
        <div style="width: 88px">
          <n-upload ref="upload_ref" action="https://naive-upload.free.beeceptor.com/"
            :headers="{ 'naive-info': 'hello!' }" :data="{ 'naive-data': 'cool! naive!' }" :max="1"
            :custom-request="customRequest" :show-file-list="false" v-model:file-list="files">
            <n-button type="primary" style="height: 28px"> 选择文件 </n-button>
          </n-upload>
        </div>
      </div>
      <n-button type="primary" @click="download" :render-icon="iconRender({ icon: 'el:download' })">
        下载导入模板
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIconRender } from '@/hooks/component/useIconRender'
import { ref, unref } from 'vue'

const { iconRender } = useIconRender()
const files: any = ref([])
const upload_ref = ref(null)
const emits = defineEmits(['download'])

const customRequest = ({ file }) => {
  files.value.push(file)
}

const download = () => {
  emits('download')
}

const deleteFile = () => {
  const dom: any = unref(upload_ref)
  dom.fileList.pop()
  files.value.pop()
}

defineExpose({ files })
</script>

<style scoped lang="scss">
.upload {
  &-wrapper {
    width: 652px;
    height: 132px;
    padding: 23px 0px;
    border-radius: 4px;
    background-color: #f2f5fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-text {
    font-size: 20px;
    color: #303133;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &-main {
    display: flex;
    align-items: center;
  }

  &-content {
    width: 380px;
    height: 40px;
    padding: 6px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }

  &-file {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
