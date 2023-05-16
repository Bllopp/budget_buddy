<template>
  <MyHeader title="Your expences"/>
  <div class='carrousel' style='background-color: lightgray;'>
    <MyCarrousel />
  </div>
  <div>
    <MyHistoric />
  </div>
  <!-- <img alt="BB Logo" src="./assets/BudgetBuddy_logo.png" class="logo"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyCarrousel from './components/MyCarrousel.vue';
import MyHeader from './components/MyHeader.vue';
import MyHistoric from './components/MyHistoric.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyHeader,
    MyCarrousel,
    MyHistoric
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding : 0;
}
.logo{
  width: 20%;

}
.carrousel{
  height: 250px
}

body{
  margin: 0;
  height: 100%;
}


</style>
