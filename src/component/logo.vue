<template>
  <div class="logo-block">
    <img class="logo-block__logo" :src=picLogo>
  </div>
</template>


<script>
import logo from '../img/Gitogram.png';
export default {
  name: "gitogram-logo",
  data() {
    return {
      picLogo: logo,
    }
  },
} 
</script>

<style lang="scss">
.logo-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo_block__logo {
  width: 10rem;
  height: 6rem;
}

@media (max-width: 425px) {
  .logo-block__logo {
    width: 6.25rem;
    height: 1.3rem;
  }

}
</style>
