<template>
  <div>
    <form  class="container-connexion">
      <h1>Create an account</h1>
      <div v-for="(input, key) in input_field" :key="key">
        <label :for="key">{{ input.label }}</label><br />
        <input :type="input.type" :placeholder="input.placeholder" />
      </div>
      <button class="button" @click="emit_">Valider</button>
    </form>
  </div>
</template>

<script>
const input_field = {
  "nom de famille": {
    label: "Nom de famille",
    type: "text",
    placeholder: "Nom de famille",
    pattern: "[a-zA-Z]{2,}",
  },
  "prénom": {
    label: "Prénom",
    type: "text",
    placeholder: "Prénom",
    pattern: "[a-zA-Z]{2,}",
  },
  "mot de passe": {
    label: "Mot de passe",
    type: "password",
    placeholder: "*******",
    pattern: "[a-zA-Z0-9\\s-]+",
  },
  "adresse email": {
    label: "Adresse email",
    type: "email",
    placeholder: "example@example.com",
    pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+",
  },
  "numéro de téléphone": {
    label: "Numéro de téléphone",
    type: "tel",
    placeholder: "+33 123 456",
    pattern: "\\+?[0-9\\s-]+",
  },
};

export default {
  data() {
    return {
      input_field,
      tab: "registerView"
    };
  },
  methods: {
   emit_() {
      this.$emit("navigateToLogin");
    },
}
}
</script>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
   
    *{
  margin: 0;
  padding: 0;
}

body{
  background-image: linear-gradient(to right top, #054899, #894696, #c64c7e, #e36b5e, #e29849);  align-items: center;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

h1, ::placeholder, label,p{
  color: #f4f4f4;
}

h1{
  opacity: 7;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
}

p{
  font-size: x-small;
  margin-bottom: 5px;

}
.container-connexion {
  position: relative;
  /*box-shadow: 0 8px 24px rgba(0, 32, 63, .45), 0 8px rgba(0, 32, 63, .45);*/
  

}


form { 
  background:rgba(250, 250, 250, 0.36);
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  /*justify-content: center;
  
  /*position: absolute;*/
  border-radius: 20px;
  border-left: 1px solid rgba(250, 250, 250, 0.36);
  border-top: 1px solid rgba(250, 250, 250, 0.36);;
  padding: 3rem;
  height: fit-content;
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, .25);
  backdrop-filter: blur(10px); /*pour etre compatible avec le plus de navigateur possible*/
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrodp-filter: blur(10px);

}
  
input{
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 200px;
  background-color: #d33f3257;
  margin-bottom: 10px;
  margin-top: 10px;
  backdrop-filter: blur(5px); /*pour etre compatible avec le plus de navigateur possible*/
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrodp-filter: blur(5px);
  box-shadow: 4px 4px 60px  rgba(0, 0, 0, .25);

}

.button{
  width: 100%;
  padding: 1rem;
  align-self: center;
  border: none;
  border-left:1px solid #ccc ;
  border-top: 1px solid #ccc;
  border-radius: 20px;
  width: 200px;
  background-color: transparent;
  color:#f4f4f4;
  margin-bottom: 10px;
  margin-top: 10px;
  backdrop-filter: blur(5px); /*pour etre compatible avec le plus de navigateur possible*/
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrodp-filter: blur(5px);
  box-shadow: 4px 4px 60px  rgba(0, 0, 0, .25);
}

.button:hover{
  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
}






  input[type=text], input[type=password], input[type=email], input[type=tel]  {
    width: 100%;
    padding-left: 12px 50px;
    margin: 8px 15px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
    </style>