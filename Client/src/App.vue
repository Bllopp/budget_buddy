<!-- eslint-disable vue/valid-v-for -->

<template>
  <div>
    <MyHeader title="Budget Buddy" />
  <!-- <nav class="nav">
    <button class="nav" @click = "tab='HomeView'"><p>Home</p></button>
    <button class="nav" @click = "tab='LoginView'"><p>login</p></button>
    <button class="nav" @click = "tab='myBudgetView'"><p>budget</p></button>
    <button class="nav" @click = "tab='registerView'"><p>register</p></button>
  </nav> -->
  <component :is="tab" @change_category="change_category"></component>

  <Add_receipt  @click = "tab='NewReceiptView'"/>
  </div>

</template>

<script>
import Add_receipt from './components/Add_receipt.vue';
import MyHeader from './components/MyHeader.vue';
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
import LoginView from './views/loginView.vue';
import myBudgetView from './views/myBudgetView';
import registerView from './views/registerView.vue';
import NewReceiptView from './views/NewReceipt.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeView,
    LoginView,
    myBudgetView,
    registerView,
    Add_receipt,
    MyHeader,
    NewReceiptView,
},
created() {
  this.emitter.on('change_category',this.change_category)
},

data(){
  return {
    tab : "HomeView",
    selected_category: ''
    
  }
},
methods: {
  change_category(selected_category) {
    console.log(selected_category);
    this.tab = "myBudgetView"
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
  height: 100%;
  align-items: center;
  /* display: flex; */
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
