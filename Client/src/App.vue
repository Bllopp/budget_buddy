<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
  <component :is = "tab"/>
  </div>

</template>

<script>
import Add_receipt from './components/Add_receipt.vue';
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
    Add_receipt,
},
data(){
  return {
    tab : "registerView"
  }
},
mounted(){
  this.$on('navigateToLogin', () => {
    return this.tab = "LoginView";
  })
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
.nav{
  height: 80px;
  background-color: #EF7F7F;
}
.nav button {
  border: #EF7F7F;
  border-width: 10% 10% 10% 10%;
  width: 80px;
}
.nav :hover {
  background-color: #b56a6a;
}

 
</style>
