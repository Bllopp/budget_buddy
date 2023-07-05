<template><div :id="ID"></div></template>

<script>
import BarChart from './index.js';

export default {
  name: 'BarChart',
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
    title:{
      type : String,
      required : false
    }
  },
   mounted() {
    const chartContainer = document.getElementById(this.ID);
    const svgElement = BarChart(this.data, this.params);
    chartContainer.appendChild(svgElement);
  }
}
</script>