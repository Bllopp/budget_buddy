<template><div :id="ID"></div></template>

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
    }
  },
  methods: {
    build() {
      return  PieChart(this.data, this.params);
    }
  },
  mounted() {
    const chartContainer = document.getElementById(this.ID);
    const svgElement = PieChart(this.data, this.params);
    chartContainer.appendChild(svgElement);
  }
}
</script>