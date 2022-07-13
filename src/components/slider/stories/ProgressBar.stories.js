import progressBar from '@/components/slider/ProgressBar/ProgressBar.vue'

export default {
  title: 'progress-bar',
  components: { progressBar },
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "fires when progress reaches the end"
    }
  }
}

const Template = (args) => ({
  components: { progressBar },
  data() {
    return { args }
  },
  template: `<progressBar @onFinish="args.onFinish"/>`
})

export const defaultView = Template.bind({})
defaultView.story = {
  name: "Стандартный вид",
}



