
<template>
  <div class="slider">
    <div class="upper-block">
      <ProgressBar class="progress-bar" />
      <Avatar name="Josh" flex="true" showName=true size="30px" class="avatar" />
    </div>
    <div class="mid-block">
      <img src="https://picsum.photos/350/300">
      <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet.
        Nisi anim cupidatat excepteur officia.
        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        Nostrud officia pariatur ut officia.
        Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
        officia voluptate.
        Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
    </div>
    <div class="lower-block">
      <FollowButton />
    </div>
  </div>
</template>


<script>
import Avatar from '@/components/Avatar/Avatar.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'
import FollowButton from '../Button/Button.vue';
export default {
  name: "Slider",
  components: {
    Avatar, ProgressBar, FollowButton
  }
} 
</script>

<style src="./Slider.css">
</style>
