<template>
  
  <div :id="chart1.id_">
    <DoughnutChart :params="paramsChart" :data="chart1.dataChart" :ID="chart1.id_"/>
  </div>
  <div :id="chart2.id_">
    <DoughnutChart :params="paramsChart" :data="chart2.dataChart" :ID="chart2.id_"/>
  </div>


  
  
</template>

<script>
import DoughnutChart from '@/components/Charts/DoughnutChart/DoughnutChart.vue';

export default {
  name: 'myBudgetView',
  components: {
    DoughnutChart
  },
  data() {
    return {
      paramsChart: {
        name: (d) => d.name,
        value: (d) => Math.round((100 * d.value) / 30),
        width: 200,
        height: 200
      },
      chart1:{
        id_: 'chart1',
      dataChart: [
        { name: 'toto', value: 10 },
        { name: 'tato', value: 10 },
        { name: 'tota', value: 10 },
        { name: 'tita', value: 10 },
        { name: 'tuta', value: 10 }
      ]},
      chart2:{
        id_: 'chart2',
      dataChart: [
        { name: 'toto', value: 5 },
        { name: 'tato', value: 10 },
        { name: 'tota', value: 12 },
        { name: 'tita', value: 10 },
        { name: 'tuta', value: 10 }
      ]}
      
    };
  },
};
</script>

<style scoped>
#chart {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin : 10px;
}

#chart1, #chart2, #chart3 {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);}
</style>
