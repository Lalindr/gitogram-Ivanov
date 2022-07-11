import feedElement from '../feedElement.vue'

export default {
  title: 'feedElement',
  components: { feedElement },
}

export const defaultView = () => ({
  components: { feedElement },
  template: `
<feedElement />
`
});

defaultView.story = {
  name: "Стандартный вид",
}



