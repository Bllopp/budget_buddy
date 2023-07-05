<template>
  <MyHeader  back=true />
  
  <DoughnutChart class="chart"
  :params="data(1, 'name', 'price').chart1.paramsChart"
  :data="data(1, 'name', 'price').chart1.dataChart"
  :ID="data(1, 'name', 'price').chart1.id_"
  :title="'Here is my chart!'"
/>

  <DoughnutChart class = "chart" 
  :params="this.chart2.paramsChart" 
  :data="chart2.dataChart" 
  :ID="chart2.id_"
  title="here is my secund chart"
  />

  <BarChart class = "chart" 
  :params="params" 
  :data="chart3.dataChart" 
  :ID="chart3.id_"
  title="My bar chart"
  />
  <!--
    on veut 1 barchart qui affiche les noms de chaque achat et leur prix groupé (rajouter un group by name dans le sql)
    on veut un chart qui affiche 
  -->


</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import DoughnutChart from '@/components/Charts/DoughnutChart/DoughnutChart.vue';
import BarChart from '@/components/Charts/BarChart/BarChart.vue';
import EventService from '@/services/EventService';

export default {
name: 'myBudgetView',
components: {
  DoughnutChart,
  BarChart,
  MyHeader
},
data() {
  return {
    params:{
      width : 200,
      height : 200,
      margin : 20,
      padding : 0.1,
      name : (d)=>d["name"],
      value : (d)=>d["value"]
    },
    chart1:{
      id_: 'chart1',
      paramsChart: {
      name: (d) => d["name"], //set the label
      value: (d) => Math.round((100 * d["price"]) / 30), // set the values
      width: window.innerWidth,
      height: window.innerHeight,
    },
    dataChart: [
      { name: 'toto', value: 10, price :4},
      { name: 'tuta', value: 12 , price :4}, //idée : créer une fonction qui va prendre le résultat de la requete, prendre 2 clés au choix et utiliser les data de ces clés pour faire le
      { name: 'tata', value: 18 , price :4},
      { name: 'tita', value: 8 , price :4},
      { name: 'titi', value: 16 , price :4}
    ]},
    chart2:{
      id_: 'chart2',
      paramsChart: {
      name: (d) => d["value"], //set the label
      value: (d) => Math.round((100 * d["value"]) / 30), // set the values
      width: window.innerWidth,
      height: window.innerHeight
    },
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
    ]}
  };
},
async mounted(){
  EventService.getData().then((store) => {
    this.data(1, "name", "price", store);
  });
},

methods:{
  data:(id, label, value,store)=>{
    console.log("this is store", store)
  const myObj = {
    [`chart${id}`]:{
      id_: `chart${id}`,
      paramsChart: {
      name: (d) => d[label], //set the label
      value: (d) => Math.round((100 * d[value]) / 30), // set the values
      width: window.innerWidth,
      height: window.innerHeight,
    },
    dataChart: store
        }
      }
    return myObj;

    }
    
},
updated(){

}

};
</script>

<style scoped>
.chart {
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