<template>
<div :id="ID">
  <h2>{{ title }}</h2>
</div></template>

<script>
import PieChart from './index.js';

export default {
  name: 'DoughnutChart',
  props: {
    params: {
      type: Object,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    ID: {
      type: String,
      required: true
    }, 
    title : {
      type: String,
      required : false
    }
  },
    mounted() {
    const chartContainer = document.getElementById(this.ID);
    const svgElement = PieChart(this.data, this.params);
    chartContainer.appendChild(svgElement);
  }
}
</script>