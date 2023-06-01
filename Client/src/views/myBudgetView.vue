<template>
    <DoughnutChart></DoughnutChart>
</template>
  
  <script>





//export

//import 
  import DoughnutChart from '@/components/Charts/DoughnutChart/DoughnutChart.vue';
  export default {
    name: 'myBudgetView',
    components: {
      DoughnutChart
    },
    
  }
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
