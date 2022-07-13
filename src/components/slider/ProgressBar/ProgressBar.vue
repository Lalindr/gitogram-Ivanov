<template>
  <div :class={ active } class="bar">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      active: false,
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish() {
      this.$emit('onFinish');
    },
    async asyncTest() {
      await this.$nextTick();
    }
  },
  mounted() {
    console.log(this.active);

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish);
    setTimeout(() => {
      this.active = true;
    }, 0)

  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish);
  }
} 
</script>


<style lang="scss" src="./ProgressBar.scss">
</style>

