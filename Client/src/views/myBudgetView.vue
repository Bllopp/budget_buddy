<template>
  <MyHeader  back=true />
  
  <DoughnutChart :params="paramsChart" :data="chart1.dataChart" :ID="chart1.id_"/>
  <DoughnutChart :params="paramsChart" :data="chart2.dataChart" :ID="chart2.id_"/>
  <BarChart :params="params" :data="chart3.dataChart" :ID="chart3.id_"/>


</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import DoughnutChart from '@/components/Charts/DoughnutChart/DoughnutChart.vue';
import BarChart from '@/components/Charts/BarChart/BarChart.vue';

export default {
name: 'myBudgetView',
components: {
  DoughnutChart,
  BarChart,
  MyHeader
},
data() {
  return {
    paramsChart: {
      name: (d) => d.name,
      value: (d) => Math.round((100 * d.value) / 30),
      width: 200,
      height: 200
    },
    params:{
      width : 200,
      height : 200,
      margin : 20,
      padding : 0.1,
    },
    chart1:{
      id_: 'chart1',
    dataChart: [
      { name: 'toto', value: 10 },
      { name: 'tuta', value: 12 },
      { name: 'tata', value: 18 },
      { name: 'tita', value: 8 },
      { name: 'titi', value: 16 }
    ]},
    chart2:{
      id_: 'chart2',
    dataChart: [
      { name: 'toto', value: 5 },
      { name: 'tato', value: 10 },
      { name: 'tota', value: 12 },
      { name: 'tita', value: 10 },
      { name: 'tuta', value: 10 }
    ]},
    chart3:{
      id_: 'chart3',
    dataChart: [
      { name: 'toto', value: 5 },
      { name: 'tato', value: 10 },
      { name: 'tuta', value: 12 },
      { name: 'tota', value: 12 },
      { name: 'tota', value: 18 },
      { name: 'tuta', value: 12 },
      { name: 'toto', value: 5 },
      { name: 'tato', value: 10 },
      { name: 'tuta', value: 12 },
      { name: 'tota', value: 12 },
      { name: 'tota', value: 18 },
      { name: 'tuta', value: 12 },
      { name: 'tita', value: 10 },
      { name: 'toto', value: 5 },
      { name: 'tato', value: 10 },
      { name: 'tuta', value: 12 },
      { name: 'tota', value: 12 },
      { name: 'tota', value: 18 },
      { name: 'tuta', value: 12 },
      { name: 'tita', value: 10 },
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
width : 200px;
height : 200px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);}
</style>