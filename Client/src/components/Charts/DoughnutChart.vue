<template>
    <div>
      <canvas id="myChart" width="500px" height="500px"></canvas>
      <p>Here is my chart <h1>{{ topLabel }}</h1></p>
    </div>
  </template>
  
  <script>
  import { Chart, ArcElement, DoughnutController, Legend, Tooltip} from 'chart.js';
  Chart.register(DoughnutController, ArcElement,Legend, Tooltip);
  
  export default {
    name: "doughnut-chart",
    props: {
      ValuesLabel: {
        type: Array,
        required: true,
        default: ["value1", "value2", "value3", "value4", "value5"]
      },
      topLabel: {
        type: String,
        required: true,
        default: "Here is my chart"
      },
      dataChart: {
        type: Array,
        required: true,
        default: [10, 20, 30, 40, 50]
      },
    },
    mounted() {
      console.log("My doughnut chart is mounted");
      const options = {
  plugins: {
    colors: {
      enabled: false
    }
  }
};
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: this.ValuesLabel,
          datasets: [
            {
              label: this.topLabel,
              data: this.dataChart,
            }
          ]
        },
        options : options
      });
      return myChart;
    }
  };
  </script>
  