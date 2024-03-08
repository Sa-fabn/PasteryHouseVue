<template>
  <img class="imgbackground" src="./assets/circle-from-muffins-berries.jpg" alt="Background image">
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from "vue"


onMounted(() => {
  console.log('🔵 App.vue has mounted')
})


</script>
<style scoped lang="scss">
.imgbackground{
  position: absolute;
  top:0;
  left:bottom;
  bottom:0;
  z-index: -2;
}

</style>