<template>
  <div id="historic">
    <div class="title-container">
      <h2 id="Historic_title">Your historic</h2>
    </div>
    <div v-for="expense in expenses" :key="expense.id">
    <Historic_item :data=expense />

    </div>
  
  </div>
</template>

<script>

import Historic_item from './Historic_item.vue';
import EventService from '@/services/EventService';

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
        eventHandler,
        expenses: {}
        
    }
},
methods : {
  
   topTitleListener () {
    window.addEventListener('scroll', this.eventHandler )
  }
},
async created () {
    this.topTitleListener()
    
  EventService.getExpenses()
    .then(response => {
      this.expenses = response
      console.log(this.expenses)
    })
    .catch(error => {
      console.log(error)
    })
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
  
  /* position: sticky;
  top: 0;  */
 
  background: linear-gradient(to right, #07C4CC, #7D2AE8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  background-color: white;

}


.title-container {
  position: sticky;
  top: 0; 
  background-color: white;
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