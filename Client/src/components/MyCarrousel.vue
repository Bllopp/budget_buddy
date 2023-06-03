<template>
  <div>
    <ul class="drag">
      <li v-for="event in events" :key="event.id" class="click" @click="selected_category=event.id" >
        {{ event.name }}
        <DoughnutChart  :ChartID="chartID_name + event.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import DoughnutChart from './Charts/DoughnutChart.vue';

export default {
  name: "MyCarrousel",
  components :{
    DoughnutChart,
  },
  data() {
    return {
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