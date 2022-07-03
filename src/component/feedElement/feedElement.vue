<template>
  <div class='feed-element'>
    <feedAuthor :name="authorName" />
    <feedContainer>
      <template #feed-container>
        <div class="feed-container">
          <div class="feed-container__upper-feed-container">
            <h1 class="upper-feed-container__h1">{{ name }}</h1>
            <div class="upper-feed-container__p" v-html="desc"></div>
          </div>
          <feedButtons />
        </div>
      </template>
    </feedContainer>
    <toggler @test="handler" /><br>
    <div class="toggler-container" v-if=showIssues>
      <ul>
        <li v-for="issue in issues" :key="issue" v-html="issue">
        </li>
      </ul>
    </div>
    <span class="feed-element__date">15 may</span>
  </div>
</template>
<script>
import feedAuthor from './feedAuthor.vue';
import feedButtons from './feedButtons.vue';
import toggler from './toggler.vue';
import feedContainer from '../../slots/feed-container.vue';
export default {
  name: "feed-element",
  props: ['name', 'desc', 'issues'],
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

.feed-element__date {
  margin: 1.5rem;
  color: rgba(0, 0, 0, 0.4);
}

ul {
  padding-left: 1.2rem;
  padding-bottom: 0.4rem;
  margin: 0;
}

li {
  padding-top: 0.2rem;
  list-style-type: none;
}

li strong {
  margin-right: 0.5rem;
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
