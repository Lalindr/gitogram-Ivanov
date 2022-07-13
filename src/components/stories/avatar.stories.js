import Avatar from '../Avatar/Avatar.vue'


export default {
  title: 'avatar',
  components: { Avatar }
}

export const defaultView = () => ({
  components: { Avatar },
  template: `
    <Avatar
      name="Andrew"
      showName = true
    />
  `
});


export const smallView = () => ({
  components: { Avatar },
  template: `
    <Avatar
      name="Andrew" size="30px" showName=true
    />
  `
});

export const withoutNameView = () => ({
  components: { Avatar },
  template: `
    <Avatar
      name="Andrew" 
    />
  `
});

export const borderedView = () => ({
  components: { Avatar },
  template: `
    <Avatar
      name="Andrew" 
      bordered = true
    />
  `
});

export const rowView = () => ({
  components: { Avatar },
  template: `
    <Avatar
      name="Andrew" 
      flex=true
      showName=true
    />
  `
});


