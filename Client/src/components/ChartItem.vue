<!-- eslint-disable vue -->
<template>
    <canvas id="chart"></canvas>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'ChartItem',
    mounted() {
      const labels = ['a', 'b', 'c'];
      const datasets = [{
        data: [1, 2, 3],
        offset: 40,
      }];
      const config = {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: datasets,
        },
      };
      const chart = new Chart(document.getElementById('chart'), config);
    },
  };
  </script>

  <style scoped>
  canvas {
    width: 50px;
    height: 50 px;

  }

</style>
  