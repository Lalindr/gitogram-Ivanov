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
          <Avatar v-for="item in items" :key="item.id" :name="item.owner.login" size="80px" :showName="true"
            :bordered="true" :source="item.owner.avatar_url" />
        </div>
      </template>
    </HeaderAvatars>
  </div>
  <div class="x-container">
    <FeedElement v-for="item in items" :key="item.id" :title="item.name" :desc="item.description"
      :userData="createUserData(item)" :issues="item.issues_url" />
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';
import Icons from '@/components/Icons/Icons.vue';
import Avatar from '@/components/Avatar/Avatar.vue';
import FeedElement from '@/components/feedElement/FeedElement/FeedElement.vue'
import UpperHeader from '@/slots/HeaderUpperHeader.vue';
import HeaderAvatars from '@/slots/HeaderAvatars.vue';
import * as api from "@/api/rest/trendings.js"

export default {
  name: "GitogramMain",
  data() {
    return {
      names: ['Josh', 'Andrew', 'Jamile', 'Marselle', 'Piter', 'Can', 'Lloveanime', 'Diself', 'Gartor', 'Camilr'],
      userName: ['joshua_l', 'Camile', 'Marselle'],
      feedContent: {
        titles: ['Vue.js', 'React.js'],
        desc_title: ['JavaScript', 'Open Source'],
        descs: [' framework for building interactive web applications', ' javascript library used for designing user interfaces'],
      },
      items: []

    }
  },
  components: {
    Logo,
    Icons,
    Avatar,
    FeedElement,
    UpperHeader,
    HeaderAvatars,
  },
  methods: {
    createUserData(item) {
      return {
        avatar: item.owner.avatar_url,
        login: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks_count
      }
    }
  },
  async mounted() {
    try {
      const { data } = await api.getTrendings();
      this.items = data.items;
    }
    catch (error) {
      console.log('error');
    }
  }
}
</script>


<style src=./Feeds.css>
</style>
