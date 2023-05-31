<template>
  <div id="app_content">
    <div ref="barChart" style="height: 200px"></div>
    <div class="flex-center wh-full bg-blue">
      <div class="arrow-box">
        <n-thing>
          <div class="w-full h-48px flex justify-between items-center mb-12px">
            <div class="flex">
              <span class="w-48px h-48px mr-5px block"></span>
              <span class="flex flex-col">
                <span class="c-#303133 text-18px">321321312j</span>
                <span class="c-#616266 text-16px">linzheng</span>
              </span>
            </div>
            <div>dsa</div>
          </div>
          <DescriptionsRender :describe-list="descripeList" :data="data" :column="2" />
          <template #footer> 
            <div class="flex-center">
              <n-button class="mr-10px">321</n-button>
              <n-button>321</n-button>
            </div>
          </template>
        </n-thing>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/hooks/web/useECharts'
import DescriptionsRender from '@/components/DescriptionsRender/index.vue';
import { h, ref } from 'vue'
const barChart = ref()
const { setOptions } = useECharts(barChart)
setOptions({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
})
const data = {
  x: '吃饭',
  y: '喝酒',
  z: '睡觉'
}
const descripeList = [
  {
    label: '晚上',
    renderContent: true,
    render(data, param) {
      return data[param]
    },
    param: 'x'
  },
  {
    label: '今天',
    param: 'y'
  },
  {
    label: '大晚上',
    param: 'y',
    render(data, param) {
      return () => h('div', { style: { color: 'red' } }, data[param])
    }
  }
]
</script>

<style lang="scss" scoped>
.arrow-box {
  position: relative;
  width: 720px;
  min-height: 350px;
  background: #ff8605;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.arrow-box::after {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ff8605;
  filter: drop-shadow(1px 3px 1px rgba(0, 0, 0, 0.2));
}
</style>
