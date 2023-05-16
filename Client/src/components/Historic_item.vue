<template>
  <div class='historic_item'>

    <p>{{ data.description }}</p>
    
  </div>
</template>

<script>
export default {
name: 'Historic_item',
props: {
    data : Object
},
}
</script>

<style>
    .historic_item{
        background-color: gray;
    }
    h2{
        margin : 0 0 0 0;
        text-align: left;
        padding: 10% 0 10px 10px;
        font-size: 19px;
  
    }

</style>