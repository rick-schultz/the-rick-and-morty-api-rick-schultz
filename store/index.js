import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'https://rickandmortyapi.com/api/character'

export const state = {
  characters: [],
}

export const mutations = {
  setCurrentCharacters(state, payload) {
    state.characters = payload
  },
}

export const actions = {
  async getCharacters({ commit }, value) {
    try {
      const { data: characterList } = await axios.get(`${url}?name=${value}`)
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
}

export default () =>
  new Store({
    state,
    mutations,
    actions,
  })
