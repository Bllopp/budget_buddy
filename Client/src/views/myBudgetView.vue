<template>
    <div id="chart">
      <h1>My Budget</h1>
      <doughnut-chart
        :ValuesLabel="labels"
        :topLabel="title"
        :dataChart="dataChart"
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
        title : "my Grocery expenses",
        dataChart : [1,2,3,4,5],
      };
    },
  };
  </script>

<style scoped>
#chart{
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 75%;
  height: 75%;
}

</style>
