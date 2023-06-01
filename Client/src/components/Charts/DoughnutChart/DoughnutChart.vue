<template>
  <div id="chart">
    {{ PieChart()  }}
  </div>
</template>

<script>
const data = [{
    name : "toto",
    value: 10
  },
  {
    name : "tato",
    value: 10
  },
  {
    name : "tota",
    value: 10
  }];
  PieChart( data, {
  name: d => d.name,
  value: d => Math.round(100*d.value/30),
  width: 400,
  height: 400
  })
export default  {
  name: 'DoughnutChart',
  methods : {
    PieChart,
  }
}



import PieChart from './index.js';
</script>