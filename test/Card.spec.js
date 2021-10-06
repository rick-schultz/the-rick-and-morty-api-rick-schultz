import { mount } from '@vue/test-utils'
import Card from '../components/Card.vue'

describe('This component is the single card that will be rendered for each character.', () => {
  test('is a vue instance', () => {
    const wrapper = mount(Card, {
      propsData: {
        image: 'https://avatars.githubusercontent.com/u/60229666?v=4',
        url: 'https://api.github.com/users/rick-schultz',
        name: 'Rick Schultz',
        status: 'Alive',
        species: 'Human',
        location: {
          url: 'https://goo.gl/maps/FFhaobqzKJLdNuQD8',
          name: 'Poços de Caldas',
        },
        episode: 'https://www.empolis.com/',
        episodename: 'Working for Empolis',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders the props', () => {
    const propsImage = 'https://avatars.githubusercontent.com/u/60229666?v=4'
    const propsUrl = 'https://api.github.com/users/rick-schultz'
    const propsName = 'Rick Schultz'
    const propsStatus = 'Alive'
    const propsSpecies = 'Human'
    const propsLocationUrl = 'https://goo.gl/maps/FFhaobqzKJLdNuQD8'
    const propsLocationName = 'Poços de Caldas'
    const propsEpisode = 'https://www.empolis.com/'
    const propsEpisodeName = 'Working for Empolis'

    const wrapper = mount(Card, {
      propsData: {
        image: propsImage,
        url: propsUrl,
        name: propsName,
        status: propsStatus,
        species: propsSpecies,
        location: {
          url: propsLocationUrl,
          name: propsLocationName,
        },
        episode: propsEpisode,
        episodename: propsEpisodeName,
      },
    })
    expect(wrapper.html()).toContain(propsName)
  })
})
