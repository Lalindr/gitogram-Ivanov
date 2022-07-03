<template>
  <div class="header-icons">
    <img class="header-icons__home" :src=home>
    <img class="header-icons__lorem-photo" :src=loremPhoto>
    <img class="header-icons__exit" :src=exit>
  </div>
</template>

<script>
import home from '../img/home.png';
import loremPhoto from '../img/lorem-photo.png';
import exit from "../img/exit.png";
export default {
  name: 'gitogram-icons',
  data() {
    return {
      home: home,
      loremPhoto: loremPhoto,
      exit: exit,
    }
  },
}
</script>

<style lang="scss">
.header-icons {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
}

.header-icons__lorem-photo {
  width: 2.5rem;
  height: 2.5rem;
}

@media (max-width: 768px) {
  .header-icons__lorem-photo {
    width: 2rem;
    height: 2rem;
  }

  .header-icons__home {
    width: 1.5rem;
    height: 1.5rem;
  }

  .header-icons__exit {
    width: 1.5rem;
    height: 1.5rem;
  }

  .header-icons {
    margin-left: 2rem;
  }
}

@media (max-width: 375px) {
  .header-icons {
    gap: 1rem;
  }

  .header-icons__lorem-photo {
    width: 1.7rem;
    height: 1.7rem;
  }

  .header-icons__exit {
    width: 1.2rem;
    height: 1.2rem;
  }

  .header-icons__home {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
