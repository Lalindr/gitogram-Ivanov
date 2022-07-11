import feedAuthor from '../feedAuthor.vue';

export default {
  title: 'feedAuthor',
  components: { feedAuthor },
}

export const defaultView = () => ({
  components: { feedAuthor },
  template: `
<feedAuthor  />
`
});

defaultView.story = {
  name: "Стандартный вид",
}

