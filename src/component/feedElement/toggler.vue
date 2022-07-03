<template>
  <button class="toggler" @click="changeState">{{ issuesModify }}</button>
</template>

<script>
export default {
  name: "toggler-toggler",
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

<style lang="scss">
.toggler {
  border: none;
  background-color: transparent;
  width: 150px;
  height: 50px;

  &:after {
    padding: 0 5px;
    content: url('../../img/vector/post-Shape.png');
    display: inline-block;
  }

}

.toggler_true::after {
  transform: rotate(180deg);
  padding-bottom: 2px;
}
</style>
