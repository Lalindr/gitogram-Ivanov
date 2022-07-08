<template>
  <div class="avatar">
    <img :src=image class='avatar__img'>
    <span class="avatar__name">{{ name }}</span>
  </div>
</template>

<script>
function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../img/avatars/', false, /\.png$/));
export default {
  name: "gitogram-avatar",
  props: {
    name: String,
    src: String,
  },
  created() {
    if (!this.src) {
      this.image = images[Object.keys(images).filter(key => key.includes(this.name))];
    } else {
      this.image = this.src;
    }
  },
  data() {
    return {
      placeholder: "Jake",
      images: images,
      image: '',
    }
  },
}
</script>

<style>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.avatar__img {
  height: 5rem;
  width: 5rem;
  border: 2px solid #a6328d;
  padding: .25rem;
  border-radius: 360px;
}

@media (max-width: 768px) {
  .avatar__img {
    height: 4rem;
    width: 4rem;
  }
}
</style>
