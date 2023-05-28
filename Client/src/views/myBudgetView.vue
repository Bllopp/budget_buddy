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
    monted(){
      fillBackgroundColor(dataChart);
    },
  
    // Data section
    data() {
      return {
        labels: ['fruits', 'veggies', 'meat', 'dairy', 'snacks'],
        title : "my chart",
        dataChart : [1,2,3,4,5],
        backgroundColor,
      };
    },
    //methods
    methods() {
      function getRandomColor() {
      const letters = '0123456789ABCDEF';
      const color = '#';
      for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function fillBackgroundColor(d) {
  d.forEach(()=> backgroundColor.push(getRandomColor()))
}

    }
  };
  </script>
  