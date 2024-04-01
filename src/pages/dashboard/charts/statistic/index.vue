<template>
  <div class="statistic-chart">
    <div class="content">
      <h4 class="title">UV</h4>
      <div class="value">7924</div>
      <span class="info">+3085 this week</span>
    </div>
    <apexchart
        type="line"
        :options="options"
        :series="series" />
  </div>
</template>

<script
    setup
    lang="ts">
const options = {
  stroke: {
    width: 3,
    curve: 'smooth',
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

const series = [{
  data: [
    126,
    183,
    92,
    264,
    227,
    527,
  ],
}];
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
