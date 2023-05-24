<template>
  <div class='historic_item'>

    <p>{{ data.description }}</p>
    <table>
      <tbody>
        <tr>
          <td>x2</td>
          <td>test</td>
          <td>20€</td>
        </tr>
        <tr>
          <td>x1</td>
          <td>tes 2</td>
          <td>10€</td>
        </tr>
      </tbody>
    </table>
    
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