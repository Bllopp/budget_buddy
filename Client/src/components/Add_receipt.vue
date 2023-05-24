<template>
  <div class="circle"></div>
</template>

<script>
export default {

}
</script>

<style>
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #EF7F7F;
  position: relative;
}
.circle {
  position: fixed;
  bottom: 20px;
  right: 20px;
}


.circle:before,
.circle:after {
  content: "";
  position: absolute;
  background-color: white;
}

.circle:before {
  width: 50%;
  height: 10%;
  top: 45%;
  left: 25%;
}

.circle:after {
  width: 10%;
  height: 50%;
  top: 25%;
  left: 45%;
}

</style>