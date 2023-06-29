<template>
  <div class='historic_item'>

    <h4 class="supermaket">{{ data.location }}</h4>
    <p class="date">  {{ formated_date }} </p>
    <table>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>x{{ item.quantity || '1' }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}€</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td></td>
          <td>{{ data.total_price }}€</td>
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
    data : Object,
    
},
data(){
  return {
    items : {},
    formated_date : new Date(this.data.date)
    
}
}, 
async created(){
  EventService.getItem(this.data.id).then( res => {
    this.items = res,
    console.log(this.items)
    
    
  })

},
mounted(){
  this.formated_date = this.formated_date.toLocaleDateString('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})
  console.log(this.formated_date)
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

.supermarket {
  font-size: 24px;
 
    padding-top: 10px;

}

.date {
  font-size: 14px;
  margin-top: -10px;
}
</style>