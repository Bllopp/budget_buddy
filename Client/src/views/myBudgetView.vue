<template>
    <div>
      <h1>My Budget</h1>
      <doughnut-chart
        :ValuesLabel="labels"
        :topLabel="title"
        :dataChart="data"
        :backgroundColor ="backgroundColor"
      />
    </div>
  </template>
  
  <script>
import DoughnutChart from "../components/Charts/DoughnutChart.vue";
 
  export default {
    components: {
      DoughnutChart
    },
    name: "myBudgetView",
  
    // Data section
    data() {
      return {
        labels: ['fruits', 'veggies', 'meat', 'dairy', 'snacks'],
        title : "my chart",
        dataChart : [1,2,3,4,5],
      };
    },
  };
  </script>
  