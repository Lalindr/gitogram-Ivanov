<template>
  <div class='feed-element'>
    <Avatar :name="userData.login" size="1.8rem" :showName="true" :flex="true" :source="userData.avatar" />
    <FeedContainer>
      <template #feed-container>
        <div class="feed-container">
          <div class="feed-container__upper-feed-container">
            <h1 class="upper-feed-container__h1">{{ title }}</h1>
            <div class="upper-feed-container__p">
              <p><strong class="desc-title">{{ desc_title }}</strong>{{ desc }}</p>
            </div>
          </div>
          <FeedButtons :stars="userData.stars" :forks="userData.forks" />
        </div>
      </template>
    </FeedContainer>
    <Toggler @test="handler" />
    <div class="toggler-container" v-if=showIssues>
      <ul>
        <li>
          <p><strong>joshual_l</strong>{{ issues }}</p>
        </li>
        <li>
          <p><strong>Camile</strong>It's Impossible to Rename an Inherited Slot</p>
        </li>
        <li>
          <p><strong>Marselle</strong>transition-group with flex parent causes removed items to fly</p>
        </li>
      </ul>
    </div>
    <span class="feed-element__date">15 may</span>
  </div>
</template>
<script>
import FeedButtons from '../FeedButtons/FeedButtons.vue'
import Toggler from '../Toggler/Toggler.vue';
import FeedContainer from '@/slots/FeedContainer.vue';
import Avatar from '../../Avatar/Avatar.vue'
export default {
  name: "FeedElement",
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    desc_title: {
      type: String,
    },
    userData: {
      type: Object,
    },
    issues: {
      default: ''
    }
  },
  data() {
    return {
      showIssues: false,
    }
  },
  components: {
    FeedButtons, Toggler, FeedContainer, Avatar,
  },
  methods: {
    handler(issuesStatus) {
      issuesStatus ? this.showIssues = true : this.showIssues = false
    }
  },
  created() {
    console.log(this.userData);
  }
}
</script>
  
<style src="./FeedElement.css">
</style>
