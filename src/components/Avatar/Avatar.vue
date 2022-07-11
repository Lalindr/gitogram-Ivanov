<template>
  <div :class="[flex ? avatarFlex : avatar]">
    <img :src=attainImage(name) class='avatar__img' :style='imageStyle'>
    <span class="avatar__name" v-if="showName">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "gitogram-avatar",
  data() {
    return {
      imageStyle: {
        "max-width": this.size,
        "max-height": this.size,
        border: this.bordered ? "2px solid #a6328d" : "none",
      },
      avatarFlex: 'avatar_flex',
      avatar: 'avatar',
    }
  },
  props: {
    name: {
      type: String,
    },
    size: {
      type: String,
    },
    showName: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
    },
    flex: {
      type: Boolean,
    }
  },
  methods: {
    importAll(r) {
      let images = {};
      r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
      return images;
    },
    attainImage(name) {
      const images = this.importAll(require.context('../../img/avatars', false, /\.png$/));
      return images[Object.keys(images).filter(key => key.includes(name))];
    },
  },
}

</script>

<style lang="scss" src="./Avatar.scss">
</style>
