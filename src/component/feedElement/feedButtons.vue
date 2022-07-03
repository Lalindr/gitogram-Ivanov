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

<style lang="scss">
.buttons__button {
  width: 5rem;
  height: 1.7rem;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12);
  padding: 0 11px;

  &:before {
    display: inline-block;
    margin-right: .5rem;
  }
}

.buttons__star {
  border-radius: 6px 0 0 6px;

  &:before {
    content: url('../../img/vector/star.png');
  }

}

.buttons__fork {

  &:before {
    content: url('../../img/vector/fork.png');
  }
}

.buttons__input {
  width: 3.125rem;
  height: 1.5rem;
  border-left: none;
  border: 1px solid rgba(27, 31, 35, 0.15);

  &:focus {
    outline: none;
  }
}

.buttons__input-fork {
  border-radius: 0 6px 6px 0;
  text-align: center;
}

.buttons__input-star {
  border-right: none;
}

@media (max-width: 375px) {
  .buttons__input {
    width: 2.5rem;
  }
}
</style>
