<template>
  <div id="historic">
    <h2>Your historic</h2>
    <div v-for="event in events" :key="event.id">
    <Historic_item :data=event />
    </div>
    <div id="buton"><router-link to="/" >+</router-link></div>
  </div>
</template>

<script>

import Historic_item from './Historic_item.vue';

export default {
name: "MyHistoric",
data() {
    return {
        events: []
    }
},
async mounted() {
    const res = await fetch('http://localhost:8000/events');
    const data = await res.json();
    this.events = data;
    console.log(this.events)
  },
components: {
    Historic_item
}

}
</script>

<style>
#buton {

  position: sticky;
  width : fit-content;
  height: fit-content;
  border-radius: 100%;
  background-color: pink;
}

#historic{
    height: 100%;
}
</style>