import logo from '@/components/Logo/Logo.vue'

export default {
  title: 'logo',
  components: { logo },
}

const template = () => ({
  components: { logo },
  template: ` <logo />`
})

export const defaultView = template.bind({});

defaultView.story = {
  name: "Стандартный вид",
}


