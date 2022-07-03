<template>
  <div class='feed-element'>
    <feedAuthor />
    <feedContainer>
      <template #feed-container>
        <div class="feed-container">
          <div class="feed-container__upper-feed-container">
            <h1 class="upper-feed-container__h1">Vue.js</h1>
            <p class="upper-feed-container__p"><strong>JavaScript</strong> framework for
              building interactive web
              applications</p>
          </div>
          <feedButtons />
        </div>
      </template>
    </feedContainer>
    <toggler @test="handler" />
    <div class="toggler-container" v-if=showIssues>
      <p><strong>Lorem</strong> ipsum dolor sit amet</p>
      <p><strong>Lorem</strong> ipsum dolor sit amet</p>
      <p><strong>Lorem</strong> ipsum dolor sit amet</p>
    </div>
  </div>
</template>
<script>
import feedAuthor from './feedAuthor.vue';
import feedButtons from './feedButtons.vue';
import toggler from './toggler.vue';
import feedContainer from '../../slots/feed-container.vue';
export default {
  name: "feed-element",
  data() {
    return {
      showIssues: false,
    }
  },
  components: {
    feedAuthor, feedButtons, toggler, feedContainer
  },
  methods: {
    handler(issuesStatus) {
      issuesStatus ? this.showIssues = true : this.showIssues = false
    }
  }
}
</script>
  
<style>
.feed-container {
  background-color: #fff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border: 1px solid #f1f1f1;
  height: 173px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 1rem;
  width: 60rem;
}

.feed-element {
  align-self: center;
  width: 80%;
  margin-left: 12rem;
}

@media (max-width: 768px) {
  .feed-container {
    width: 90%;
  }

  .feed-element {
    margin-left: 0;
  }
}

@media (max-width: 375px) {
  .feed-element {
    width: 20rem;
    margin-left: 0;
  }

  .feed-container {
    width: 16rem;
  }
}
</style>
