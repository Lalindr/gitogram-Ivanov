
import slider from '../Slider/Slider.vue';
export default {
  title: 'slider',
  components: { slider },
}

const template = () => ({
  components: { slider },
  template: `
<slider />
`
});

export const defaultView = template.bind({});

defaultView.story = {
  name: "Стандартный вид",
}



