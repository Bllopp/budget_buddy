<template>
  <div class='historic_item'>

    <p>{{ data.location }} {{ data.date }}</p>
    <table>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.quantity || 'x1' }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}€</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

import EventService from '@/services/EventService';

export default {
name: 'Historic_item',
props: {
    data : Object
},
data(){
  return {
    items : {}
}
}, 
async created(){
  EventService.getItem(this.data.id).then( res => {
    this.items = res,
    console.log(this.items)
  }

  )
}
}
</script>

<style>
    .historic_item{
        background-color: rgba(91, 187, 204, 0.761);
        border: solid black 1x ;
        border-radius: 5pt;
        width: 90%;
        margin-left: 5% ;
        padding-bottom: 10px;
    }
    h2{
        margin : 0 0 0 0;
        text-align: left;
        padding: 10% 0 10px 10px;
        font-size: 19px;
  
    }
    table {
  border-collapse: collapse;
  /* width : 80%; */
  /* margin-left:10%; */
}

td, th {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 8px;
  text-align: left;
  color: white;
}
td:nth-child(2) {
  width: 100%;
}
</style>