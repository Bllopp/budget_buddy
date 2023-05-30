<template>
    <div>
      <canvas id="myChart" width="100" height="100"></canvas>
      <h4>{{ topLabel }}</h4>
    </div>
  </template>
  
  <script>
  import { Chart, ArcElement, DoughnutController, Legend, Tooltip} from 'chart.js';
import { registerables } from 'chart.js';
  Chart.register(DoughnutController, ArcElement,Legend, Tooltip, ...registerables);
  
  export default {
    name: "doughnut-chart",
    props: {
      ValuesLabel: {
        type: Array,
        required: true,
        
      },
      topLabel: {
        type: String,
        required: true,
        
      },
      dataChart: {
        type: Array,
        required: true,
        
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
  