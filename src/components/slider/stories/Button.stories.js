import sliderButton from '@/components/slider/Button/Button.vue'

export default {
  title: 'Button',
  components: { sliderButton },
}

export const defaultView = () => ({
  components: { sliderButton },
  template: `
<sliderButton />
`
});

defaultView.story = {
  name: "Стандартный вид",
}



