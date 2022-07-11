<template>
  <div class="header">
    <UpperHeader>
      <template #header__upper-header>
        <div class="header__upper-header">
          <Logo />
          <Icons />
        </div>
      </template>
    </UpperHeader>
    <HeaderAvatars>
      <template #header__avatars>
        <div class="header__avatars">
          <Avatar v-for="name in names" :key="name" :name="name" size="80px" :showName=true :bordered=true />
        </div>
      </template>
    </HeaderAvatars>
  </div>
  <div class="x-container">
    <FeedElement v-for="(title, index) in feedContent.titles" :key="title" :title="title"
      :desc="feedContent.descs[index]" :desc_title="feedContent.desc_title[index]" />
  </div>
</template>

<script>
import Logo from '../../components/Logo/Logo.vue';
import Icons from '../../components/Icons/Icons.vue';
import Avatar from '../../components/Avatar/Avatar.vue';
import FeedElement from '../../components/feedElement/FeedElement/FeedElement.vue'
import UpperHeader from '../../slots/HeaderUpperHeader.vue';
import HeaderAvatars from '../../slots/HeaderAvatars.vue';

export default {
  name: "gitogram-main",
  data() {
    return {
      names: ['Josh', 'Andrew', 'Jamile', 'Marselle', 'Piter', 'Can', 'Lloveanime', 'Diself', 'Gartor', 'Camilr'],
      userName: ['joshua_l', 'Camile', 'Marselle'],
      feedContent: {
        titles: ['Vue.js', 'React.js'],
        desc_title: ['JavaScript', 'Open Source'],
        descs: [' framework for building interactive web applications', ' javascript library used for designing user interfaces'],
      },

    }
  },
  components: {
    Logo, Icons, Avatar, FeedElement, UpperHeader, HeaderAvatars,
  },
}
</script>


<style src=./Feeds.css>
</style>
