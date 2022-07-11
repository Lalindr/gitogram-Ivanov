
import feedButtons from '../feedButtons.vue'

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



