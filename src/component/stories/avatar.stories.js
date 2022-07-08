import avatar from '../avatar.vue';

export default {
  title: 'avatar',
  components: { avatar },
}

export const defaultView = () => ({
  components: { avatar },
  template: `
<avatar src="https://picsum.photos/200" name="John"/>
`
});

defaultView.story = {
  name: "Стандартный вид",
}

