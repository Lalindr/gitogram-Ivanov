
import toggler from '@/components/feedElement/Toggler/Toggler.vue'


export default {
  title: 'toggler',
  components: { toggler },

}

export const defaultView = () => ({
  components: { toggler },
  template: `
<toggler />
`
});

defaultView.story = {
  name: "Стандартный вид",
}



