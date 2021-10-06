<template>
  <div id="mainPage">
    <input id="searchBar" v-model="input" type="text" placeholder="Search for a character"/>
    <div id="containerWrapper">
      <div v-for="(character) in $store.state.characters" :key="character.id">
        <Card
        :url="character.url"
        :name="character.name"
        :image="character.image"
        :status="character.status"
        :location="character.location"
        :episode="character.episode"
        :episodename="character.firstEpisodeName"
        :species="character.species"
        />
      </div>
    </div>
    <div v-if="$store.state.characters.length === 0">
      <h1>Could Not Find Character</h1>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
export default {
    data: () => ({
     debouncedInput: '',
     timeout: null,
     characters: [],
    }),
    computed: {
      input: {
        get() {
          return this.debouncedInput
        },
        set(val) {
          if (this.timeout) clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.debouncedInput = val
            this.getCharacters(val);
          }, 500)
        },
      },
    },
    mounted(){
      this.getCharacters('');
    },
      methods: {
        ...mapActions(['getCharacters']),
      },
  }
</script>

<style>
  * {
   color: #FFF
  }

  form {
   font-size: 20px;
  }

  input {
    background: #FFF;
    color: #000
  }

  #mainPage{
   text-align: center;
  }

  #containerWrapper{
    text-align: left;
    display: flex;
    flex-wrap:  wrap;
  }

  #searchBar{
    width: 20rem;
    margin: 2rem;
    height: 2rem;
    padding-left: 0.8rem;
  }

</style>
