import Vuex, { Store } from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import axios from 'axios'

describe('actions', () => {
  let state
  let actions
  let mutations
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    state = {
      characters: [],
    }
    actions = {
      async getCharacters({ commit }, value) {
        const { data: characterList } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${value}`
        )
        const newArr = await characterList.results.map(async (character) => {
          if (character.episode[0]) {
            const { data: episode } = await axios.get(character.episode[0])
            return {
              ...character,
              firstEpisodeName: episode.name,
            }
          }
          return {
            ...character,
            firstEpisodeName: 'Not Found!',
          }
        })

        commit('setCurrentCharacters', await Promise.all(newArr))
      },
    }
    mutations = {
      setCurrentCharacters(state, payload) {
        state.characters = payload
      },
    }
    store = new Store({
      state,
      actions,
      mutations,
    })
  })

  it('getCharacters', async () => {
    // apply mutation
    mutations.setCurrentCharacters(state, [])

    // call action
    await store.dispatch('getCharacters', '')
    console.log(state.characters)

    // assert result
    expect(state.characters).toHaveLength(20)
  })
})
