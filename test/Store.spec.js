import Vuex, { Store } from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import axios from 'axios'
import { state, mutations } from '../store'

const { setCurrentCharacters } = mutations

describe('mutations', () => {
  it('setCharacters', () => {
    // mock state
    const stateTmp = [{ id: 1 }]
    // apply mutation
    setCurrentCharacters(state, stateTmp)
    // assert result
    expect(state.characters).toHaveLength(1)
  })
})

// Actions test with mock store getting error: commit is not a function

const localVue = createLocalVue()

localVue.use(Vuex)

describe('actions', () => {
  let state
  let actions
  let mutations

  beforeEach(() => {
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
  })

  const store = new Store({
    state,
    actions,
    mutations,
  })

  it('getCharacters', async () => {
    // apply mutation
    mutations.setCurrentCharacters(state, [])

    // call action
    await actions.getCharacters(store, '')

    // assert result
    expect(state.characters).toHaveLength(20)
  })
})

// describe('actions', () => {
//   it('getCharacters', async () => {
//     // apply mutation
//     setCurrentCharacters(state, [])

//     // call action
//     await actions.getCharacters()

//     console.log(state)
//     // assert result
//     expect(state.characters).toHaveLength(20)
//   })
// })
