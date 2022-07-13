<template>
  <div class="logo-block">
    <img class="logo-block__logo" :src=picLogo>
  </div>
</template>


<script>
import logo from '@/img/Gitogram.png';
export default {
  name: "GitogramLogo",
  data() {
    return {
      picLogo: logo,
    }
  },
} 
</script>

<style src="./Logo.css">
</style>
