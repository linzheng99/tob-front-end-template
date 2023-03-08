<template>
  <div id="app_content">
    <div ref="barChart" style="height: 200px"></div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/hooks/web/useECharts'
import { ref } from 'vue'
const barChart = ref()
const { setOptions } = useECharts(barChart)
setOptions({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
})
</script>

<style lang="scss" scoped></style>
