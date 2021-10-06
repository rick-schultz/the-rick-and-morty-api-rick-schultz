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
