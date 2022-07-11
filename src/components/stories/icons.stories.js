import icons from '../icons.vue';

export default {
  title: 'icons',
  components: { icons },
}

export const defaultView = () => ({
  components: { icons },
  template: `
<icons />
`
});

defaultView.story = {
  name: "Стандартный вид",
}



