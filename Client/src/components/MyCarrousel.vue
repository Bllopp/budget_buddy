<template>
  <div>
    <ul class="drag">
      <li v-for="event in events" :key="event.id" class="click" @click="selected_category=events.id">
        {{ event.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyCarrousel",
  data() {
    return {
      events: []
    };
  },
  async mounted() {
    const res = await fetch('http://localhost:8000/events');
    const data = await res.json();
    this.events = data;
    console.log(this.events)
  },
};
</script>

<style>

.click{
  padding: 10px 30px 200px 30px;
  border: solid 1px lightgray;
  border-radius: 5px;
  width : 150px;
  list-style-type: none; 
  flex : 0 0 auto;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  
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