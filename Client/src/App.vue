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
    tab : "myBudgetView"
  }
},
updated(){}
}
</script>

<style>

#app {
  background-image: linear-gradient(to right top, #054899, #894696, #c64c7e, #e36b5e, #e29849);  align-items: center;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  margin : 0px;
  padding : 0px;
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
