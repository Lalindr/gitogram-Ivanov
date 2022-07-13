
import feedButtons from '@/components/feedElement/FeedButtons/FeedButtons.vue'

export default {
  title: 'feedButtons',
  components: { feedButtons },
}

export const defaultView = () => ({
  components: { feedButtons },
  template: `
<feedButtons />
`
});

defaultView.story = {
  name: "Стандартный вид",
}



