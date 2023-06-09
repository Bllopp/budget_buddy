<template>


  <div id='bg' style="">
     <h2 id="title">{{ title }}</h2>
    
  </div>
  <!-- <div > -->
    <!-- <nav> -->
   <!--  -->
    <!-- <button @click = "tab='Home'"><p>Home</p></button> -->
    <!-- <button @click = "tab='login'"><p>login</p></button> -->
    <!-- <button @click = "tab='budget'"><p>budget</p></button> -->
    <!-- <button @click = "tab='register'"><p>register</p></button> -->
    <!-- <component :is = "tab" /> -->
    <!-- </nav> -->
      <!--  -->
  <!-- </div> -->
   

 
</template>

<script>
export default {
name : 'MyHeader',
props : {
    title : String
},
data() {
  return {
    tab : "Home"
  }
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    

 }
#title{
  color:white;
  margin : 0 0 0 0;
  text-align: left;
  padding: 10% 0 10px 10px;
  font-size: 19px;
  




}
</style>