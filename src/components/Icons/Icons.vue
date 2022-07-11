<template>
  <div class="header-icons">
    <img class="header-icons__home" :src=home>
    <Avatar name="Jake" size="1.8rem" :showName=false />
    <img class="header-icons__exit" :src=exit>
  </div>
</template>

<script>
import home from '@/img/home.png';
import exit from "@/img/exit.png";
import Avatar from "@/components/Avatar/Avatar.vue";
export default {
  name: 'gitogram-icons',
  data() {
    return {
      home: home,
      exit: exit,
    }
  },
  components: {
    Avatar,
  }
}
</script>

<style lang="scss" src="./Icons.scss">
</style>
