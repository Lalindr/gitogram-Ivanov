import feedElement from '@/components/feedElement/FeedElement/FeedElement.vue'

export default {
  title: 'feedElement',
  components: { feedElement },
  argTypes: {
    title: {
      name: 'title',
      type: 'string',
      control: {
        type: 'text'
      }
    },
    desc_title: {
      name: 'description title',
      type: 'string',
      control: {
        type: 'text'
      }
    },
    desc: {
      name: 'description',
      type: 'string',
      control: {
        type: 'text'
      }
    }
  }
}

const template = (args) => ({
  components: { feedElement },
  data() {
    return { args };
  },
  template: `<feedElement v-bind="args"/>`,

})

export const defaultView = template.bind({});



defaultView.story = {
  name: "Стандартный вид",
}



