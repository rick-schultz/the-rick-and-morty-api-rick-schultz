import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'https://rickandmortyapi.com/api/character'

export default () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    state: {
      characters: [],
    },
    mutations: {
      setCurrentCharacters(state, payload) {
        state.characters = payload
      },
    },
    actions: {
      async getCharacters({ commit }, value) {
        try {
          const { data: characterList } = await axios.get(
            `${url}?name=${value}`
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
        } catch (error) {
          commit('setCurrentCharacters', [])
        }
      },
    },
  })
