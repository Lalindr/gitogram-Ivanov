<template>
  <button class="toggler" @click="changeState">{{ issuesModify }}</button>
</template>

<script>
export default {
  name: "GitogramToggler",
  emits: ['test'],
  data() {
    return {
      issuesStatus: false,
    }
  },
  computed: {
    issuesModify() {
      return this.issuesStatus ? "Hide Issues" : "View issues";
    }
  },
  methods: {
    changeState(e) {
      this.issuesStatus = !this.issuesStatus;
      e.target.classList.toggle('toggler_true');
      this.$emit("test", this.issuesStatus);

    }
  }
}
</script>

<style lang="scss" src="./Toggler.scss">
</style>
