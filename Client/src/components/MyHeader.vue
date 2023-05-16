<template>
  <body>

  <div id='bg' style=""> <h2 id="title">{{ title }}</h2></div>
   

  </body>
</template>

<script>
export default {
name : 'MyHeader',
props : {
    title : String
}
}
</script>

<style>
body{
  height : 100%;
}
 
 #bg{
    width:100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color:#EF7F7F;
    

 }
#title{
  color:white;
  margin : 0 0 0 0;
  text-align: left;
  padding: 10% 0 10px 10px;
  font-size: 19px;
  




}
</style>