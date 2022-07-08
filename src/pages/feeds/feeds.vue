<template>
  <div class="header">
    <upperHeader>
      <template #header__upper-header>
        <div class="header__upper-header">
          <logo />
          <icons />
        </div>
      </template>
    </upperHeader>
    <headerAvatars>
      <template #header__avatars>
        <div class="header__avatars">
          <avatar v-for="name in names" :key="name" :name="name" />
        </div>
      </template>
    </headerAvatars>
  </div>
  <div class="wrapper">
    <feedElement name="Vue.js" desc="<p><strong>JavaScript</strong> framework for building interactive web applications

</p>" :issues="['<strong>joshua_l</strong> Enable performance measuring in production, at the user\'s request',
'<strong>Camille</strong> It\'s Impossible to Rename an Inherited Slot',
'<strong>Marselle</strong> transition-group with flex parent causes removed items to fly']" />
    <feedElement name="React.js"
      desc="<p><strong>Open source</strong> JavaScript library used for designing user interfaces</p>" :issues="['<strong>joshua_l</strong> Enable performance measuring in production, at the user\'s request',
      '<strong>Camille</strong> It\'s Impossible to Rename an Inherited Slot',
      '<strong>Marselle</strong> transition-group with flex parent causes removed items to fly']" />

  </div>
</template>

<script>
import logo from '../../component/logo.vue';
import icons from '../../component/icons.vue';
import avatar from '../../component/avatar.vue';
import feedElement from '../../component/feedElement/feedElement.vue';
import upperHeader from '../../slots/header__upper-header.vue';
import headerAvatars from '../../slots/header__avatars.vue';

export default {
  name: "gitogram-main",
  data() {
    return {
      names: ['Josh', 'andrew', 'Camile', 'Marselle', 'piter',
        'Can', 'Lloveanime', 'Diself', 'Gartor', 'Camilr'],

    }
  },
  components: {
    logo, icons, avatar, feedElement, upperHeader, headerAvatars,
  },
}
</script>


<style>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.header__upper-header {
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  box-sizing: border-box;
  padding: 2% 8%;
}

.header {
  background-color: #fafafa;
  height: 15.5rem;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  width: 100%;
}

.header__avatars {
  display: flex;
  gap: 2.7rem;
  overflow: auto;
  padding: 0 8%;
}

@media (max-width: 820px) {
  .header__avatars {
    padding-bottom: 5px;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .header {
    height: 12rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 375px) {
    .header__upper-header {
      padding-right: 1rem;
    }
  }
}
</style>
