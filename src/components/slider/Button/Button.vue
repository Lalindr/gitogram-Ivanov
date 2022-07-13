<template>
  <button class="sliderbutton" :class="[{ follow: following }]" @click=followChange @mouseover=hoverText
    @mouseleave=restoreText v-text=text></button>
</template>


<script>
export default {
  name: "SliderButton",
  data() {
    return {
      following: false,
      text: ''
    }
  },
  methods: {
    followChange() {
      this.following = !this.following;
      this.restoreText();
    },
    hoverText() {
      if (this.following) {
        this.text = "Unfollow";
      }
    },
    restoreText() {
      this.text = this.following ? "Following" : "Follow";
    }
  },
  mounted() {
    this.followChange();
  }
}
</script>

<style src="./Button.css">
</style>
