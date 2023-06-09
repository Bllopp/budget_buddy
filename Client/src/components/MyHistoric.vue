<template>
  <div id="historic">
    <h2 id="Historic_title">Your historic</h2>
    <div v-for="event in events" :key="event.id">
    <Historic_item :data=event />
    <Historic_item :data=event />
    </div>
  
  </div>
</template>

<script>

import Historic_item from './Historic_item.vue';

export default {
name: "MyHistoric",
data() {
  var eventHandler = function() {
      var title = document.querySelector('#Historic_title');
      var titlePosition = title.getBoundingClientRect().top;
      if (titlePosition <= 0) {
        title.classList.add('scrolled');
      } else {
        title.classList.remove('scrolled');
        }
    }
    return {
        events: [],
        eventHandler
        
    }
},
methods : {
  
   topTitleListener () {
    window.addEventListener('scroll', this.eventHandler )
  }
},
created () {
    this.topTitleListener()
},
unmounted(){
  window.removeEventListener('scroll', this.eventHandler)
}
,async mounted() {

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

#Historic_title{
  color: white;
  position: sticky;
  top: 0; 
  transition: background-color 0.5s;
}

#Historic_title.scrolled{
  background-color: #EF7F7F;
  transition: background-color 0.5s;
}



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