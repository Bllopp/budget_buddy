<template>
  <div>
    <ul v-if="this.categories.length > 0" class="drag" >
      <li  v-for="category in this.categories" :key="category.id"  class="click" @click="selected_category=category.id" >
        {{ category.name }}
        <DoughnutChart :ID="chartID_name + category.id" :data="chart1.dataChart" :params="paramsChart" />
      </li>
    </ul>
  </div>
</template>

<script>
import EventService from '../services/EventService.js'
import DoughnutChart from './Charts/DoughnutChart/DoughnutChart.vue';

export default {
  name: "MyCarrousel",
  components :{
    DoughnutChart,
  },
  data() {
    return {
      paramsChart: {
      name: (d) => d.name,
      value: (d) => Math.round((100 * d.value) / 30),
      width: 200,
      height: 200,
 
    },
    categories : {},
    chart1:{
      id_: 'chart1',
    dataChart: [
      { name: 'toto', value: 10 },
      
      { name: 'tuta', value: 5 }
    ]},
      events: [],
      selected_category: 'test',
      chartID_name: 'Chart_'  
      
    };
  },
  watch: {
  selected_category: function () {
    this.emitter.emit('change_category', this.selected_category);
    // console.log(this.selected_category);
  }
},
async beforeCreate(){

  EventService.getCategories().then(response => {
    this.categories = response
    console.log(this.categories)
  })
  .catch(error => {
      console.log(error)
    })


},

  async mounted() {
    const res = await fetch('http://localhost:8000/events');
    const data = await res.json();
    this.events = data;
    console.log(this.events)
    console.log(this.selected_category)
  },
};
</script>

<style>

.click{
  /* padding: 10px 30px 200px 30px; */
  border: solid 1px rgb(252, 252, 252);
  background-color: rgba(0, 0, 0, 0.20);
  border-radius: 5px;
  width : 150px;
  list-style-type: none; 
  flex : 0 0 auto;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

  background-color: white;
  border-radius: 10px;
  /* padding: 20px; */
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* width: 75%; */
  /* height: 75%; */
  
}

.drag{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-left: 0;
  min-width : 100vw;
  overflow-x: scroll;
}


</style>