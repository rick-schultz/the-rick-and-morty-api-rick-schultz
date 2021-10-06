<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-row align="center"
      justify="space-around">
        <a href="https://rickandmortyapi.com/">
        <v-toolbar-title v-text="title" />
        </a>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
     <span>&copy; <a href="http://rick-schultz.com">Rick Schultz</a> {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
     title: "The Rick and Morty API",
     fixed: false
    }
  }
}
</script>

<style scoped>

  v-btn {
   background: transparent;
  }

  span {
   margin: auto;
  }

  a {
    color: #FFF !important;
    text-decoration: none;
  }

  a:hover{
    color: rgb(255, 152, 0) !important;
    text-decoration: none;
  }

</style>
