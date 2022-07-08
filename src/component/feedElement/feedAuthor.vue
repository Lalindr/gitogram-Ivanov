<template>
  <div class="profile-pic">
    <img class="profile-pic__img" :src="joshua">
    <h4 class="profile-pic__h4">joshua_i</h4>
  </div>
</template>

<script>
import joshua from '../../img/avatars/andrew-piter.png'
import camile from '../../img/avatars/Camile.png'

export default {
  name: "feed-author",
  data() {
    return {
      name: '',
      joshua: joshua,
      camile: camile,
    }
  }
}
</script>

<style>
.profile-pic {
  display: flex;
  gap: 14px;
  align-items: center;
}

.profile-pic__img {
  height: 44px;
  width: 44px;

}

.profile-pic__h4 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
