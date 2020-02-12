<template>
  <div id="app">
    <app-header></app-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #5b6d80;
  margin: 0px;
}
</style>
