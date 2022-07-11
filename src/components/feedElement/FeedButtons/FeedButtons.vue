<template>
  <div class="buttons">
    <button class=" buttons__button buttons__star">Star</button>
    <input class="buttons__input buttons__input-star" type="text" value="156K" readonly>
    <button class="buttons__button buttons__fork">Fork</button>
    <input class=" buttons__input buttons__input-fork" type="text" value="4" readonly>
  </div>

</template>


<script>
export default {
  name: 'feed-buttons',
}
</script>

<style lang="scss" src='./FeedButtons.scss'>
</style>
