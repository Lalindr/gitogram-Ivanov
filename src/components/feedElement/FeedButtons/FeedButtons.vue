<template>
  <div class="buttons">
    <button class=" buttons__button buttons__star">Star</button>
    <input class="buttons__input buttons__input-star" type="text" :value="stars" readonly>
    <button class="buttons__button buttons__fork">Fork</button>
    <input class=" buttons__input buttons__input-fork" type="text" :value="forks" readonly>
  </div>

</template>


<script>
export default {
  name: 'FeedButtons',
  props: {
    stars: {
      type: Number
    },
    forks: {
      type: Number
    }
  }
}
</script>

<style lang="scss" src='./FeedButtons.scss'>
</style>
