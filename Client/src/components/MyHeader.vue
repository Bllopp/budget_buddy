<template>


  <div id='bg' style="">
    
     
  <h1 class="back_button" v-if='back' @click="onGoBack">◄</h1>   
  <h2 v-else="back" id="title">{{ title }}</h2>
    
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
    title : String,
    back : {
      default : false,
      type : Boolean
    }
},
methods: {
  onGoBack() {
    console.log(this.emitter)
    this.emitter.emit('go-back')
    console.log("go-back")
},
data() {
  return {
    tab : "Home"
  }
}
},
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
    background: linear-gradient(to right, #07C4CC, #7D2AE8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    

 }
#title{
  color:white;
  margin : 0 0 0 0;
  text-align: left;
  padding: 10% 0 10px 10px;
  font-size: 19px;
}

.back_button{
  color: white;
  padding: 0% 0 0px 10px;
  /* position: left; */
  font-size: 30px;
  
}
</style>