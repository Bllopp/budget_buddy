<!-- eslint-disable vue/valid-v-for -->
<template>
  <nav>
    <button @click = "tab='HomeView'"><p>Home</p></button>
    <button @click = "tab='LoginView'"><p>login</p></button>
    <button @click = "tab='myBudgetView'"><p>budget</p></button>
    <button @click = "tab='registerView'"><p>register</p></button>
    
  </nav>
  <component :is = "tab" />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
import LoginView from './views/loginView.vue';
import myBudgetView from './views/myBudgetView';
import registerView from './views/registerView.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeView,
    LoginView,
    myBudgetView,
    registerView,
},
data(){
  return {
    tab : "HomeView"
  }
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
